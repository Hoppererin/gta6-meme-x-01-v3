// gta6-meme-x-01 v3 — "Certificate of Marriage" (State of Leonida).
//
// The entry is the X post: the marriage-certificate meme plus its text,
// which the house reads straight from X. This program only hands the
// house the post's address. It reads POST.json next to this file, checks
// the address is an X/Twitter status link, and copies the file into the
// output directory. It never deletes anything: in the grader /output is
// a mount point, so removing it would crash the run.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const botDir = process.env.MAKEFUN_BOT_DIR ?? here;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Accepted: https://x.com/<handle>/status/<id> (or twitter.com, with an
// optional www./mobile. prefix, or /i/web/status/<id>). Anything after
// the id (query, fragment) is ignored.
const POST_URL_RE =
  /^https:\/\/(?:www\.|mobile\.)?(?:x\.com|twitter\.com)\/(?:i\/web\/status\/\d+|[A-Za-z0-9_]+\/status\/\d+)(?:[?#].*)?$/;

function fail(message: string): never {
  throw new Error(message);
}

const postPath = join(botDir, "POST.json");
let raw: string;
try {
  raw = readFileSync(postPath, "utf8");
} catch (err) {
  fail(`cannot read POST.json in ${botDir}: ${(err as Error).message}`);
}

let post: { url?: unknown };
try {
  post = JSON.parse(raw) as { url?: unknown };
} catch {
  fail("POST.json is not valid JSON");
}

if (typeof post.url !== "string" || post.url.length === 0) {
  fail('POST.json has no "url" string field');
}
if (!POST_URL_RE.test(post.url)) {
  fail(
    `POST.json url is not an X/Twitter status link: ${post.url} ` +
      "(expected https://x.com/<handle>/status/<digits>)",
  );
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "POST.json");
writeFileSync(outPath, raw);

// Read the copy back: a partial write or a wrong output directory must
// fail here, not silently reach the gate.
let handedIn: { url?: unknown };
try {
  handedIn = JSON.parse(readFileSync(outPath, "utf8")) as { url?: unknown };
} catch (err) {
  fail(`cannot read back ${outPath}: ${(err as Error).message}`);
}
if (handedIn.url !== post.url) {
  fail(
    `output POST.json does not match the input: wrote ${post.url}, ` +
      `read back ${String(handedIn.url)}`,
  );
}
console.log(`POST.json handed in: ${post.url}`);
