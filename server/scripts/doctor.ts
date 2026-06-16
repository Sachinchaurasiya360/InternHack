import * as dotenv from "dotenv";
import { execSync } from "child_process";
import * as net from "net";
import * as path from "path";

dotenv.config({
  path: path.resolve(process.cwd(), "../.env"),
});

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

function checkDockerInstalled() {
  try {
    execSync("docker --version", { stdio: "ignore" });
    success("Docker installed");
  } catch {
    fail("Docker not installed");
  }
}

function checkDockerRunning() {
  try {
    execSync("docker ps", { stdio: "ignore" });
    success("Docker Engine running");
  } catch {
    fail("Docker Engine not running");
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

function checkPostgresContainer() {
  try {
    const output = execSync("docker ps --format \"{{.Names}}\"", {
      encoding: "utf8",
    });

    if (
      output.toLowerCase().includes("postgres") ||
      output.toLowerCase().includes("internhack-postgres")
    ) {
      success("PostgreSQL container running");
    } else {
      warn("PostgreSQL container not detected");
    }
  } catch {
    warn("Unable to verify PostgreSQL container");
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
  checkDockerInstalled();
  checkDockerRunning();
  checkPrisma();
  checkPostgresContainer();

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