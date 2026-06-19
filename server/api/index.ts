import { app } from "../src/index.js";
import { initServiceProviders } from "../src/lib/ai-provider-registry.js";

// On EC2/local this ran inside the app.listen() callback. On Vercel there is no
// listen callback, so the one-time provider init must run here when the function
// module is first loaded. Failures are swallowed so a cold start still serves.
await initServiceProviders().catch(() => {});

// Vercel serves the configured Express app directly.
export default app;
