import { Search } from "lucide-react";
import { cn } from "@/lib/cn";

type SearchBarProps = {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
};

/** Controlled when `value` is passed; otherwise a static placeholder field. */
export function SearchBar({ placeholder = "Search materials...", className, value, onChange, name }: SearchBarProps) {
  return (
    <label className={cn("relative block", className)}>
      <span className="sr-only">Search materials</span>
      <input
        type="search"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange ? (event) => onChange(event.target.value) : undefined}
        className="field h-11 pr-10"
      />
      <Search className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden />
    </label>
  );
}
