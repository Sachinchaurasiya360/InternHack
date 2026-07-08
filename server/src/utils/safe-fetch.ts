import * as http from "http";
import * as https from "https";
import dns from "dns/promises";

function isPrivateIP(ip: string): boolean {
  const parts = ip.split('.').map(Number);
  if (parts.length !== 4) return true; // Block IPv6 for simplicity and safety
  const [a, b] = parts;
  if (a === 10) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  if (a === 127) return true;
  if (a === 169 && b === 254) return true;
  if (a === 0) return true;
  if (a >= 224) return true;
  return false;
}

export async function safeFetchText(urlStr: string, maxBytes: number = 200000, redirectCount = 0): Promise<string> {
  if (redirectCount > 5) {
    throw new Error("Too many redirects");
  }

  let url: URL;
  try {
    url = new URL(urlStr);
  } catch (e) {
    throw new Error("Invalid URL");
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error("Invalid protocol");
  }

  // Always resolve to IPv4
  const addresses = await dns.resolve4(url.hostname).catch(() => []);
  if (!addresses || addresses.length === 0) {
    throw new Error(`Could not resolve hostname: ${url.hostname}`);
  }

  const ip = addresses[0];
  if (isPrivateIP(ip)) {
    throw new Error(`Resolved to private/internal IP - access denied`);
  }

  return new Promise((resolve, reject) => {
    const isHttps = url.protocol === "https:";
    const options = {
      method: "GET",
      hostname: ip,
      port: url.port ? parseInt(url.port) : (isHttps ? 443 : 80),
      path: url.pathname + url.search,
      headers: {
        "Host": url.hostname,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
      },
      servername: isHttps ? url.hostname : undefined,
      timeout: 10000,
    };

    const req = (isHttps ? https : http).request(options, (res) => {
      // Handle redirects
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        req.destroy();
        try {
          const nextUrl = new URL(res.headers.location, url.href).href;
          resolve(safeFetchText(nextUrl, maxBytes, redirectCount + 1));
        } catch (e) {
          reject(new Error("Invalid redirect location"));
        }
        return;
      }

      if (res.statusCode && res.statusCode >= 400) {
        req.destroy();
        reject(new Error(`HTTP Error ${res.statusCode}`));
        return;
      }

      let data = "";
      let byteCount = 0;

      res.setEncoding("utf8");
      res.on("data", (chunk) => {
        byteCount += Buffer.byteLength(chunk, "utf8");
        if (byteCount > maxBytes) {
          req.destroy(new Error("Response too large"));
          return;
        }
        data += chunk;
      });

      res.on("end", () => {
        resolve(data);
      });
    });

    req.on("error", (err) => reject(err));
    req.on("timeout", () => {
      req.destroy(new Error("Request timeout"));
      reject(new Error("Request timeout"));
    });
    req.end();
  });
}
