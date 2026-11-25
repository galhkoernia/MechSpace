import Link from "next/link";
import { Cog } from "lucide-react";

export function Brand() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="MechSpace home">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white">
        <Cog className="h-5 w-5" aria-hidden />
      </span>
      <span className="text-xl font-bold tracking-tight">MechSpace</span>
    </Link>
  );
}
