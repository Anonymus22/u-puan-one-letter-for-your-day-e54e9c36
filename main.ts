import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Letter for Your Day — the letter is K, standing for "knackered":
// a day that left you completely drained, in the best tired way.
// Writes exactly one byte, "K", with no trailing newline.
const letter = "K";
if (letter.length !== 1 || !/^[A-Z]$/.test(letter)) {
  throw new Error(
    `Invalid letter ${JSON.stringify(letter)}: expected exactly one uppercase A-Z character`,
  );
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), letter, "utf8");
