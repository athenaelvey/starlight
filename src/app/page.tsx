import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <main className="mx-auto max-w-md space-y-6 p-8">
      <h1 className="text-2xl font-semibold">Starlight</h1>
      <Progress value={60} />
      <div className="flex gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </main>
  );
}