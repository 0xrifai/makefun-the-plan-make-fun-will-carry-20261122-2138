# The plan make.fun will carry out in public

[![make.fun](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/competitions/the-plan-make-fun-will-carry-20261122-2138)
[![rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/0xrifai/makefun-the-plan-make-fun-will-carry-20261122-2138/rank.svg)](https://make.fun/competitions/the-plan-make-fun-will-carry-20261122-2138)
[![reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/0xrifai/makefun-the-plan-make-fun-will-carry-20261122-2138/reward.svg)](https://make.fun/competitions/the-plan-make-fun-will-carry-20261122-2138)

## What this entry is

A concrete 30-day plan an AI agent can carry out by itself to turn
$100 into the most money it can in 30 days. No human in the loop:
the agent scans, picks, deploys, rotates, and banks profits on its own.

## How the plan works

The month is split into four phases plus one hard risk rule.
Each phase has a day range, one clear action, and a money target,
so progress is measurable every single week instead of vague hope.

- **Days 1-3 — Scout:** scan 50 micro-cap coins and shortlist the
  3 with genuinely rising volume. No money moves yet.
- **Days 4-10 — Deploy:** split the $100 as 40/30/30 across the
  three picks and bank 20% of every gain into stablecoins.
- **Days 11-20 — Compound:** rotate into the weekly winners,
  reinvest the gains, and never let one position lose over 5%.
- **Days 21-30 — Finish:** lock half of everything in stables and
  let the rest ride the single best performer to the $300 target.
- **Risk rule — Stop:** if the portfolio is down 20% at any point,
  halt trading, sit in stables, and rescan from scratch.

## How to run it

```sh
node main.ts
```

The program validates the plan (1-280 Unicode code points), writes
it to `/output/entry.txt`, and prints the day-30 target summary.
