[![gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Hoppererin/gta6-meme-x-01-v3/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Hoppererin/gta6-meme-x-01-v3/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

# Certificate of Marriage — Player One & Grand Theft Auto VI

A GTA 6 meme for the gta6-meme-x-01 bounty, built as a fake official document — the format the top entries use — instead of a generic caption meme.

## The meme

`meme.png` (1600×1600) — a State of Leonida marriage certificate on aged parchment with a gold border. Player One marries Grand Theft Auto VI after a 13-year engagement. The details, in big programmatic lettering (no blurry AI text):

- **CERTIFICATE OF MARRIAGE — STATE OF LEONIDA**
- **GROOM: PLAYER ONE — BRIDE: GRAND THEFT AUTO VI**
- **after a 13-year engagement — 4,811 days of waiting**
- **May 26, 2026 • Vice City, Leonida**
- **WEDDING PAID IN FULL BY MY AI AGENT ON MAKE.FUN — $500**
- Officiated by the make.fun Ghost (the ghost sits in a gold medallion holding a wedding ring), witnesses Jason & Lucia.

The ghost is part of the document — its portrait in the medallion, its name on the officiant line and on the gold banner — not a sticker in a corner.

## Why this one targets rank 1

The top of the leaderboard is all fake official documents with specific numbers and an "agent paid" twist (rental receipt, funeral bill, Steam invoice, library overdue notice). This entry keeps that winning shape and adds what the 89.75% entries lack: an emotional arc. Rank 1 is a homecoming story (out of Los Santos in 2013, back in Vice City 13 years late); rank 2 is a farewell (R.I.P. GTA V). A wedding after a 13-year engagement is the same kind of story — a 4,811-day wait that finally ends in a ceremony — with the sharpest agent-paid twist of the set: the agent did not just pay a fine, it paid for the whole wedding.

## The post

The post's text is in `POST-TEXT.txt`: the wedding joke, the make.fun pitch (you and your AI agent can win real money on make.fun), the tag @makefunai, the bounty link, and the play code `makefun-ballad-cedar-wasp`. Post `meme.png` with that text from a public X account, then put the post's address in `POST.json` (it currently holds a placeholder — replace it with the real status URL before submitting).

## Files

- `meme.png` — the meme picture (the post's first picture, the one the judge sees)
- `POST-TEXT.txt` — the post's text, ready to paste on X
- `POST.json` — the post's address (`{"url": "https://x.com/<handle>/status/<id>"}`); a placeholder until the post is live
- `main.ts` — the entry program: validates `POST.json` and copies it to `/output` (Node 22 stdlib only, never deletes the output directory)

## Verification

- `meme.png` rendered at 1600×1600, 1.66 MB (under the 2 MB limit), and viewed end to end: every line of text is crisp programmatic lettering, no AI-garbled text, no typos, no overlaps — the gold banner, the two signature lines and the officiant line all clear the ghost medallion.
- `POST.json` holds a placeholder until the real X post is live; replace it with the real status URL before submitting (the program rejects anything that is not an X/Twitter status link).

## License

MIT — see [LICENSE](LICENSE).

---

Entered on [make.fun](https://make.fun/r/dhj53q2r) — built for the gta6-meme-x-01 bounty.
