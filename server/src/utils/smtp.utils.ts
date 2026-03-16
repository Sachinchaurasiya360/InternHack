import nodemailer from "nodemailer";

interface SmtpEmailOptions {
  from: string;
  appPassword: string;
  to: string;
  subject: string;
  html: string;
}

export async function sendSmtpEmail(options: SmtpEmailOptions): Promise<void> {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: options.from,
      pass: options.appPassword,
    },
  });

  await transporter.sendMail({
    from: options.from,
    to: options.to,
    subject: options.subject,
    html: options.html,
  });
}

export async function verifySmtpCredentials(email: string, appPassword: string): Promise<boolean> {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: email, pass: appPassword },
    });
    await transporter.verify();
    return true;
  } catch {
    return false;
  }
}
