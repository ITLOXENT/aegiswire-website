import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function sendLeadNotification(leadEmail: string, country: string) {
  const command = new SendEmailCommand({
    Source: 'noreply@aegiswire.com',
    Destination: {
      ToAddresses: ['intl@aegiswire.com'],
    },
    Message: {
      Subject: {
        Data: 'New AegisWire Lead Registration',
        Charset: 'UTF-8',
      },
      Body: {
        Text: {
          Data: `A new lead has registered interest in AegisWire:\n\nEmail: ${leadEmail}\nCountry: ${country}\nTime: ${new Date().toISOString()}`,
          Charset: 'UTF-8',
        },
        Html: {
          Data: `
            <h2>New AegisWire Lead Registration</h2>
            <p><strong>Email:</strong> ${leadEmail}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Time:</strong> ${new Date().toISOString()}</p>
          `,
          Charset: 'UTF-8',
        },
      },
    },
    ConfigurationSetName: 'AegisWire-Leads',
  });

  await sesClient.send(command);
}
