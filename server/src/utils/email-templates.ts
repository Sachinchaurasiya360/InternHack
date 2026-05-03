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
          Your account is verified and ready to roll. InternHack is packed with tools to fast-track your career, here's everything you get access to:
        </p>
        <!-- Learning Hub highlight -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
          <tr>
            <td style="padding:16px 18px;background-color:#eef2ff;border:1px solid #e0e7ff;border-radius:8px;">
              <p style="margin:0 0 4px;font-size:15px;font-weight:700;color:#3730a3;">Learning Hub</p>
              <p style="margin:0;font-size:13px;color:#4338ca;line-height:1.5;">
                Curated questions and study material crafted by engineers from Google, Amazon, and Meta, 3,300+ DSA problems, interview prep, SQL practice, aptitude, and 500+ lessons across 12 technologies.
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
          You're building real momentum. Most people never get this far, keep stacking wins.
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

export function interviewExperienceApprovedHtml(args: {
  name: string;
  companyName: string;
  role: string;
  experienceId: number;
  earnedBadges?: { name: string; description?: string }[];
}): string {
  const firstName = args.name.split(" ")[0];
  const detailUrl = `https://www.internhack.xyz/student/interviews/${String(args.experienceId)}`;
  const badges = args.earnedBadges ?? [];

  const badgeBlock =
    badges.length > 0
      ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 18px;">
        <tr><td style="padding:16px 18px;background-color:#f7fee7;border:1px solid #d9f99d;border-radius:8px;">
          <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#3f6212;">
            &#127942; You earned ${String(badges.length)} new badge${badges.length === 1 ? "" : "s"}
          </p>
          ${badges
            .map(
              (b) =>
                `<p style="margin:6px 0 0;font-size:13px;color:#365314;line-height:1.5;"><strong>${b.name}</strong>${
                  b.description ? `, ${b.description}` : ""
                }</p>`,
            )
            .join("")}
        </td></tr>
      </table>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background-color:#ffffff;font-family:'Segoe UI',Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr><td style="background-color:#0a0a0a;padding:28px 24px;text-align:center;">
      <h1 style="margin:0;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">InternHack</h1>
    </td></tr>
    <tr><td style="padding:28px 24px;">
      <h2 style="margin:0 0 6px;font-size:22px;font-weight:700;color:#18181b;">Your interview experience is live, ${firstName}!</h2>
      <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#3f3f46;">
        Your interview experience for <strong>${args.role}</strong> at <strong>${args.companyName}</strong> has been approved and is now visible to other students preparing for the same company.
      </p>
      ${badgeBlock}
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
        <tr><td style="text-align:center;padding:8px 0 16px;">
          <a href="${detailUrl}" style="display:inline-block;padding:12px 28px;background-color:#0a0a0a;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;border-radius:8px;">
            View your post
          </a>
        </td></tr>
      </table>
      <p style="margin:0;font-size:13px;color:#71717a;">Thanks for helping the community prep smarter.</p>
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

export function atsScoreReportHtml(params: {
  name: string;
  overallScore: number;
  categoryScores: Record<string, number>;
  suggestions: string[];
  keywordAnalysis: { found: string[]; missing: string[] };
  jobTitle?: string | null;
}): string {
  const { name, overallScore, categoryScores, suggestions, keywordAnalysis, jobTitle } = params;
  const firstName = name.split(" ")[0] || "there";

  const tier =
    overallScore >= 70
      ? { label: "Excellent", accent: "#a3e635", text: "#3f6212", bg: "#f7fee7", border: "#d9f99d" }
      : overallScore >= 40
        ? { label: "Needs Work", accent: "#eab308", text: "#854d0e", bg: "#fefce8", border: "#fde68a" }
        : { label: "Poor", accent: "#ef4444", text: "#991b1b", bg: "#fef2f2", border: "#fecaca" };

  const summary =
    overallScore >= 70
      ? "Great job. Your resume is well-optimized for ATS systems."
      : overallScore >= 40
        ? "Decent start. A few focused tweaks can push your score much higher."
        : "Your resume needs meaningful work to clear ATS filters reliably.";

  const CATEGORY_LABELS: Record<string, string> = {
    formatting: "Formatting",
    keywords: "Keywords",
    experience: "Experience",
    skills: "Skills",
    education: "Education",
    impact: "Impact",
  };

  const escape = (s: string) => s.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const scoreColor = (v: number) => (v >= 70 ? "#3f6212" : v >= 40 ? "#854d0e" : "#991b1b");
  const barColor = (v: number) => (v >= 70 ? "#a3e635" : v >= 40 ? "#eab308" : "#ef4444");

  const categoryRows = Object.entries(categoryScores)
    .map(
      ([key, score]) => `
      <tr>
        <td style="padding:10px 4px;font-size:13px;color:#27272a;font-weight:600;width:40%;">${CATEGORY_LABELS[key] ?? key}</td>
        <td style="padding:10px 4px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="background-color:#f4f4f5;border-radius:999px;height:8px;overflow:hidden;">
                <table role="presentation" width="${score}%" cellpadding="0" cellspacing="0" style="height:8px;background-color:${barColor(score)};border-radius:999px;">
                  <tr><td style="line-height:1px;font-size:1px;">&nbsp;</td></tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
        <td style="padding:10px 4px 10px 12px;font-size:13px;font-weight:700;color:${scoreColor(score)};text-align:right;white-space:nowrap;">${score}<span style="color:#a1a1aa;font-weight:400;">/100</span></td>
      </tr>`,
    )
    .join("");

  const topSuggestions = suggestions.slice(0, 6);
  const suggestionItems = topSuggestions
    .map(
      (s, i) => `
      <tr>
        <td style="padding:10px 14px;background-color:#fafafa;border:1px solid #e4e4e7;border-radius:8px;vertical-align:top;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="width:28px;vertical-align:top;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="width:22px;height:22px;background-color:#0a0a0a;color:#ffffff;border-radius:4px;text-align:center;font-size:11px;font-weight:700;font-family:'Courier New',Courier,monospace;line-height:22px;">${String(i + 1).padStart(2, "0")}</td>
                  </tr>
                </table>
              </td>
              <td style="vertical-align:top;padding-left:4px;">
                <p style="margin:0;font-size:13px;line-height:1.55;color:#27272a;">${escape(s)}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr><td style="height:6px;"></td></tr>`,
    )
    .join("");

  const missing = keywordAnalysis.missing.slice(0, 12);
  const missingChips =
    missing.length > 0
      ? missing
          .map(
            (kw) =>
              `<span style="display:inline-block;margin:0 4px 6px 0;padding:4px 10px;background-color:#fff7ed;border:1px dashed #fdba74;border-radius:6px;font-size:12px;color:#9a3412;font-weight:500;">+ ${escape(kw)}</span>`,
          )
          .join("")
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your ATS score report</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:'Segoe UI',Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
    <!-- Header -->
    <tr>
      <td style="background-color:#0a0a0a;padding:28px 24px;text-align:center;">
        <h1 style="margin:0;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">InternHack</h1>
        <p style="margin:6px 0 0;font-size:11px;font-family:'Courier New',Courier,monospace;letter-spacing:2px;color:#a3e635;text-transform:uppercase;">resume / ats score</p>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="background-color:#ffffff;padding:32px 24px;">
        <h2 style="margin:0 0 6px;font-size:22px;font-weight:700;color:#18181b;letter-spacing:-0.3px;">Hey ${firstName}, here's your resume score.</h2>
        <p style="margin:0 0 22px;font-size:14px;line-height:1.6;color:#52525b;">
          ${summary}${jobTitle ? ` Scored against <strong style="color:#18181b;">${escape(jobTitle)}</strong>.` : ""}
        </p>

        <!-- Score card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:26px;background-color:${tier.bg};border:1px solid ${tier.border};border-radius:12px;">
          <tr>
            <td style="padding:22px 20px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align:middle;">
                    <p style="margin:0 0 4px;font-size:10px;font-family:'Courier New',Courier,monospace;letter-spacing:2px;text-transform:uppercase;color:${tier.text};">
                      overall ats score
                    </p>
                    <p style="margin:0;font-size:52px;font-weight:800;line-height:1;color:${tier.text};letter-spacing:-2px;">
                      ${overallScore}<span style="font-size:20px;color:#a1a1aa;font-weight:500;letter-spacing:0;"> /100</span>
                    </p>
                  </td>
                  <td style="vertical-align:middle;text-align:right;">
                    <span style="display:inline-block;padding:6px 14px;background-color:${tier.accent};color:#18181b;font-size:12px;font-weight:700;border-radius:6px;text-transform:uppercase;letter-spacing:1px;">
                      ${tier.label}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- Category breakdown -->
        <p style="margin:0 0 10px;font-size:11px;font-family:'Courier New',Courier,monospace;letter-spacing:2px;text-transform:uppercase;color:#71717a;">
          / category breakdown
        </p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;border:1px solid #e4e4e7;border-radius:10px;padding:6px 14px;">
          ${categoryRows}
        </table>

        ${
          topSuggestions.length > 0
            ? `
        <!-- Suggestions -->
        <p style="margin:0 0 10px;font-size:11px;font-family:'Courier New',Courier,monospace;letter-spacing:2px;text-transform:uppercase;color:#71717a;">
          / suggestions &middot; ${topSuggestions.length}
        </p>
        <p style="margin:0 0 14px;font-size:13px;color:#52525b;line-height:1.5;">
          Work through these in order. Each one is a concrete edit you can make today.
        </p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
          ${suggestionItems}
        </table>
        `
            : ""
        }

        ${
          missingChips
            ? `
        <!-- Missing keywords -->
        <p style="margin:0 0 10px;font-size:11px;font-family:'Courier New',Courier,monospace;letter-spacing:2px;text-transform:uppercase;color:#9a3412;">
          / missing keywords &middot; ${missing.length}
        </p>
        <p style="margin:0 0 12px;font-size:13px;color:#52525b;line-height:1.5;">
          These terms appeared in the job context but were not found in your resume. Weave them in where they honestly apply.
        </p>
        <div style="margin-bottom:26px;">${missingChips}</div>
        `
            : ""
        }

        <!-- CTA -->
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px auto 18px;">
          <tr>
            <td style="background-color:#a3e635;border-radius:8px;">
              <a href="https://www.internhack.xyz/student/ats/score" target="_blank" style="display:inline-block;padding:13px 32px;font-size:14px;font-weight:700;color:#18181b;text-decoration:none;letter-spacing:0.2px;">
                Open resume tools
              </a>
            </td>
          </tr>
        </table>

        <p style="margin:0;font-size:12px;color:#a1a1aa;text-align:center;line-height:1.5;">
          You got this report because you scored a resume on InternHack. Reply if something looks off, we read every email.
        </p>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background-color:#fafafa;padding:20px 24px;text-align:center;border-top:1px solid #e4e4e7;">
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


export function roadmapWelcomeEmailHtml(args: {
  name: string;
  roadmapTitle: string;
  roadmapSlug: string;
  hoursPerWeek: number;
  targetEndDate: Date;
  weekOneTopics: string[];
}): string {
  const firstName = args.name.split(" ")[0] || args.name;
  const dashboardUrl = "https://www.internhack.xyz/dashboard/roadmaps";
  const learnUrl = `https://www.internhack.xyz/learn/roadmaps/${args.roadmapSlug}`;
  const targetStr = args.targetEndDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  const weekOneRows = args.weekOneTopics.length === 0
    ? '<p style="margin:0;font-size:13px;color:#71717a;">Open your dashboard to see week one.</p>'
    : args.weekOneTopics.map((slug) => `
        <tr><td style="padding:8px 12px;background-color:#fafafa;border:1px solid #e4e4e7;border-radius:6px;font-size:13px;color:#27272a;">
          ${slug}
        </td></tr>
        <tr><td style="height:6px;"></td></tr>`).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:'Segoe UI',Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
    <tr><td style="background-color:#0a0a0a;padding:28px 24px;text-align:center;">
      <h1 style="margin:0;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">InternHack</h1>
      <p style="margin:6px 0 0;font-size:11px;font-family:'Courier New',Courier,monospace;letter-spacing:2px;color:#a3e635;text-transform:uppercase;">your roadmap is ready</p>
    </td></tr>
    <tr><td style="background-color:#ffffff;padding:32px 24px;">
      <h2 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#18181b;">Hey ${firstName}, you're enrolled.</h2>
      <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#52525b;">
        You just locked in <strong style="color:#18181b;">${args.roadmapTitle}</strong>. Your personalized PDF is attached. Below is the plan we built for you, and the topics for week one.
      </p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:22px;border:1px solid #e4e4e7;border-radius:10px;overflow:hidden;">
        <tr>
          <td style="padding:14px 16px;background-color:#fafafa;border-bottom:1px solid #e4e4e7;">
            <p style="margin:0;font-size:11px;font-weight:700;color:#71717a;letter-spacing:1px;text-transform:uppercase;">Pace</p>
            <p style="margin:2px 0 0;font-size:15px;font-weight:700;color:#18181b;">${args.hoursPerWeek} hours per week</p>
          </td>
        </tr>
        <tr>
          <td style="padding:14px 16px;background-color:#fafafa;">
            <p style="margin:0;font-size:11px;font-weight:700;color:#71717a;letter-spacing:1px;text-transform:uppercase;">Target finish</p>
            <p style="margin:2px 0 0;font-size:15px;color:#18181b;">${targetStr}</p>
          </td>
        </tr>
      </table>
      <p style="margin:0 0 10px;font-size:13px;font-weight:700;color:#18181b;">Week 1 topics</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:22px;">
        ${weekOneRows}
      </table>
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 14px;">
        <tr><td style="background-color:#0a0a0a;border-radius:8px;">
          <a href="${dashboardUrl}" style="display:inline-block;padding:14px 36px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;">
            Open my dashboard
          </a>
        </td></tr>
      </table>
      <p style="margin:0 0 16px;font-size:13px;color:#71717a;text-align:center;">
        or <a href="${learnUrl}" style="color:#4f46e5;text-decoration:underline;">jump straight to the canvas</a>
      </p>
      <p style="margin:18px 0 0;font-size:12px;color:#a1a1aa;text-align:center;">
        We'll check in on day 10 to see how it's going.
      </p>
    </td></tr>
    <tr><td style="background-color:#fafafa;padding:20px 24px;text-align:center;border-top:1px solid #e4e4e7;">
      <p style="margin:0;font-size:11px;color:#a1a1aa;">&copy; ${new Date().getFullYear()} InternHack. All rights reserved.</p>
    </td></tr>
  </table>
</body>
</html>`;
}

export function roadmapDay10EmailHtml(args: {
  name: string;
  roadmapTitle: string;
  roadmapSlug: string;
  completedTopics: number;
  plannedTopics: number;
  nextTopicSlug: string | null;
}): string {
  const firstName = args.name.split(" ")[0] || args.name;
  const ratio = args.plannedTopics === 0 ? 0 : Math.round((args.completedTopics / args.plannedTopics) * 100);
  const tier =
    ratio >= 75 ? { label: "On fire", bg: "#dcfce7", text: "#166534" } :
    ratio >= 40 ? { label: "Steady", bg: "#fef3c7", text: "#92400e" } :
    { label: "Ramping up", bg: "#fee2e2", text: "#991b1b" };

  const dashboardUrl = "https://www.internhack.xyz/dashboard/roadmaps";
  const nextTopicUrl = args.nextTopicSlug
    ? `https://www.internhack.xyz/learn/roadmaps/${args.roadmapSlug}/${args.nextTopicSlug}`
    : `https://www.internhack.xyz/learn/roadmaps/${args.roadmapSlug}`;

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:'Segoe UI',Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
    <tr><td style="background-color:#0a0a0a;padding:28px 24px;text-align:center;">
      <h1 style="margin:0;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">InternHack</h1>
      <p style="margin:6px 0 0;font-size:11px;font-family:'Courier New',Courier,monospace;letter-spacing:2px;color:#a3e635;text-transform:uppercase;">10-day check-in</p>
    </td></tr>
    <tr><td style="background-color:#ffffff;padding:32px 24px;">
      <p style="margin:0 0 14px;display:inline-block;padding:4px 10px;background-color:${tier.bg};color:${tier.text};font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;border-radius:4px;">
        ${tier.label}
      </p>
      <h2 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#18181b;">Hey ${firstName}, how's it going?</h2>
      <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#52525b;">
        It's been ten days since you started <strong style="color:#18181b;">${args.roadmapTitle}</strong>. Here's where you are.
      </p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:22px;background-color:#fafafa;border:1px solid #e4e4e7;border-radius:10px;">
        <tr><td style="padding:18px 20px;">
          <p style="margin:0 0 4px;font-size:10px;font-weight:700;color:#71717a;letter-spacing:1px;text-transform:uppercase;">progress</p>
          <p style="margin:0;font-size:36px;font-weight:800;color:#18181b;letter-spacing:-1px;">
            ${args.completedTopics}<span style="font-size:18px;color:#a1a1aa;font-weight:500;"> / ${args.plannedTopics} topics</span>
          </p>
        </td></tr>
      </table>
      ${args.nextTopicSlug ? `
      <p style="margin:0 0 10px;font-size:13px;font-weight:700;color:#18181b;">Next up</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:22px;">
        <tr><td style="padding:14px 16px;background-color:#eef2ff;border:1px solid #e0e7ff;border-radius:8px;">
          <p style="margin:0;font-size:14px;font-weight:700;color:#3730a3;">${args.nextTopicSlug}</p>
          <p style="margin:6px 0 0;font-size:12px;color:#4338ca;">Pick this up when you're ready.</p>
        </td></tr>
      </table>` : ""}
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 14px;">
        <tr><td style="background-color:#0a0a0a;border-radius:8px;">
          <a href="${nextTopicUrl}" style="display:inline-block;padding:14px 36px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;">
            Resume where I left off
          </a>
        </td></tr>
      </table>
      <p style="margin:0 0 16px;font-size:13px;color:#71717a;text-align:center;">
        or <a href="${dashboardUrl}" style="color:#4f46e5;text-decoration:underline;">view full progress</a>
      </p>
      <p style="margin:18px 0 0;font-size:12px;color:#a1a1aa;text-align:center;">
        Need to slow down? Adjust your hours-per-week from the dashboard, we'll recompute the plan.
      </p>
    </td></tr>
    <tr><td style="background-color:#fafafa;padding:20px 24px;text-align:center;border-top:1px solid #e4e4e7;">
      <p style="margin:0;font-size:11px;color:#a1a1aa;">&copy; ${new Date().getFullYear()} InternHack. All rights reserved.</p>
    </td></tr>
  </table>
</body>
</html>`;
}

type ApplicationStatusEmailStatus = "IN_PROGRESS" | "SHORTLISTED" | "REJECTED" | "HIRED";

const STATUS_COPY: Record<
  ApplicationStatusEmailStatus,
  { subject: (job: string) => string; headline: string; body: string; accent: string; badgeBg: string; badgeText: string }
> = {
  IN_PROGRESS: {
    subject: (job) => `Your application for ${job} is moving forward`,
    headline: "Your application is in progress.",
    body: "The recruiter is reviewing your profile and has advanced you to the next stage. Keep an eye on your inbox for the next round or a scheduled interview.",
    accent: "#0a0a0a",
    badgeBg: "#fef3c7",
    badgeText: "#92400e",
  },
  SHORTLISTED: {
    subject: (job) => `You've been shortlisted for ${job}`,
    headline: "Great news, you're shortlisted.",
    body: "The recruiter liked what they saw and has shortlisted your application. Expect them to reach out soon with next steps.",
    accent: "#065f46",
    badgeBg: "#d1fae5",
    badgeText: "#065f46",
  },
  REJECTED: {
    subject: (job) => `Update on your ${job} application`,
    headline: "An update on your application.",
    body: "Unfortunately, the recruiter has decided not to move forward with your application for this role. This happens to every candidate at some point, and it says nothing about your potential. Keep applying, keep building.",
    accent: "#991b1b",
    badgeBg: "#fee2e2",
    badgeText: "#991b1b",
  },
  HIRED: {
    subject: (job) => `Congratulations, you've been hired for ${job}!`,
    headline: "You're hired. Congratulations!",
    body: "The recruiter has selected you for this role. They should follow up directly with the offer and onboarding details. Huge congratulations from the InternHack team!",
    accent: "#065f46",
    badgeBg: "#d1fae5",
    badgeText: "#065f46",
  },
};

export function isEmailableStatus(status: string): status is ApplicationStatusEmailStatus {
  return status === "IN_PROGRESS" || status === "SHORTLISTED" || status === "REJECTED" || status === "HIRED";
}

export function applicationStatusSubject(status: ApplicationStatusEmailStatus, jobTitle: string): string {
  return STATUS_COPY[status].subject(jobTitle);
}

export function applicationStatusEmailHtml(args: {
  studentName: string;
  jobTitle: string;
  company: string;
  status: ApplicationStatusEmailStatus;
  applicationUrl?: string;
}): string {
  const firstName = args.studentName.split(" ")[0] || args.studentName;
  const copy = STATUS_COPY[args.status];
  const label = args.status.replace(/_/g, " ").toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
  const cta = args.applicationUrl || "https://www.internhack.xyz/student/applications";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Application update</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:'Segoe UI',Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
    <tr>
      <td style="background-color:#0a0a0a;padding:28px 24px;text-align:center;">
        <h1 style="margin:0;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">InternHack</h1>
      </td>
    </tr>
    <tr>
      <td style="background-color:#ffffff;padding:32px 24px;">
        <p style="margin:0 0 14px;display:inline-block;padding:4px 10px;background-color:${copy.badgeBg};color:${copy.badgeText};font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;border-radius:4px;">
          ${label}
        </p>
        <h2 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#18181b;">Hey ${firstName}, ${copy.headline}</h2>
        <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#52525b;">
          ${copy.body}
        </p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
          <tr>
            <td style="padding:16px 18px;background-color:#fafafa;border:1px solid #e4e4e7;border-radius:8px;">
              <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;">Role</p>
              <p style="margin:0 0 10px;font-size:15px;font-weight:700;color:#18181b;">${args.jobTitle}</p>
              <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;">Company</p>
              <p style="margin:0;font-size:15px;color:#18181b;">${args.company}</p>
            </td>
          </tr>
        </table>
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
          <tr>
            <td style="background-color:${copy.accent};border-radius:6px;">
              <a href="${cta}" style="display:inline-block;padding:12px 24px;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;">
                View application
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="background-color:#fafafa;padding:20px 24px;text-align:center;border-top:1px solid #e4e4e7;">
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

function escapeCertificateText(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function internshipCertificateDocumentHtml(args: {
  recipientName: string;
  role: string;
  certificateNo: string;
  issueDate: string;
  workDates?: string;
  organization?: string;
  logoDataUri?: string;
  signatoryName?: string;
  signatoryTitle?: string;
  signatureDataUri?: string;
}): string {
  const organization = args.organization || "InternHack";
  const signatoryName = args.signatoryName || "Sachin Chaurasiya";
  const signatoryTitle = args.signatoryTitle || "Founder";
  const logo = args.logoDataUri
    ? `<img src="${args.logoDataUri}" alt="${organization} logo" class="brand-logo" />`
    : `<div class="brand-mark">IH</div>`;
  const signatureImg = args.signatureDataUri
    ? `<img src="${args.signatureDataUri}" alt="Signature" class="sig-img" />`
    : "";

  const name = escapeCertificateText(args.recipientName);
  const role = escapeCertificateText(args.role);
  const certificateNo = escapeCertificateText(args.certificateNo);
  const issueDate = escapeCertificateText(args.issueDate);
  const workDates = args.workDates ? escapeCertificateText(args.workDates) : "";
  const org = escapeCertificateText(organization);
  const signer = escapeCertificateText(signatoryName);
  const signerTitle = escapeCertificateText(signatoryTitle);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Internship Certificate - ${name}</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      background: #e5e7eb;
      color: #111827;
      font-family: Inter, "Segoe UI", Arial, Helvetica, sans-serif;
      display: grid;
      place-items: center;
      padding: 32px;
    }
    .certificate {
      width: min(1120px, 100%);
      aspect-ratio: 1.414 / 1;
      background: #ffffff;
      border: 1px solid #111827;
      padding: 28px;
      position: relative;
      box-shadow: 0 24px 70px rgba(17, 24, 39, 0.18);
    }
    .inner {
      height: 100%;
      border: 4px double #111827;
      padding: 44px 56px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      overflow: hidden;
    }
    .inner::before,
    .inner::after {
      content: "";
      position: absolute;
      width: 220px;
      height: 220px;
      border: 1px solid #d1d5db;
      transform: rotate(45deg);
    }
    .inner::before { top: -132px; left: -132px; }
    .inner::after { right: -132px; bottom: -132px; }
    .topline {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
      margin-bottom: 18px;
      position: relative;
      z-index: 1;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      text-align: left;
    }
    .brand-logo {
      width: 58px;
      height: 58px;
      border-radius: 0;
      object-fit: contain;
      background: transparent;
    }
    .brand-mark {
      width: 58px;
      height: 58px;
      border-radius: 14px;
      display: grid;
      place-items: center;
      background: #0a0a0a;
      color: #ffffff;
      font-weight: 800;
    }
    .brand-name {
      margin: 0;
      font-size: 24px;
      font-weight: 800;
      letter-spacing: 0;
    }
    .cert-no {
      text-align: right;
      font-size: 12px;
      color: #4b5563;
      line-height: 1.6;
    }
    .eyebrow {
      margin: 18px 0 8px;
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #2563eb;
    }
    h1 {
      margin: 0;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(42px, 6vw, 72px);
      font-weight: 700;
      letter-spacing: 0;
      color: #111827;
    }
    .presented {
      margin: 32px 0 8px;
      color: #6b7280;
      font-size: 15px;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-weight: 700;
    }
    .recipient {
      margin: 0;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(40px, 5.5vw, 68px);
      color: #0f172a;
      border-bottom: 2px solid #111827;
      min-width: min(620px, 86%);
      padding-bottom: 8px;
      letter-spacing: 0;
    }
    .copy {
      max-width: 800px;
      margin: 26px auto 0;
      font-size: clamp(17px, 2vw, 22px);
      line-height: 1.65;
      color: #374151;
    }
    .copy strong { color: #111827; }
    .footer-website {
      text-align: left;
      align-self: end;
    }
    .footer-website .website-link {
      display: block;
      font-size: 18px;
      font-weight: 800;
      color: #2563eb;
      text-decoration: none;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }
    .footer-website span {
      display: block;
      font-size: 11px;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-weight: 700;
    }
    .footer {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 26px;
      align-items: end;
      margin-top: auto;
      padding-top: 34px;
      position: relative;
      z-index: 1;
    }
    .signature {
      border-top: 2px solid #111827;
      padding-top: 10px;
      text-align: left;
    }
    .signature.right { text-align: right; }
    .signature p {
      margin: 0;
      color: #111827;
      font-size: 14px;
      font-weight: 800;
    }
    .signature span {
      display: block;
      margin-top: 3px;
      color: #6b7280;
      font-size: 12px;
      font-weight: 600;
    }
    .sig-img {
      display: block;
      height: 52px;
      max-width: 160px;
      object-fit: contain;
      margin-bottom: 6px;
    }
    @media print {
      body { background: #ffffff; padding: 0; }
      .certificate { box-shadow: none; width: 100%; }
    }
    @media (max-width: 760px) {
      body { padding: 14px; }
      .certificate { aspect-ratio: auto; }
      .inner { padding: 28px 20px; }
      .topline,
      .footer {
        grid-template-columns: 1fr;
        display: grid;
      }
      .topline,
      .cert-no,
      .signature,
      .signature.right {
        text-align: center;
        justify-content: center;
      }
      .brand { justify-content: center; text-align: center; }
    }
  </style>
</head>
<body>
  <main class="certificate" aria-label="Internship certificate">
    <section class="inner">
      <header class="topline">
        <div class="brand">
          ${logo}
          <div>
            <p class="brand-name">${org}</p>
          </div>
        </div>
        <div class="cert-no">
          <strong>Certificate No.</strong><br />
          ${certificateNo}
        </div>
      </header>

      <p class="eyebrow">Certificate of Internship</p>
      <h1>Certificate of Completion</h1>

      <p class="presented">This certificate is proudly presented to</p>
      <h2 class="recipient">${name}</h2>

      <p class="copy">
        This is to certify that <strong>${name}</strong> has successfully completed an internship
        with <strong>${org}</strong> as a <strong>${role}</strong>${workDates ? `, from <strong>${workDates}</strong>` : ""}.
        Throughout this period, the recipient demonstrated outstanding commitment, analytical thinking,
        and made meaningful professional contributions to data-focused work.
      </p>

      <footer class="footer">
        <div class="footer-website">
          <a href="https://internhack.xyz" class="website-link">internhack.xyz</a>
          <span>Official Career Platform</span>
        </div>
        <div class="signature right">
          ${signatureImg}
          <p>${signer}</p>
          <span>${signerTitle}</span>
        </div>
      </footer>
    </section>
  </main>
</body>
</html>`;
}

export function internshipCertificateEmailHtml(args: {
  recipientName: string;
  role: string;
  certificateNo: string;
  issueDate: string;
}): string {
  const firstName = escapeCertificateText(args.recipientName.split(" ")[0] || args.recipientName);
  const role = escapeCertificateText(args.role);
  const certificateNo = escapeCertificateText(args.certificateNo);
  const issueDate = escapeCertificateText(args.issueDate);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your InternHack internship certificate</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:'Segoe UI',Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;">
    <tr>
      <td style="background-color:#0a0a0a;padding:28px 24px;text-align:center;">
        <h1 style="margin:0;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:0;">InternHack</h1>
        <p style="margin:6px 0 0;font-size:11px;font-family:'Courier New',Courier,monospace;letter-spacing:2px;color:#60a5fa;text-transform:uppercase;">internship certificate</p>
      </td>
    </tr>
    <tr>
      <td style="background-color:#ffffff;padding:32px 24px;">
        <p style="margin:0 0 14px;display:inline-block;padding:4px 10px;background-color:#dbeafe;color:#1d4ed8;font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase;border-radius:4px;">
          Certificate issued
        </p>
        <h2 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#18181b;">Hi ${firstName}, your certificate is attached.</h2>
        <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#52525b;">
          Congratulations on completing your internship work with InternHack as a <strong style="color:#18181b;">${role}</strong>. The certificate HTML file is attached to this email.
        </p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:22px;border:1px solid #e4e4e7;border-radius:8px;background-color:#fafafa;">
          <tr>
            <td style="padding:16px 18px;">
              <p style="margin:0 0 4px;font-size:11px;font-weight:800;color:#71717a;text-transform:uppercase;letter-spacing:1px;">Certificate number</p>
              <p style="margin:0 0 12px;font-size:16px;font-weight:800;color:#18181b;">${certificateNo}</p>
              <p style="margin:0 0 4px;font-size:11px;font-weight:800;color:#71717a;text-transform:uppercase;letter-spacing:1px;">Issue date</p>
              <p style="margin:0;font-size:15px;color:#18181b;">${issueDate}</p>
            </td>
          </tr>
        </table>
        <p style="margin:0;font-size:12px;color:#a1a1aa;text-align:center;line-height:1.5;">
          This certificate was generated by InternHack. Keep the certificate number for reference.
        </p>
      </td>
    </tr>
    <tr>
      <td style="background-color:#fafafa;padding:20px 24px;text-align:center;border-top:1px solid #e4e4e7;">
        <p style="margin:0;font-size:11px;color:#a1a1aa;">&copy; ${new Date().getFullYear()} InternHack. All rights reserved.</p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
