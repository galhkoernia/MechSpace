import type { LucideIcon } from "lucide-react";

type StatsCardProps = { label: string; value: number; icon: LucideIcon };

export function StatsCard({ label, value, icon: Icon }: StatsCardProps) {
  return (
    <div className="card flex items-center gap-4 p-5">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
        <Icon className="h-6 w-6" aria-hidden />
      </span>
      <div>
        <p className="text-sm text-muted">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}
