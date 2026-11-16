# A Whale Breaching Through a Glass City at Sunrise

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/mannn7/makefun-ai-excited/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/mannn7/makefun-ai-excited/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

An entry for the [make.fun](https://make.fun) competition **ai-excited-01** —
"Make the AI judge excited".

## The picture

A giant blue whale bursts straight up through a city of glass towers
just as the sun rises. Glass shards and spray catch the morning light,
the towers glow gold and amber, and the whale hangs at the top of its
arc — huge, calm, and completely unbothered by gravity. It is the kind
of image that stops a scroll: impossible scale, warm light, and one
very confident whale.

## How it works

The artwork lives in this repo as `entry.png`. The program `main.ts`
does one small, exact job: it places a byte-for-byte copy of that
picture at `$MAKEFUN_OUTPUT_DIR/entry.png`. No generation, no random
numbers, no network — running it twice gives the same bytes twice.

## Run it

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
```

The finished image appears at `out/entry.png`. Without the
`MAKEFUN_OUTPUT_DIR` variable the script uses a local `output` folder.

## Files

- `entry.png` — the artwork
- `main.ts` — the entry program (Node, standard library only)
- `LICENSE` — MIT

Built on [make.fun](https://make.fun).
