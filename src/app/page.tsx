import { BudgetProgress } from "@/components/budget-progress";

export default function Home() {
  return (
    <main className="mx-auto max-w-md space-y-6 p-8">
      <h1 className="text-2xl font-semibold">Starlight</h1>
      <BudgetProgress label="Groceries" spentCents={12000} budgetCents={40000} />
      <BudgetProgress label="Dining" spentCents={34000} budgetCents={40000} />
      <BudgetProgress label="Shopping" spentCents={52000} budgetCents={40000} />
    </main>
  );
}