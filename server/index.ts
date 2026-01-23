import { spawn } from 'child_process';

console.log('Starting Next.js in development mode...');

const nextDev = spawn('npx', ['next', 'dev', '-p', '5000', '-H', '0.0.0.0'], {
  stdio: 'inherit',
  env: { ...process.env }
});

nextDev.on('error', (err) => {
  console.error('Failed to start Next.js:', err);
  process.exit(1);
});

nextDev.on('close', (code) => {
  console.log(`Next.js exited with code ${code}`);
  process.exit(code || 0);
});
