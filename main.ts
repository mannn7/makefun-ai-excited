// Entry renderer: places the finished artwork at the output path the
// grader expects. The picture itself is a fixed asset in this repo;
// this script only moves its bytes, unchanged, into the output folder.

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const pictureName = "entry.png";

// The grader sets MAKEFUN_OUTPUT_DIR; fall back to a local folder so
// the script is still runnable by hand.
const targetFolder = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "output");
const sourceFile = resolve(pictureName);

// Fail loudly instead of copying nothing when the artwork is missing.
if (!existsSync(sourceFile)) {
  throw new Error(`Artwork not found at ${sourceFile}; cannot render entry.`);
}

const sourceBytes = statSync(sourceFile).size;

mkdirSync(targetFolder, { recursive: true });
const destinationFile = join(targetFolder, pictureName);
copyFileSync(sourceFile, destinationFile);

// A byte-for-byte copy must keep the size; catch a partial write here.
const writtenBytes = statSync(destinationFile).size;
if (writtenBytes !== sourceBytes) {
  throw new Error(
    `Copy mismatch: wrote ${writtenBytes} bytes, expected ${sourceBytes}.`,
  );
}

console.log(`Wrote ${destinationFile} (${writtenBytes} bytes)`);
