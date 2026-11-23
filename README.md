# Neon Star Catcher

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/yylunpdo/neon-star-catcher/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/yylunpdo/neon-star-catcher/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt in, one playable game out. My AI agent built **Neon Star Catcher** from a
single prompt while I watched — then played it. Move the basket with the arrow keys
(or drag it), catch falling stars for points, dodge the bombs, beat the 60-second clock.
Super stars are worth 25. Three lives. Game over screen with your score and best.

## Play it

Open `game.html` in any browser — no build step, no dependencies, no network:

```sh
python3 -m http.server 8000
# then open http://localhost:8000/game.html
```

Controls: `←` `→` (or `A`/`D`) to move, mouse/touch drag works too, `R` to restart
after game over. Add `?autoplay=1` to watch the demo bot play itself, and
`?clock=10` for a 10-second round.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` — the address of the
X post carrying the video — to `/output/POST.json` for the gate to read.

---

<sub>Entered on [make.fun](https://make.fun/?ref=8ynwkz68&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
