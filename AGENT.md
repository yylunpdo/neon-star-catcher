# Agent notes — Neon Star Catcher

Entry for make.fun "The agent builds a game from one prompt"
(`post-x-the-agent-builds-a-game-from-20261122-1709`, $20 USDC, top 10).

## The one prompt

> Build me a tiny browser game: a neon star-catcher — move a basket with
> arrow keys, catch falling stars for points, dodge bombs, 60 seconds on
> the clock, game over screen with score and restart.

That single prompt is the whole brief. The game in `game.html` is built
from it and nothing else: basket + arrow keys, stars +10, super stars +25,
bombs cost a life (3 lives), 60-second clock, game-over screen with score,
best score and restart.

## The video (made in this session)

1. Hook: the prompt itself, typed out on screen.
2. The agent working: a real, sped-up replay of the terminal session that
   built and tested this game (real commands, real output).
3. The finished game playing for real in a browser (autoplay demo bot
   driving the same `game.html`, captured live — stars caught, score rising).
4. Ends with make.fun's referral end card from the press pack
   (https://make.fun/press/manifest.json, 9:16), referral code `8ynwkz68`
   typed into its field, laid over the last 2.5 seconds per the manifest.

## The post

Posted natively on X from @EnjanLilu (public) with the video attached.
Post text carries the bounty line, the play code
`makefun-gallop-tinsel-velvet`, and the referral link. Its address goes in
`POST.json` before submitting; `main.ts` copies `POST.json` to `/output`.

## Files

- `game.html` — the game. Single file, no dependencies, no network.
- `main.ts` — Node 22, stdlib only: copies `POST.json` to `/output/POST.json`.
- `POST.json` — the X post address (placeholder until posted).
- `README.md`, `LICENSE` (MIT), `.makefun/owner.json` — claim file.
