export function welcomeEmailHtml(name: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to InternHack</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background-color:#0a0a0a;padding:32px 40px;text-align:center;">
              <h1 style="margin:0;font-size:28px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">InternHack</h1>
              <p style="margin:8px 0 0;font-size:14px;color:#a1a1aa;">Your career starts here</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 16px;font-size:22px;font-weight:600;color:#18181b;">Welcome aboard, ${name}!</h2>
              <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#3f3f46;">
                We're thrilled to have you join InternHack. Your account has been verified and you're all set to explore everything we have to offer.
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="padding:16px 20px;background-color:#f4f4f5;border-radius:8px;border-left:4px solid #18181b;">
                    <p style="margin:0 0 8px;font-size:15px;font-weight:600;color:#18181b;">Here's what you can do:</p>
                    <ul style="margin:0;padding:0 0 0 18px;color:#52525b;font-size:14px;line-height:2;">
                      <li>Browse and apply to curated <strong>Jobs & Internships</strong></li>
                      <li>Score your resume with our <strong>AI-powered ATS</strong></li>
                      <li>Follow structured <strong>Career Roadmaps</strong> to skill up</li>
                      <li>Explore <strong>Companies, Colleges & Open Source</strong> opportunities</li>
                    </ul>
                  </td>
                </tr>
              </table>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="background-color:#18181b;border-radius:8px;">
                    <a href="https://www.internhack.xyz" target="_blank" style="display:inline-block;padding:14px 32px;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;">
                      Get Started
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;background-color:#fafafa;border-top:1px solid #e4e4e7;text-align:center;">
              <p style="margin:0 0 8px;font-size:13px;color:#71717a;">
                Follow us for updates and tips
              </p>
              <p style="margin:0 0 12px;font-size:13px;">
                <a href="https://twitter.com/internhack" style="color:#18181b;text-decoration:none;margin:0 8px;">Twitter</a>
                <span style="color:#d4d4d8;">|</span>
                <a href="https://linkedin.com/company/internhack" style="color:#18181b;text-decoration:none;margin:0 8px;">LinkedIn</a>
                <span style="color:#d4d4d8;">|</span>
                <a href="https://github.com/internhack" style="color:#18181b;text-decoration:none;margin:0 8px;">GitHub</a>
              </p>
              <p style="margin:0;font-size:12px;color:#a1a1aa;">
                &copy; ${new Date().getFullYear()} InternHack. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function otpEmailHtml(name: string, otp: string): string {
  const digits = otp.split("");
  const otpBoxes = digits
    .map(
      (d) =>
        `<td style="width:48px;height:56px;background-color:#f4f4f5;border:2px solid #d4d4d8;border-radius:8px;text-align:center;font-size:28px;font-weight:700;font-family:'Courier New',Courier,monospace;color:#18181b;letter-spacing:0;">${d}</td>`
    )
    .join('<td style="width:8px;"></td>');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Verify Your Email</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background-color:#0a0a0a;padding:32px 40px;text-align:center;">
              <h1 style="margin:0;font-size:28px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">InternHack</h1>
              <p style="margin:8px 0 0;font-size:14px;color:#a1a1aa;">Your career starts here</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 8px;font-size:22px;font-weight:600;color:#18181b;text-align:center;">Verify Your Email</h2>
              <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#3f3f46;text-align:center;">
                Hi ${name}, use the code below to verify your email address.
              </p>
              <!-- OTP Boxes -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 24px;">
                <tr>
                  ${otpBoxes}
                </tr>
              </table>
              <p style="margin:0 0 8px;font-size:14px;color:#71717a;text-align:center;">
                This code expires in <strong>10 minutes</strong>.
              </p>
              <p style="margin:0;font-size:13px;color:#a1a1aa;text-align:center;">
                If you didn't request this, please ignore this email.
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;background-color:#fafafa;border-top:1px solid #e4e4e7;text-align:center;">
              <p style="margin:0;font-size:12px;color:#a1a1aa;">
                &copy; ${new Date().getFullYear()} InternHack. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function resetPasswordEmailHtml(name: string, otp: string): string {
  const digits = otp.split("");
  const otpBoxes = digits
    .map(
      (d) =>
        `<td style="width:48px;height:56px;background-color:#f4f4f5;border:2px solid #d4d4d8;border-radius:8px;text-align:center;font-size:28px;font-weight:700;font-family:'Courier New',Courier,monospace;color:#18181b;letter-spacing:0;">${d}</td>`
    )
    .join('<td style="width:8px;"></td>');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reset Your Password</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background-color:#0a0a0a;padding:32px 40px;text-align:center;">
              <h1 style="margin:0;font-size:28px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">InternHack</h1>
              <p style="margin:8px 0 0;font-size:14px;color:#a1a1aa;">Your career starts here</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 8px;font-size:22px;font-weight:600;color:#18181b;text-align:center;">Reset Your Password</h2>
              <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#3f3f46;text-align:center;">
                Hi ${name}, we received a request to reset your password. Use the code below to proceed.
              </p>
              <!-- OTP Boxes -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 24px;">
                <tr>
                  ${otpBoxes}
                </tr>
              </table>
              <p style="margin:0 0 8px;font-size:14px;color:#71717a;text-align:center;">
                This code expires in <strong>10 minutes</strong>.
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                <tr>
                  <td style="padding:16px 20px;background-color:#fef2f2;border-radius:8px;border-left:4px solid #dc2626;">
                    <p style="margin:0;font-size:13px;color:#991b1b;line-height:1.5;">
                      <strong>Security notice:</strong> Never share this code with anyone. InternHack staff will never ask you for this code.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;background-color:#fafafa;border-top:1px solid #e4e4e7;text-align:center;">
              <p style="margin:0;font-size:12px;color:#a1a1aa;">
                &copy; ${new Date().getFullYear()} InternHack. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
