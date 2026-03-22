import sgMail from '@sendgrid/mail';

let connectionSettings: any;

async function getCredentialsFromReplit() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken || !hostname) {
    return null;
  }

  try {
    connectionSettings = await fetch(
      'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=sendgrid',
      {
        headers: {
          'Accept': 'application/json',
          'X_REPLIT_TOKEN': xReplitToken
        }
      }
    ).then(res => res.json()).then(data => data.items?.[0]);

    if (!connectionSettings?.settings?.api_key || !connectionSettings?.settings?.from_email) {
      return null;
    }
    return { apiKey: connectionSettings.settings.api_key, email: connectionSettings.settings.from_email };
  } catch {
    return null;
  }
}

async function getCredentials() {
  const replitCreds = await getCredentialsFromReplit();
  if (replitCreds) {
    return replitCreds;
  }
  
  const apiKey = process.env.SENDGRID_API_KEY;
  const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'noreply@aegiswire.com';
  
  if (!apiKey) {
    throw new Error('SendGrid not configured. Set SENDGRID_API_KEY environment variable.');
  }
  
  return { apiKey, email: fromEmail };
}

export async function getUncachableSendGridClient() {
  const { apiKey, email } = await getCredentials();
  sgMail.setApiKey(apiKey);
  return {
    client: sgMail,
    fromEmail: email
  };
}

export async function sendLeadNotification(leadEmail: string, country: string) {
  const { client, fromEmail } = await getUncachableSendGridClient();
  
  const msg = {
    to: 'intl@AegisWire.com',
    from: fromEmail,
    subject: 'New AegisWire Lead Registration',
    text: `A new lead has registered interest in AegisWire:\n\nEmail: ${leadEmail}\nCountry: ${country}\nTime: ${new Date().toISOString()}`,
    html: `
      <h2>New AegisWire Lead Registration</h2>
      <p><strong>Email:</strong> ${leadEmail}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Time:</strong> ${new Date().toISOString()}</p>
    `
  };
  
  await client.send(msg);
}
