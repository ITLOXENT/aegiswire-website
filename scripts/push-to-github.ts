import { getUncachableGitHubClient } from '../lib/github';
import * as fs from 'fs';
import * as path from 'path';

const OWNER = 'ITLOXENT';
const REPO = 'aegiswire-website';
const ROOT = '/home/runner/workspace';

const INCLUDE_DIRS = ['app', 'lib', 'server', 'scripts', 'public'];
const INCLUDE_ROOT_FILES = [
  'package.json', 'package-lock.json', 'next.config.mjs', 'tsconfig.json',
  'postcss.config.mjs', 'tailwind.config.mjs', 'amplify.yml', 'next-env.d.ts',
  '.gitignore'
];
const EXCLUDE_PATTERNS = [
  'node_modules', '.next', '.git', '__pycache__', '.DS_Store',
  '.env', '.env.local', '.env.production'
];

function collectFiles(dir: string, base: string): string[] {
  const results: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (EXCLUDE_PATTERNS.includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    const rel = path.relative(ROOT, full);
    if (entry.isDirectory()) {
      results.push(...collectFiles(full, base));
    } else {
      results.push(rel);
    }
  }
  return results;
}

async function pushToGitHub() {
  try {
    const octokit = await getUncachableGitHubClient();
    console.log('Connected to GitHub');

    let sha: string;
    try {
      const { data: ref } = await octokit.rest.git.getRef({ owner: OWNER, repo: REPO, ref: 'heads/main' });
      sha = ref.object.sha;
      console.log('Got main branch SHA:', sha);
    } catch (e: any) {
      if (e.status === 404) {
        const { data: commit } = await octokit.rest.git.createCommit({
          owner: OWNER, repo: REPO,
          message: 'Initial commit',
          tree: (await octokit.rest.git.createTree({ owner: OWNER, repo: REPO, tree: [] })).data.sha
        });
        await octokit.rest.git.createRef({ owner: OWNER, repo: REPO, ref: 'refs/heads/main', sha: commit.sha });
        sha = commit.sha;
        console.log('Created initial commit');
      } else throw e;
    }

    const { data: baseCommit } = await octokit.rest.git.getCommit({ owner: OWNER, repo: REPO, commit_sha: sha });
    console.log('Base tree:', baseCommit.tree.sha);

    // Auto-discover all files
    const allFiles: string[] = [...INCLUDE_ROOT_FILES];
    for (const dir of INCLUDE_DIRS) {
      const full = path.join(ROOT, dir);
      if (fs.existsSync(full)) {
        allFiles.push(...collectFiles(full, ROOT));
      }
    }

    const treeItems: any[] = [];
    for (const file of allFiles) {
      const fullPath = path.join(ROOT, file);
      if (!fs.existsSync(fullPath) || fs.statSync(fullPath).isDirectory()) continue;

      const isBinary = /\.(webp|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/i.test(file);
      if (isBinary) {
        const content = fs.readFileSync(fullPath).toString('base64');
        const { data: blob } = await octokit.rest.git.createBlob({ owner: OWNER, repo: REPO, content, encoding: 'base64' });
        treeItems.push({ path: file, mode: '100644', type: 'blob', sha: blob.sha });
      } else {
        const content = fs.readFileSync(fullPath, 'utf-8');
        const { data: blob } = await octokit.rest.git.createBlob({ owner: OWNER, repo: REPO, content, encoding: 'utf-8' });
        treeItems.push({ path: file, mode: '100644', type: 'blob', sha: blob.sha });
      }
      console.log('Created blob for:', file);
    }

    // No base_tree — creates a fully clean tree, removing any old/deleted files
    const { data: tree } = await octokit.rest.git.createTree({ owner: OWNER, repo: REPO, tree: treeItems });
    console.log('Created tree:', tree.sha);

    const timestamp = new Date().toISOString().slice(0, 16).replace('T', ' ');
    const { data: newCommit } = await octokit.rest.git.createCommit({
      owner: OWNER, repo: REPO,
      message: `Deploy site update – ${timestamp}`,
      tree: tree.sha,
      parents: [sha]
    });
    console.log('Created commit:', newCommit.sha);

    await octokit.rest.git.updateRef({ owner: OWNER, repo: REPO, ref: 'heads/main', sha: newCommit.sha });
    console.log('Pushed to main branch successfully!');

    try {
      const { AmplifyClient, StartJobCommand } = await import('@aws-sdk/client-amplify');
      const amplify = new AmplifyClient({
        region: 'us-east-2',
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
        },
      });
      const job = await amplify.send(new StartJobCommand({ appId: 'd31attfbirvvhn', branchName: 'main', jobType: 'RELEASE' }));
      console.log(`Amplify build triggered: job ${job.jobSummary?.jobId} (${job.jobSummary?.status})`);
    } catch (e: any) {
      console.warn('Could not auto-trigger Amplify build:', e.message);
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

pushToGitHub();
