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
        <!-- Learning Hub highlight -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
          <tr>
            <td style="padding:16px 18px;background-color:#eef2ff;border:1px solid #e0e7ff;border-radius:8px;">
              <p style="margin:0 0 4px;font-size:15px;font-weight:700;color:#3730a3;">Learning Hub</p>
              <p style="margin:0;font-size:13px;color:#4338ca;line-height:1.5;">
                Curated questions and study material crafted by engineers from Google, Amazon, and Meta &mdash; 3,300+ DSA problems, interview prep, SQL practice, aptitude, and 500+ lessons across 12 technologies.
              </p>
            </td>
          </tr>
        </table>
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
              <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#18181b;">DSA & Interview Prep</p>
              <p style="margin:0;font-size:12px;color:#64748b;line-height:1.4;">3,300+ problems curated by FAANG engineers</p>
            </td>
            <td style="width:4px;"></td>
            <td style="padding:10px 12px;background-color:#f8fafc;border:1px solid #f1f5f9;vertical-align:top;">
              <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#18181b;">SQL Practice</p>
              <p style="margin:0;font-size:12px;color:#64748b;line-height:1.4;">188 interactive exercises running in your browser</p>
            </td>
          </tr>
          <tr><td colspan="3" style="height:4px;"></td></tr>
          <tr>
            <td style="padding:10px 12px;background-color:#f8fafc;border:1px solid #f1f5f9;vertical-align:top;">
              <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#18181b;">500+ Lessons</p>
              <p style="margin:0;font-size:12px;color:#64748b;line-height:1.4;">JS, Python, React, Node.js, TypeScript, and more</p>
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
          All built to get you hired faster.
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
          <a href="https://linkedin.com/company/internhack" style="color:#18181b;text-decoration:none;margin:0 6px;">LinkedIn</a>
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
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:'Segoe UI',Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
    <!-- Header -->
    <tr>
      <td style="background-color:#0a0a0a;padding:28px 24px;text-align:center;">
        <h1 style="margin:0;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">InternHack</h1>
      </td>
    </tr>
    <!-- Body -->
    <tr>
      <td style="background-color:#ffffff;padding:32px 24px;">
        <h2 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#18181b;">Hey ${firstName}, quick check-in</h2>
        <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#52525b;">
          It's been 10 days since you joined. Here's what you might have missed:
        </p>

        <!-- Feature cards -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
          <!-- Row 1 -->
          <tr>
            <td style="padding:12px 14px;background-color:#fafafa;border:1px solid #e4e4e7;border-radius:8px;vertical-align:top;width:48%;">
              <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#18181b;">Learning Hub</p>
              <p style="margin:0;font-size:12px;color:#71717a;line-height:1.5;">3,300+ DSA problems, 500+ lessons across 12 technologies</p>
            </td>
            <td style="width:4%;"></td>
            <td style="padding:12px 14px;background-color:#fafafa;border:1px solid #e4e4e7;border-radius:8px;vertical-align:top;width:48%;">
              <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#18181b;">AI Resume Tools</p>
              <p style="margin:0;font-size:12px;color:#71717a;line-height:1.5;">ATS scorer, cover letter generator, and LaTeX resume builder</p>
            </td>
          </tr>
          <tr><td colspan="3" style="height:8px;"></td></tr>
          <!-- Row 2 -->
          <tr>
            <td style="padding:12px 14px;background-color:#fafafa;border:1px solid #e4e4e7;border-radius:8px;vertical-align:top;">
              <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#18181b;">Open Source</p>
              <p style="margin:0;font-size:12px;color:#71717a;line-height:1.5;">First PR guide, GSoC proposal writing, codebase reading, and repo discovery</p>
            </td>
            <td style="width:4%;"></td>
            <td style="padding:12px 14px;background-color:#fafafa;border:1px solid #e4e4e7;border-radius:8px;vertical-align:top;">
              <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#18181b;">Grants &amp; Hackathons</p>
              <p style="margin:0;font-size:12px;color:#71717a;line-height:1.5;">Funding opportunities, hackathon calendar, and project ideas</p>
            </td>
          </tr>
          <tr><td colspan="3" style="height:8px;"></td></tr>
          <!-- Row 3 -->
          <tr>
            <td style="padding:12px 14px;background-color:#fafafa;border:1px solid #e4e4e7;border-radius:8px;vertical-align:top;">
              <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#18181b;">SQL Practice</p>
              <p style="margin:0;font-size:12px;color:#71717a;line-height:1.5;">188 interactive exercises running right in your browser</p>
            </td>
            <td style="width:4%;"></td>
            <td style="padding:12px 14px;background-color:#fafafa;border:1px solid #e4e4e7;border-radius:8px;vertical-align:top;">
              <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#18181b;">Mock Interviews</p>
              <p style="margin:0;font-size:12px;color:#71717a;line-height:1.5;">AI-powered practice sessions for technical and behavioral rounds</p>
            </td>
          </tr>
          <tr><td colspan="3" style="height:8px;"></td></tr>
          <!-- Row 4 -->
          <tr>
            <td style="padding:12px 14px;background-color:#fafafa;border:1px solid #e4e4e7;border-radius:8px;vertical-align:top;">
              <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#18181b;">Skill Verification</p>
              <p style="margin:0;font-size:12px;color:#71717a;line-height:1.5;">Proctored tests with verified badges for your profile</p>
            </td>
            <td style="width:4%;"></td>
            <td style="padding:12px 14px;background-color:#fafafa;border:1px solid #e4e4e7;border-radius:8px;vertical-align:top;">
              <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#18181b;">Jobs &amp; Internships</p>
              <p style="margin:0;font-size:12px;color:#71717a;line-height:1.5;">Fresh listings updated every 6 hours with one-click apply</p>
            </td>
          </tr>
          <tr><td colspan="3" style="height:8px;"></td></tr>
          <!-- Row 5 -->
          <tr>
            <td style="padding:12px 14px;background-color:#fafafa;border:1px solid #e4e4e7;border-radius:8px;vertical-align:top;">
              <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#18181b;">Company Directory</p>
              <p style="margin:0;font-size:12px;color:#71717a;line-height:1.5;">Reviews, tech stacks, salaries, and contacts for top companies</p>
            </td>
            <td style="width:4%;"></td>
            <td style="padding:12px 14px;background-color:#fafafa;border:1px solid #e4e4e7;border-radius:8px;vertical-align:top;">
              <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#18181b;">YC Companies</p>
              <p style="margin:0;font-size:12px;color:#71717a;line-height:1.5;">Browse Y Combinator startups with founder info and hiring status</p>
            </td>
          </tr>
          <tr><td colspan="3" style="height:8px;"></td></tr>
          <!-- Row 6 -->
          <tr>
            <td style="padding:12px 14px;background-color:#fafafa;border:1px solid #e4e4e7;border-radius:8px;vertical-align:top;">
              <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#18181b;">IIT Professors</p>
              <p style="margin:0;font-size:12px;color:#71717a;line-height:1.5;">1,500+ IIT professors with email, department, and research areas</p>
            </td>
            <td style="width:4%;"></td>
            <td style="padding:12px 14px;background-color:#fafafa;border:1px solid #e4e4e7;border-radius:8px;vertical-align:top;">
              <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#18181b;">HR Contacts</p>
              <p style="margin:0;font-size:12px;color:#71717a;line-height:1.5;">1,800+ IT HR contacts with email and LinkedIn for direct outreach</p>
            </td>
          </tr>
        </table>

        <!-- Separator -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;">
          <tr><td style="border-top:1px solid #e4e4e7;"></td></tr>
        </table>

        <p style="margin:0 0 20px;font-size:14px;line-height:1.6;color:#52525b;text-align:center;">
          We ship new features every week. Your feedback shapes what we build next.
        </p>

        <!-- CTA -->
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 16px;">
          <tr>
            <td style="background-color:#18181b;border-radius:8px;">
              <a href="https://www.internhack.xyz" target="_blank" style="display:inline-block;padding:14px 40px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;">
                Jump Back In
              </a>
            </td>
          </tr>
        </table>

        <!-- Community CTA -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0 16px;">
          <tr>
            <td style="padding:16px 18px;background-color:#dcfce7;border:1px solid #bbf7d0;border-radius:8px;text-align:center;">
              <p style="margin:0 0 6px;font-size:14px;font-weight:700;color:#166534;">Join our community</p>
              <p style="margin:0 0 12px;font-size:13px;color:#15803d;line-height:1.5;">
                Connect with fellow students and professionals. We talk about jobs, internships, open source, and career growth.
              </p>
              <a href="https://chat.whatsapp.com/KiemP3l6QFKHadtfGehpF1" target="_blank" style="display:inline-block;padding:10px 28px;background-color:#25d366;border-radius:6px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">
                Join WhatsApp Group
              </a>
            </td>
          </tr>
        </table>

        <p style="margin:0;font-size:12px;color:#a1a1aa;text-align:center;">
          Got ideas or feedback? Just reply to this email - we read every one.
        </p>
      </td>
    </tr>
    <!-- Footer -->
    <tr>
      <td style="background-color:#fafafa;padding:20px 24px;text-align:center;">
        <p style="margin:0 0 6px;font-size:12px;">
          <a href="https://linkedin.com/company/internhack" style="color:#18181b;text-decoration:none;">LinkedIn</a>
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

export function premiumConfirmationEmailHtml(
  name: string,
  plan: "MONTHLY" | "YEARLY",
  startDate: Date,
  endDate: Date,
): string {
  const firstName = name.split(" ")[0];
  const planLabel = plan === "YEARLY" ? "Yearly" : "Monthly";
  const price = plan === "YEARLY" ? "$48/year" : "$5/month";
  const fmtStart = startDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const fmtEnd = endDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to InternHack Pro</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:'Segoe UI',Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
    <!-- Header -->
    <tr>
      <td style="background-color:#0a0a0a;padding:28px 24px;text-align:center;">
        <h1 style="margin:0;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">InternHack</h1>
      </td>
    </tr>
    <!-- Body -->
    <tr>
      <td style="background-color:#ffffff;padding:32px 24px;">
        <h2 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#18181b;">You're Pro now, ${firstName}!</h2>
        <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#52525b;">
          Your premium subscription is active. Here are your plan details:
        </p>

        <!-- Plan details card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;border:1px solid #e4e4e7;border-radius:8px;overflow:hidden;">
          <tr>
            <td style="padding:12px 16px;background-color:#fafafa;border-bottom:1px solid #e4e4e7;">
              <p style="margin:0;font-size:12px;color:#71717a;">Plan</p>
              <p style="margin:2px 0 0;font-size:15px;font-weight:700;color:#18181b;">Pro ${planLabel} - ${price}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 16px;background-color:#fafafa;border-bottom:1px solid #e4e4e7;">
              <p style="margin:0;font-size:12px;color:#71717a;">Started</p>
              <p style="margin:2px 0 0;font-size:14px;color:#18181b;">${fmtStart}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 16px;background-color:#fafafa;">
              <p style="margin:0;font-size:12px;color:#71717a;">Next billing date</p>
              <p style="margin:2px 0 0;font-size:14px;color:#18181b;">${fmtEnd}</p>
            </td>
          </tr>
        </table>

        <p style="margin:0 0 16px;font-size:15px;font-weight:600;color:#18181b;">What you've unlocked:</p>

        <!-- Premium features -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
          <tr>
            <td style="padding:10px 14px;background-color:#fafafa;border:1px solid #e4e4e7;border-radius:8px;vertical-align:top;width:48%;">
              <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#18181b;">Unlimited AI Tools</p>
              <p style="margin:0;font-size:12px;color:#71717a;line-height:1.4;">ATS scorer, cover letters, resume builder - no daily limits</p>
            </td>
            <td style="width:4%;"></td>
            <td style="padding:10px 14px;background-color:#fafafa;border:1px solid #e4e4e7;border-radius:8px;vertical-align:top;width:48%;">
              <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#18181b;">Mock Interviews</p>
              <p style="margin:0;font-size:12px;color:#71717a;line-height:1.4;">AI interview sessions with detailed feedback</p>
            </td>
          </tr>
          <tr><td colspan="3" style="height:8px;"></td></tr>
          <tr>
            <td style="padding:10px 14px;background-color:#fafafa;border:1px solid #e4e4e7;border-radius:8px;vertical-align:top;">
              <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#18181b;">Priority Support</p>
              <p style="margin:0;font-size:12px;color:#71717a;line-height:1.4;">Get help faster with priority email support</p>
            </td>
            <td style="width:4%;"></td>
            <td style="padding:10px 14px;background-color:#fafafa;border:1px solid #e4e4e7;border-radius:8px;vertical-align:top;">
              <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#18181b;">Early Access</p>
              <p style="margin:0;font-size:12px;color:#71717a;line-height:1.4;">First to try new features before they go public</p>
            </td>
          </tr>
        </table>

        <!-- CTA -->
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 16px;">
          <tr>
            <td style="background-color:#18181b;border-radius:8px;">
              <a href="https://www.internhack.xyz" target="_blank" style="display:inline-block;padding:14px 40px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;">
                Start Exploring
              </a>
            </td>
          </tr>
        </table>

        <p style="margin:0;font-size:12px;color:#a1a1aa;text-align:center;">
          Questions about your subscription? Just reply to this email.
        </p>
      </td>
    </tr>
    <!-- Footer -->
    <tr>
      <td style="background-color:#fafafa;padding:20px 24px;text-align:center;">
        <p style="margin:0 0 6px;font-size:12px;">
          <a href="https://linkedin.com/company/internhack" style="color:#18181b;text-decoration:none;">LinkedIn</a>
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

export function milestoneEmailHtml(
  name: string,
  title: string,
  message: string,
  ctaText: string = "Keep Going",
  ctaUrl: string = "https://internhack.in/learn"
): string {
  const firstName = name.split(" ")[0];

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background-color:#ffffff;font-family:'Segoe UI',Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td style="background-color:#0a0a0a;padding:28px 24px;text-align:center;">
        <h1 style="margin:0;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">InternHack</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:32px 24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
          <tr>
            <td style="text-align:center;padding:20px;background-color:#eef2ff;border:1px solid #e0e7ff;border-radius:12px;">
              <p style="margin:0 0 4px;font-size:40px;line-height:1;">&#127942;</p>
              <h2 style="margin:0 0 6px;font-size:24px;font-weight:800;color:#3730a3;">${title}</h2>
            </td>
          </tr>
        </table>
        <p style="margin:0 0 8px;font-size:17px;font-weight:700;color:#18181b;">Hey ${firstName},</p>
        <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#3f3f46;">${message}</p>
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
          <tr>
            <td style="background-color:#4f46e5;border-radius:8px;">
              <a href="${ctaUrl}" style="display:inline-block;padding:14px 32px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;">${ctaText}</a>
            </td>
          </tr>
        </table>
        <p style="margin:24px 0 0;font-size:13px;line-height:1.6;color:#71717a;text-align:center;">
          You're building real momentum. Most people never get this far &mdash; keep stacking wins.
        </p>
      </td>
    </tr>
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

export function repoRequestSubmittedHtml(name: string, repoName: string, repoOwner: string): string {
  const firstName = name.split(" ")[0];
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background-color:#ffffff;font-family:'Segoe UI',Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr><td style="background-color:#0a0a0a;padding:28px 24px;text-align:center;">
      <h1 style="margin:0;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">InternHack</h1>
    </td></tr>
    <tr><td style="padding:28px 24px;">
      <h2 style="margin:0 0 6px;font-size:22px;font-weight:700;color:#18181b;">Hey ${firstName}!</h2>
      <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#3f3f46;">
        We've received your request to add <strong>${repoOwner}/${repoName}</strong> to our open source repository directory.
      </p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
        <tr><td style="padding:16px 18px;background-color:#eef2ff;border:1px solid #e0e7ff;border-radius:8px;">
          <p style="margin:0 0 4px;font-size:15px;font-weight:700;color:#3730a3;">What happens next?</p>
          <p style="margin:0;font-size:13px;color:#4338ca;line-height:1.5;">
            Our team will review your submission and verify the repository. You'll receive an email once it's approved and listed on the platform.
          </p>
        </td></tr>
      </table>
      <p style="margin:0;font-size:13px;color:#71717a;">Thank you for helping grow our open source community!</p>
    </td></tr>
    <tr><td style="padding:20px 24px;border-top:1px solid #e4e4e7;text-align:center;">
      <p style="margin:0;font-size:11px;color:#a1a1aa;">&copy; ${new Date().getFullYear()} InternHack. All rights reserved.</p>
    </td></tr>
  </table>
</body>
</html>`;
}

export function repoRequestApprovedHtml(name: string, repoName: string, repoOwner: string): string {
  const firstName = name.split(" ")[0];
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background-color:#ffffff;font-family:'Segoe UI',Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr><td style="background-color:#0a0a0a;padding:28px 24px;text-align:center;">
      <h1 style="margin:0;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">InternHack</h1>
    </td></tr>
    <tr><td style="padding:28px 24px;">
      <h2 style="margin:0 0 6px;font-size:22px;font-weight:700;color:#18181b;">Great news, ${firstName}!</h2>
      <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#3f3f46;">
        Your repository suggestion <strong>${repoOwner}/${repoName}</strong> has been approved and is now listed on InternHack's open source directory.
      </p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
        <tr><td style="text-align:center;padding:16px;">
          <a href="https://www.internhack.xyz/student/opensource" style="display:inline-block;padding:12px 28px;background-color:#0a0a0a;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;border-radius:8px;">
            View Repository
          </a>
        </td></tr>
      </table>
      <p style="margin:0;font-size:13px;color:#71717a;">Thanks for contributing to the community!</p>
    </td></tr>
    <tr><td style="padding:20px 24px;border-top:1px solid #e4e4e7;text-align:center;">
      <p style="margin:0;font-size:11px;color:#a1a1aa;">&copy; ${new Date().getFullYear()} InternHack. All rights reserved.</p>
    </td></tr>
  </table>
</body>
</html>`;
}
