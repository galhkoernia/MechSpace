import { SearchBar } from "@/components/ui/SearchBar";

type HeaderProps = { title: string; subtitle: string };

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
        <p className="mt-1 text-muted">{subtitle}</p>
      </div>
      <form action="/materials" method="get" className="max-w-xl">
        <SearchBar name="q" placeholder="Search materials..." />
      </form>
    </header>
  );
}
