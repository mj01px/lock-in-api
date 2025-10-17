/**
 * Environment loader.
 *
 * This module safely loads environment variables from `.env`
 * files, supporting both root and src directories.
 *
 * Purpose:
 * - Ensures dotenv runs before any module uses process.env
 * - Handles TypeScript dev path issues with ts-node-dev
 * - Avoids leaking secrets in logs (masks JWT_SECRET)
 *
 * Behavior:
 * - Tries `<project>/.env`, then `<project>/src/.env`
 * - Logs which file was loaded or warns if missing
 *
 * Example log:
 * [ENV] load from: C:\path\to\.env | JWT_SECRET: *****
 */

// imports
import path from "path";
import fs from "fs";
import dotenv from "dotenv";

// determine .env file path
const rootEnv = path.resolve(__dirname, "..", "..", ".env");
const srcEnv  = path.resolve(__dirname, "..", ".env");

// load .env file if it exists
const envPath = fs.existsSync(rootEnv) ? rootEnv : fs.existsSync(srcEnv) ? srcEnv : undefined;


// configure dotenv and log result
if (envPath) {
    dotenv.config({ path: envPath });
    const masked = (process.env.JWT_SECRET || "").slice(0, 2) + "***";
    console.log("[ENV] load from:", envPath, "| JWT_SECRET:", masked || "MISSING");
} else {
    console.warn("[ENV] .env not find", rootEnv, "ou", srcEnv);
}
