export type BudgetState = "under" | "near" | "over";

export function budgetState(spentCents: number, budgetCents: number): BudgetState {
  if (budgetCents <= 0) return spentCents > 0 ? "over" : "under";
  const ratio = spentCents / budgetCents;
  if (ratio > 1) return "over";
  if (ratio >= 0.8) return "near";
  return "under";
}