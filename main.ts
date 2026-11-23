import { mkdirSync, writeFileSync } from "node:fs";

type Phase = { day: string; action: string; target: string };

const DAYS: Phase[] = [
  { day: "Days 1-3", action: "scan 50 micro-caps, pick 3 rising coins", target: "shortlist ready" },
  { day: "Days 4-10", action: "split $100 40/30/30, bank 20% gains in stables", target: "reach $140" },
  { day: "Days 11-20", action: "rotate winners, compound weekly, cap loss at 5%", target: "reach $220" },
  { day: "Days 21-30", action: "lock half in stables, ride the winner", target: "finish at $300" },
  { day: "Risk rule", action: "down 20%, halt, hold stables", target: "capital protected" },
];

function validate(text: string): void {
  const points = [...text].length;
  if (points < 1 || points > 280) {
    throw new Error(`Plan must be 1-280 code points, got ${points}`);
  }
}

function buildPlan(): string {
  return DAYS.map((p) => `${p.day}: ${p.action}.`).join(" ");
}

function summary(): string {
  const last = DAYS[DAYS.length - 2];
  return `Day-30 target: ${last.target}.`;
}

const plan = buildPlan();
validate(plan);
console.log(summary());

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", plan, "utf8");
