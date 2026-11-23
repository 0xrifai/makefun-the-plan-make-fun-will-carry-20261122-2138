import { mkdirSync, writeFileSync } from "node:fs";

const PLAN =
  "Day 1: $60 API credits, $15 domain, $25 ads. Build 3 paid tools (PDF merge, invoice maker, resume checker) at $9/mo. Days 4-7: post 2 demos daily on X and Reddit. Week 2-4: add 1 feature/week, reinvest revenue in $5/day ads, kill tools under $20/mo by day 14, back the winner.";

// The plan must fit the 1-280 code point limit.
if ([...PLAN].length < 1 || [...PLAN].length > 280) {
  throw new Error(`PLAN must be 1-280 code points, got ${[...PLAN].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLAN, "utf8");
