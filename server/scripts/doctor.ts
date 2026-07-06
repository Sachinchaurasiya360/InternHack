import * as dotenv from "dotenv";
import { execSync } from "child_process";
import * as net from "net";
import * as path from "path";

const envFiles = [
  path.resolve(process.cwd(), "../.env"),
  path.resolve(process.cwd(), ".env"),
  path.resolve(process.cwd(), ".env.local"),
];

for (const envFile of envFiles) {
  dotenv.config({ path: envFile, override: true });
}

let passed = 0;
let failed = 0;
let warnings = 0;

function success(message: string) {
  console.log(`✓ ${message}`);
  passed++;
}

function fail(message: string) {
  console.log(`✗ ${message}`);
  failed++;
}

function warn(message: string) {
  console.log(`⚠ ${message}`);
  warnings++;
}

function checkNodeVersion() {
  const major = Number(process.versions.node.split(".")[0]);

  if (major >= 20) {
    success(`Node.js v${process.versions.node}`);
  } else {
    fail(
      `Node.js v${process.versions.node} detected (requires Node.js >= 20)`
    );
  }
}

function checkEnvVariables() {
  const requiredEnv = ["DATABASE_URL", "JWT_SECRET"];

  for (const envVar of requiredEnv) {
    if (process.env[envVar]?.trim()) {
      success(`${envVar} configured`);
    } else {
      fail(`${envVar} missing`);
    }
  }
}

function checkPrisma() {
  try {
    execSync("npx prisma --version", { stdio: "ignore" });
    success("Prisma available");
  } catch {
    fail("Prisma not available");
  }
}

function checkPort(port: number): Promise<void> {
  return new Promise((resolve) => {
    const server = net.createServer();

    server.once("error", () => {
      warn(`Port ${port} already in use`);
      resolve();
    });

    server.once("listening", () => {
      server.close(() => {
        success(`Port ${port} available`);
        resolve();
      });
    });

    server.listen(port);
  });
}

async function main() {
  console.log("\n==============================");
  console.log("InternHack Setup Doctor");
  console.log("==============================\n");

  checkNodeVersion();
  checkEnvVariables();
  checkPrisma();

  await checkPort(3000);
  await checkPort(5173);
  await checkPort(5432);

  console.log("\n==============================");
  console.log(`Passed: ${passed}`);
  console.log(`Warnings: ${warnings}`);
  console.log(`Failed: ${failed}`);
  console.log("==============================");

  if (failed > 0) {
    process.exit(1);
  }

  console.log("\n🎉 Development environment looks good!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
