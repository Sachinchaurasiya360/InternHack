import { Router } from "express";
import { prisma } from "../../database/db.js";
import { buildUnsubscribeToken, verifyUnsubscribeToken } from "../../utils/unsubscribe.utils.js";

/**
 * Public email preference endpoints, reached from unsubscribe links in emails.
 * The signed token in the query string is the only authentication.
 *
 * GET  /api/email/unsubscribe?token=  -> flips the flag, shows a confirmation page
 * POST /api/email/unsubscribe?token=  -> RFC 8058 one-click unsubscribe (mail clients)
 * GET  /api/email/resubscribe?token=  -> undo, shows a confirmation page
 */
export const emailPrefsRouter = Router();

function renderPage(opts: { heading: string; body: string; actionHtml?: string }): string {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex" />
  <title>${opts.heading} | InternHack</title>
</head>
<body style="margin:0;background:#fafaf9;font-family:Arial,Helvetica,sans-serif;color:#1c1917;">
  <div style="max-width:480px;margin:80px auto;padding:0 20px;">
    <div style="background:#ffffff;border:1px solid #e7e5e4;border-radius:8px;padding:36px 32px;">
      <div style="width:10px;height:10px;background:#a3e635;margin-bottom:20px;"></div>
      <h1 style="margin:0 0 12px;font-size:22px;line-height:1.3;">${opts.heading}</h1>
      <p style="margin:0;font-size:14px;line-height:1.6;color:#57534e;">${opts.body}</p>
      ${opts.actionHtml ?? ""}
    </div>
    <p style="text-align:center;font-size:12px;color:#a8a29e;margin-top:16px;">InternHack</p>
  </div>
</body>
</html>`;
}

function getToken(req: { query: Record<string, unknown> }): string | null {
  const token = req.query["token"];
  return typeof token === "string" && token.length > 0 ? token : null;
}

async function setUnsubscribed(token: string, unsubscribed: boolean): Promise<boolean> {
  const userId = verifyUnsubscribeToken(token);
  if (!userId) return false;
  try {
    await prisma.user.update({
      where: { id: userId },
      data: { unsubscribeDigest: unsubscribed },
    });
    return true;
  } catch {
    // User no longer exists; treat as handled so the link never errors for recipients.
    return false;
  }
}

const invalidPage = () =>
  renderPage({
    heading: "This link is not valid",
    body: "The unsubscribe link is incomplete or has been tampered with. Use the unsubscribe link from a recent InternHack email, or manage emails from your account.",
  });

emailPrefsRouter.get("/unsubscribe", async (req, res, next) => {
  try {
    const token = getToken(req);
    const ok = token ? await setUnsubscribed(token, true) : false;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    if (!ok || !token) {
      res.status(400).send(invalidPage());
      return;
    }
    const userId = verifyUnsubscribeToken(token)!;
    const resubscribeHref = `resubscribe?token=${encodeURIComponent(buildUnsubscribeToken(userId))}`;
    res.status(200).send(
      renderPage({
        heading: "You're unsubscribed",
        body: "You will no longer receive digests, reminders, or announcement emails from InternHack. Account emails like sign-in codes and receipts still arrive, since your account needs them.",
        actionHtml: `<p style="margin:20px 0 0;font-size:13px;"><a href="${resubscribeHref}" style="color:#4d7c0f;text-decoration:underline;">Changed your mind? Resubscribe</a></p>`,
      }),
    );
  } catch (err) {
    next(err);
  }
});

// RFC 8058 one-click unsubscribe: mail clients POST here without rendering a page.
emailPrefsRouter.post("/unsubscribe", async (req, res, next) => {
  try {
    const token = getToken(req);
    const ok = token ? await setUnsubscribed(token, true) : false;
    res.status(ok ? 200 : 400).json({ success: ok });
  } catch (err) {
    next(err);
  }
});

emailPrefsRouter.get("/resubscribe", async (req, res, next) => {
  try {
    const token = getToken(req);
    const ok = token ? await setUnsubscribed(token, false) : false;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    if (!ok) {
      res.status(400).send(invalidPage());
      return;
    }
    res.status(200).send(
      renderPage({
        heading: "Welcome back",
        body: "You're resubscribed. Digests, deadline reminders, and announcements will reach your inbox again.",
      }),
    );
  } catch (err) {
    next(err);
  }
});
