# Security Policy

Thank you for helping keep InternHack and its users safe! We take security vulnerabilities seriously and appreciate responsible disclosure.

---

## Supported Versions

| Version        | Supported          |
| -------------- | ------------------ |
| `main` (latest) | ✅ Yes             |
| Older branches  | ❌ No              |

Security fixes are applied to the **`main`** branch only.

---

## Reporting a Vulnerability

> **⚠️ Please do NOT open a public GitHub issue for security vulnerabilities.**

If you discover a security vulnerability, please report it **privately** using one of the following methods:

1. **GitHub Security Advisories (preferred):**  
   Navigate to [Security → Advisories → New draft advisory](https://github.com/Sachinchaurasiya360/InternHack/security/advisories/new) to report the issue confidentially.

2. **Email:**  
   Send details to the repository maintainer via the contact information listed on their GitHub profile.

### What to Include

When reporting, please provide as much of the following as possible:

- **Description** of the vulnerability and its potential impact
- **Steps to reproduce** the issue (proof of concept if available)
- **Affected component(s)** — e.g., API endpoint, middleware, client page
- **Severity assessment** — your estimation of the risk (Critical / High / Medium / Low)
- **Suggested fix** (optional but appreciated)

### Response Timeline

| Action                        | Timeframe          |
| ----------------------------- | ------------------ |
| Acknowledgement of report     | Within **48 hours** |
| Initial assessment            | Within **2 business days** |
| Status update / fix timeline  | Within **30 business days** |
| Public disclosure (if applicable) | After fix is deployed |

---

## Scope

### In Scope

- Authentication and authorization flaws (JWT bypass, privilege escalation)
- Injection vulnerabilities (SQL injection, NoSQL injection, XSS, command injection)
- Server-side request forgery (SSRF)
- Sensitive data exposure (credentials, tokens, PII leaks)
- Broken access control (IDOR, missing role checks)
- Insecure dependencies with known CVEs
- Misconfigured security headers or CORS
- File upload vulnerabilities (unrestricted upload, path traversal)
- Payment/subscription bypass

### Out of Scope

- Denial of Service (DoS/DDoS) attacks against the production site
- Social engineering or phishing attacks
- Issues in third-party services (Google OAuth, AWS, Resend, etc.)
- Vulnerabilities requiring physical access to a user's device
- Issues only reproducible on unsupported or heavily outdated browsers
- Spam or rate-limiting bypass on non-critical endpoints
- Missing best practices that do not lead to an exploitable vulnerability

---

## Safe Harbor

We support responsible security research. If you follow this policy in good faith:

- We will **not** pursue legal action against you
- We will work with you to understand and resolve the issue promptly
- We will credit you (with your permission) in the fix commit or advisory

---

## Security Best Practices for Contributors

When contributing to InternHack, please keep these practices in mind:

- **Never commit secrets** — API keys, passwords, or tokens should only live in `.env` files (which are `.gitignore`d)
- **Validate all inputs** — Use Zod schemas for server-side input validation
- **Use parameterized queries** — Prisma ORM handles this by default; avoid raw SQL unless necessary
- **Sanitize outputs** — Use DOMPurify (`isomorphic-dompurify`) for any user-generated content rendered as HTML
- **Follow the principle of least privilege** — Apply `authMiddleware` and `requireRole()` to all protected routes
- **Keep dependencies updated** — Dependabot will open automated PRs for vulnerable dependencies

---

## Automated Security Scanning

This project uses the following automated security measures:

| Tool                      | Purpose                                              |
| ------------------------- | ---------------------------------------------------- |
| **Trivy**                 | Container image vulnerability scanning at deploy time |
| **npm audit**             | Dependency vulnerability scanning in CI               |
| **Dependency Review**     | Blocks PRs that introduce known-vulnerable packages    |
| **Dependabot**            | Automated dependency update PRs for npm and GitHub Actions |
| **Helmet**                | Security headers (CSP, HSTS, X-Frame-Options, etc.)   |
| **express-rate-limit**    | Rate limiting on authentication and AI endpoints       |

---

*This policy is subject to updates. Last revised: 2026-05-22.*
