import type { Handler } from '@netlify/functions';

const handler: Handler = async ({ body }) => {
  if (body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required")
    };
  }

  const { message } = JSON.parse(body) as {
    message: string
  }

  const { status, statusText } = await fetch(
    `${process.env.NETLIFY_URL}/.netlify/functions/emails/subscribed`,
    {
      headers: {
        "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET as string,
      },
      method: "POST",
      body: JSON.stringify({
        from: "rohitkisto.dev@gmail.com",
        to: "rohitkisto.dev@gmail.com",
        subject: "New Message",
        parameters: {
          message
        },
      }),
    }
  );


  return {
    statusCode: status,
    body: JSON.stringify(status === 200 ? "Message sent!" : `An error occured sending email!\n${statusText}`)
  }
}

export { handler };
