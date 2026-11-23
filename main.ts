import { mkdirSync, writeFileSync } from "node:fs";

const PLAN =
  "Day 1: spend $100 on a $12 domain + $88 AI tools. Sell $49 landing-page audits to small businesses. Days 2-7: DM 50 owners/day. Days 8-30: deliver 2/day, reinvest 100% profit into outreach + $5/day ads. Targets: $500 by day 14, $1,500 by day 30. Zero sales by day 10: price $29.";

// The bounty caps the plan at 280 characters; count Unicode code points
// (not UTF-16 code units) so astral characters count as one each.
const length = [...PLAN].length;
if (length < 1 || length > 280) {
  throw new Error(`Plan must be 1-280 code points, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLAN, "utf8");
