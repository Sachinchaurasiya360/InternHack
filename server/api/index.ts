import { app } from "../src/index.js";
import { initServiceProviders } from "../src/lib/ai-provider-registry.js";

// On EC2/local this ran inside the app.listen() callback. On Vercel there is no
// listen callback, so the one-time provider init runs when the function module
// is first loaded. This is intentionally NOT awaited: a top-level await makes
// the module async, which breaks Vercel's default-export detection ("the default
// export must be a function or server"). Failures are swallowed so a cold start
// still serves.
void initServiceProviders().catch(() => {});

// Vercel serves the configured Express app directly.
export default app;
