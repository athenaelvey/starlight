import { cn } from "@/lib/utils";
import { budgetState } from "@/lib/budget";
import { formatCents } from "@/lib/money";

type Props = { label: string; spentCents: number; budgetCents: number };

const fill = {
  under: "bg-progress-low",
  near: "bg-progress-mid",
  over: "bg-progress-over stripes",
} as const;

export function BudgetProgress({ label, spentCents, budgetCents }: Props) {
  const state = budgetState(spentCents, budgetCents);
  const percent = budgetCents > 0 ? Math.min(100, (spentCents / budgetCents) * 100) : 100;

  return (
    <div className="space-y-1.5">
      <div className="flex items-baseline justify-between text-sm">
        <span>{label}</span>
        <span className="text-muted-foreground">
          {formatCents(spentCents)} of {formatCents(budgetCents)}
        </span>
      </div>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={budgetCents}
        aria-valuenow={Math.min(spentCents, budgetCents)}
        className="h-2.5 overflow-hidden rounded-full bg-muted"
      >
        <div
          className={cn("h-full rounded-full transition-all", fill[state])}
          style={{ width: `${percent}%` }}
        />
      </div>
      {state === "over" && (
        <p className="text-xs text-rose">Over by {formatCents(spentCents - budgetCents)}</p>
      )}
    </div>
  );
}