import type { Handler } from '@netlify/functions';

const handler: Handler = async (event, context) => {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required")
    };
  }

  const { message } = JSON.parse(event.body) as {
    message: string
  }

  const res = await fetch(
    `${process.env.URL}/.netlify/functions/emails/subscribed`,
    {
      headers: {
        "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET as string,
      },
      method: "POST",
      body: JSON.stringify({
        from: "rohitkisto.dev@gmail.com",
        to: "rohitkisto.dev@gmail.com",
        subject: "Test Email",
        parameters: {
          message
        },
      }),
    }
  );

  if (res.status !== 200) {
    return {
      statusCode: res.status,
      body: JSON.stringify(`An error occured sending email!\n${res.statusText}`)
    }
  }


  return {
    statusCode: 200,
    body: JSON.stringify("Message sent!"),
  }
}

export { handler };
