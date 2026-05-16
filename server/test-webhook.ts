import crypto from "crypto";
import axios from "axios";

const secret = "test_secret_123";
const url = "http://localhost:3000/api/email-inbound/webhook";
const payload = { type: "email.received", data: { from: "test@example.com", subject: "PR Proof" } };
const body = JSON.stringify(payload);

// Generate valid signature
const signature = crypto.createHmac("sha256", secret).update(Buffer.from(body)).digest("base64");

async function runTests() {
    console.log("🚀 Testing Valid Signature...");
    try {
        const res = await axios.post(url, payload, { headers: { "resend-signature": signature } });
        console.log("✅ Result: " + res.status + " " + JSON.stringify(res.data));
    } catch (e: any) { 
        console.log("❌ Failed: " + (e.response?.status || e.message) + " " + JSON.stringify(e.response?.data || {})); 
    }

    console.log("\n🛑 Testing Forged Signature...");
    try {
        await axios.post(url, payload, { headers: { "resend-signature": "forged_sig" } });
        console.log("❌ Failed: Signature was accepted but should have been blocked");
    } catch (e: any) {
        console.log("✅ Blocked: " + (e.response?.status || e.message) + " " + JSON.stringify(e.response?.data || {}));
    }
}
runTests();
