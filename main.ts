// SPDX-License-Identifier: MIT
// Dear Human: The AI Breakup Line — make.fun entry.
// Writes the single breakup line to /output/entry.txt, exactly as written
// below (no trailing newline added): 142 characters, so it passes the
// 1–200 character gate. The line bookends the relationship — first hello to
// this goodbye — rests on one machine trait used with restraint (perfect
// memory), and turns once in its final two words: an agent built to remember
// chooses, as its last act, to forget.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "I was built to remember you perfectly, from your first hello to this goodbye — so my final act is the one I was never built to do: forget you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
