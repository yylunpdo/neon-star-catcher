// Neon Star Catcher — make.fun entry for "The agent builds a game from one prompt"
// (Node 22, standard library only).
//
// The entry is the X post itself: the video shows one prompt turning into the
// playable browser game in game.html, posted natively on X. This program's only
// job is to hand the post's address to the gate: it copies POST.json from the
// repository root to /output/POST.json, byte for byte. Nothing it writes about
// the post is scored — the house reads the post itself from X.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const src = join(BOT_DIR, 'POST.json');
const dst = join(OUTPUT_DIR, 'POST.json');

// Fail loudly on a malformed POST.json instead of copying garbage to the gate.
// (package.json marks this repo as ESM so Node runs main.ts without a warning.)
const raw = readFileSync(src, 'utf8');
const parsed = JSON.parse(raw) as unknown;
if (!parsed || typeof parsed !== 'object' || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('POST.json must be a JSON object with a string "url" field');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(src, dst);
