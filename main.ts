// makefun-ai-excited — entry for make.fun's "Make the AI judge excited" bounty.
//
// The entry is a single image: a colossal blue whale breaching vertically
// through a glass skyscraper city at golden sunrise. This program just
// places that image where the grader expects it.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });

// The entry must be a whole image, so refuse to copy an empty file.
if (statSync(source).size === 0) {
  throw new Error("entry.png is empty");
}

copyFileSync(source, target);
