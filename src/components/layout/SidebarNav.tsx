"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/cn";
import type { NavEntry } from "@/types";
import { Brand } from "./Brand";

const itemBase = "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors";
const itemIdle = "text-muted hover:bg-brand-50 hover:text-ink";
const itemActive = "bg-brand-50 font-semibold text-brand-600";

export function SidebarNav({ nav }: { nav: NavEntry[] }) {
  const pathname = usePathname();
  const activeCategory = useSearchParams().get("category");

  return (
    <div className="flex h-full flex-col gap-8 overflow-y-auto p-5">
      <Brand />
      <nav aria-label="Main" className="flex flex-col gap-1">
        {nav.map((entry) => {
          if ("children" in entry) {
            const Icon = entry.icon;
            return (
              <div key={entry.label} className="py-1">
                <p className={cn(itemBase, "font-semibold text-ink")}>
                  <Icon className="h-5 w-5" aria-hidden />
                  {entry.label}
                </p>
                <ul className="ml-5 mt-1 flex flex-col gap-0.5 border-l border-line pl-3">
                  {entry.children.map((child) => {
                    const [path, query] = child.href.split("?");
                    const slug = new URLSearchParams(query).get("category");
                    const active = pathname.startsWith(path) && activeCategory === slug;
                    return (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={active ? "page" : undefined}
                          className={cn("block rounded-lg px-3 py-2 text-sm transition-colors", active ? itemActive : itemIdle)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }
          const Icon = entry.icon;
          const active = entry.exact ? pathname === entry.href : pathname.startsWith(entry.href);
          return (
            <Link
              key={entry.href}
              href={entry.href}
              aria-current={active ? "page" : undefined}
              className={cn(itemBase, active ? itemActive : itemIdle)}
            >
              <Icon className="h-5 w-5" aria-hidden />
              {entry.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
