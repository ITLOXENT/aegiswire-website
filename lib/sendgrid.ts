import sgMail from '@sendgrid/mail';

let connectionSettings: any;

async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=sendgrid',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings || (!connectionSettings.settings.api_key || !connectionSettings.settings.from_email)) {
    throw new Error('SendGrid not connected');
  }
  return { apiKey: connectionSettings.settings.api_key, email: connectionSettings.settings.from_email };
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
