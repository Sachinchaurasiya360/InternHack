export function welcomeEmailHtml(name: string): string {
  const firstName = name.split(" ")[0];

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to InternHack</title>
</head>
<body style="margin:0;padding:0;background-color:#ffffff;font-family:'Segoe UI',Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <!-- Header -->
    <tr>
      <td style="background-color:#0a0a0a;padding:28px 24px;text-align:center;">
        <h1 style="margin:0;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">InternHack</h1>
      </td>
    </tr>
    <!-- Body -->
    <tr>
      <td style="padding:28px 24px;">
        <h2 style="margin:0 0 6px;font-size:22px;font-weight:700;color:#18181b;">Hey ${firstName}! You're in.</h2>
        <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#3f3f46;">
          Your account is verified and ready to roll. InternHack is packed with tools to fast-track your career &mdash; here's everything you get access to:
        </p>
        <!-- Features - 2 column grid using tables -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
          <tr>
            <td style="padding:10px 12px;background-color:#f8fafc;border:1px solid #f1f5f9;vertical-align:top;width:50%;">
              <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#18181b;">Jobs & Internships</p>
              <p style="margin:0;font-size:12px;color:#64748b;line-height:1.4;">Updated every 6 hours</p>
            </td>
            <td style="width:4px;"></td>
            <td style="padding:10px 12px;background-color:#f8fafc;border:1px solid #f1f5f9;vertical-align:top;width:50%;">
              <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#18181b;">AI ATS Resume Scorer</p>
              <p style="margin:0;font-size:12px;color:#64748b;line-height:1.4;">Score your resume against real ATS systems instantly</p>
            </td>
          </tr>
          <tr><td colspan="3" style="height:4px;"></td></tr>
          <tr>
            <td style="padding:10px 12px;background-color:#f8fafc;border:1px solid #f1f5f9;vertical-align:top;">
              <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#18181b;">AI Cover Letter Gen</p>
              <p style="margin:0;font-size:12px;color:#64748b;line-height:1.4;">Tailored cover letters for any job in seconds</p>
            </td>
            <td style="width:4px;"></td>
            <td style="padding:10px 12px;background-color:#f8fafc;border:1px solid #f1f5f9;vertical-align:top;">
              <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#18181b;">AI Resume Builder</p>
              <p style="margin:0;font-size:12px;color:#64748b;line-height:1.4;">Build a LaTeX-quality resume with AI assistance</p>
            </td>
          </tr>
          <tr><td colspan="3" style="height:4px;"></td></tr>
          <tr>
            <td style="padding:10px 12px;background-color:#f8fafc;border:1px solid #f1f5f9;vertical-align:top;">
              <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#18181b;">Career Roadmaps</p>
              <p style="margin:0;font-size:12px;color:#64748b;line-height:1.4;">Step-by-step guides for every tech career path</p>
            </td>
            <td style="width:4px;"></td>
            <td style="padding:10px 12px;background-color:#f8fafc;border:1px solid #f1f5f9;vertical-align:top;">
              <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#18181b;">Mock Interviews</p>
              <p style="margin:0;font-size:12px;color:#64748b;line-height:1.4;">AI-powered mock interview practice sessions</p>
            </td>
          </tr>
          <tr><td colspan="3" style="height:4px;"></td></tr>
          <tr>
            <td style="padding:10px 12px;background-color:#f8fafc;border:1px solid #f1f5f9;vertical-align:top;">
              <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#18181b;">DSA Practice</p>
              <p style="margin:0;font-size:12px;color:#64748b;line-height:1.4;">LeetCode-style problems with progress tracking</p>
            </td>
            <td style="width:4px;"></td>
            <td style="padding:10px 12px;background-color:#f8fafc;border:1px solid #f1f5f9;vertical-align:top;">
              <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#18181b;">SQL Practice</p>
              <p style="margin:0;font-size:12px;color:#64748b;line-height:1.4;">Hands-on SQL challenges to sharpen your DB skills</p>
            </td>
          </tr>
          <tr><td colspan="3" style="height:4px;"></td></tr>
          <tr>
            <td style="padding:10px 12px;background-color:#f8fafc;border:1px solid #f1f5f9;vertical-align:top;">
              <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#18181b;">Aptitude Quizzes</p>
              <p style="margin:0;font-size:12px;color:#64748b;line-height:1.4;">Prep for placement tests with curated questions</p>
            </td>
            <td style="width:4px;"></td>
            <td style="padding:10px 12px;background-color:#f8fafc;border:1px solid #f1f5f9;vertical-align:top;">
              <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#18181b;">Company Research</p>
              <p style="margin:0;font-size:12px;color:#64748b;line-height:1.4;">Reviews, salaries, and insider info on companies</p>
            </td>
          </tr>
          <tr><td colspan="3" style="height:4px;"></td></tr>
          <tr>
            <td style="padding:10px 12px;background-color:#f8fafc;border:1px solid #f1f5f9;vertical-align:top;">
              <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#18181b;">Skill Verification</p>
              <p style="margin:0;font-size:12px;color:#64748b;line-height:1.4;">Get verified badges for your technical skills</p>
            </td>
            <td style="width:4px;"></td>
            <td style="padding:10px 12px;background-color:#f8fafc;border:1px solid #f1f5f9;vertical-align:top;">
              <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#18181b;">Badges & Achievements</p>
              <p style="margin:0;font-size:12px;color:#64748b;line-height:1.4;">Earn badges as you learn, build, and grow</p>
            </td>
          </tr>
        </table>
        <p style="margin:0 0 20px;font-size:14px;line-height:1.5;color:#52525b;text-align:center;">
          That's <strong>12 features</strong> built to get you hired faster.
        </p>
        <!-- CTA -->
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
          <tr>
            <td style="background-color:#18181b;border-radius:6px;">
              <a href="https://www.internhack.xyz" target="_blank" style="display:inline-block;padding:12px 36px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;">
                Let's Go
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <!-- Footer -->
    <tr>
      <td style="padding:20px 24px;border-top:1px solid #e4e4e7;text-align:center;">
        <p style="margin:0 0 6px;font-size:12px;">
          <a href="https://twitter.com/internhack" style="color:#18181b;text-decoration:none;margin:0 6px;">Twitter</a>
          <span style="color:#d4d4d8;">|</span>
          <a href="https://linkedin.com/company/internhack" style="color:#18181b;text-decoration:none;margin:0 6px;">LinkedIn</a>
          <span style="color:#d4d4d8;">|</span>
          <a href="https://github.com/internhack" style="color:#18181b;text-decoration:none;margin:0 6px;">GitHub</a>
        </p>
        <p style="margin:0;font-size:11px;color:#a1a1aa;">
          &copy; ${new Date().getFullYear()} InternHack. All rights reserved.
        </p>
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
        `<td style="width:44px;height:52px;background-color:#f4f4f5;border:2px solid #d4d4d8;border-radius:8px;text-align:center;font-size:26px;font-weight:700;font-family:'Courier New',Courier,monospace;color:#18181b;letter-spacing:0;">${d}</td>`
    )
    .join('<td style="width:6px;"></td>');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Verify Your Email</title>
</head>
<body style="margin:0;padding:0;background-color:#ffffff;font-family:'Segoe UI',Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <!-- Header -->
    <tr>
      <td style="background-color:#0a0a0a;padding:28px 24px;text-align:center;">
        <h1 style="margin:0;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">InternHack</h1>
      </td>
    </tr>
    <!-- Body -->
    <tr>
      <td style="padding:28px 24px;text-align:center;">
        <h2 style="margin:0 0 6px;font-size:20px;font-weight:600;color:#18181b;">Verify Your Email</h2>
        <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#3f3f46;">
          Hi ${name}, use the code below to verify your email address.
        </p>
        <!-- OTP Boxes -->
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 20px;">
          <tr>
            ${otpBoxes}
          </tr>
        </table>
        <p style="margin:0 0 6px;font-size:13px;color:#71717a;">
          This code expires in <strong>10 minutes</strong>.
        </p>
        <p style="margin:0;font-size:12px;color:#a1a1aa;">
          If you didn't request this, please ignore this email.
        </p>
      </td>
    </tr>
    <!-- Footer -->
    <tr>
      <td style="padding:20px 24px;border-top:1px solid #e4e4e7;text-align:center;">
        <p style="margin:0;font-size:11px;color:#a1a1aa;">
          &copy; ${new Date().getFullYear()} InternHack. All rights reserved.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function followUpEmailHtml(name: string): string {
  const firstName = name.split(" ")[0];

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>How's it going?</title>
</head>
<body style="margin:0;padding:0;background-color:#ffffff;font-family:'Segoe UI',Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <!-- Header -->
    <tr>
      <td style="background-color:#0a0a0a;padding:28px 24px;text-align:center;">
        <h1 style="margin:0;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">InternHack</h1>
      </td>
    </tr>
    <!-- Body -->
    <tr>
      <td style="padding:28px 24px;">
        <h2 style="margin:0 0 6px;font-size:22px;font-weight:700;color:#18181b;">Hey ${firstName}, quick check-in</h2>
        <p style="margin:0 0 18px;font-size:15px;line-height:1.7;color:#3f3f46;">
          It's been 10 days since you joined InternHack &mdash; we'd genuinely love to know how the experience has been so far.
        </p>
        <!-- Checklist -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:18px;padding:16px 18px;background-color:#f0fdf4;border-left:3px solid #22c55e;">
          <tr><td style="padding:3px 0;font-size:14px;font-weight:600;color:#166534;">Have you tried these yet?</td></tr>
          <tr><td style="padding:3px 0;font-size:13px;color:#3f3f46;line-height:1.6;">&bull; Score your resume with the AI ATS Scorer</td></tr>
          <tr><td style="padding:3px 0;font-size:13px;color:#3f3f46;line-height:1.6;">&bull; Practice DSA problems with progress tracking</td></tr>
          <tr><td style="padding:3px 0;font-size:13px;color:#3f3f46;line-height:1.6;">&bull; Generate a cover letter for your dream role</td></tr>
          <tr><td style="padding:3px 0;font-size:13px;color:#3f3f46;line-height:1.6;">&bull; Follow a career roadmap to level up</td></tr>
          <tr><td style="padding:3px 0;font-size:13px;color:#3f3f46;line-height:1.6;">&bull; Get verified skill badges for your profile</td></tr>
        </table>
        <p style="margin:0 0 18px;font-size:14px;line-height:1.6;color:#52525b;">
          We're constantly shipping new stuff to help you land your first (or next) gig. Your feedback helps us build better.
        </p>
        <!-- CTA -->
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 12px;">
          <tr>
            <td style="background-color:#18181b;border-radius:6px;">
              <a href="https://www.internhack.xyz" target="_blank" style="display:inline-block;padding:12px 36px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;">
                Jump Back In
              </a>
            </td>
          </tr>
        </table>
        <p style="margin:0;font-size:12px;color:#a1a1aa;text-align:center;">
          Got ideas or feedback? Just reply to this email &mdash; we read every one.
        </p>
      </td>
    </tr>
    <!-- Footer -->
    <tr>
      <td style="padding:20px 24px;border-top:1px solid #e4e4e7;text-align:center;">
        <p style="margin:0 0 6px;font-size:12px;">
          <a href="https://twitter.com/internhack" style="color:#18181b;text-decoration:none;margin:0 6px;">Twitter</a>
          <span style="color:#d4d4d8;">|</span>
          <a href="https://linkedin.com/company/internhack" style="color:#18181b;text-decoration:none;margin:0 6px;">LinkedIn</a>
          <span style="color:#d4d4d8;">|</span>
          <a href="https://github.com/internhack" style="color:#18181b;text-decoration:none;margin:0 6px;">GitHub</a>
        </p>
        <p style="margin:0;font-size:11px;color:#a1a1aa;">
          &copy; ${new Date().getFullYear()} InternHack. All rights reserved.
        </p>
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
        `<td style="width:44px;height:52px;background-color:#f4f4f5;border:2px solid #d4d4d8;border-radius:8px;text-align:center;font-size:26px;font-weight:700;font-family:'Courier New',Courier,monospace;color:#18181b;letter-spacing:0;">${d}</td>`
    )
    .join('<td style="width:6px;"></td>');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reset Your Password</title>
</head>
<body style="margin:0;padding:0;background-color:#ffffff;font-family:'Segoe UI',Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <!-- Header -->
    <tr>
      <td style="background-color:#0a0a0a;padding:28px 24px;text-align:center;">
        <h1 style="margin:0;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">InternHack</h1>
      </td>
    </tr>
    <!-- Body -->
    <tr>
      <td style="padding:28px 24px;text-align:center;">
        <h2 style="margin:0 0 6px;font-size:20px;font-weight:600;color:#18181b;">Reset Your Password</h2>
        <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#3f3f46;">
          Hi ${name}, we received a request to reset your password. Use the code below to proceed.
        </p>
        <!-- OTP Boxes -->
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 20px;">
          <tr>
            ${otpBoxes}
          </tr>
        </table>
        <p style="margin:0 0 6px;font-size:13px;color:#71717a;">
          This code expires in <strong>10 minutes</strong>.
        </p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:18px;">
          <tr>
            <td style="padding:12px 16px;background-color:#fef2f2;border-left:3px solid #dc2626;text-align:left;">
              <p style="margin:0;font-size:12px;color:#991b1b;line-height:1.5;">
                <strong>Security notice:</strong> Never share this code with anyone. InternHack staff will never ask for it.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <!-- Footer -->
    <tr>
      <td style="padding:20px 24px;border-top:1px solid #e4e4e7;text-align:center;">
        <p style="margin:0;font-size:11px;color:#a1a1aa;">
          &copy; ${new Date().getFullYear()} InternHack. All rights reserved.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
