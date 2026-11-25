import { cn } from "@/lib/cn";

type CategoryFilterProps = { options: string[]; selected: string; onSelect: (option: string) => void };

export function CategoryFilter({ options, selected, onSelect }: CategoryFilterProps) {
  return (
    <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={option === selected}
          onClick={() => onSelect(option)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
            option === selected ? "border-brand-500 bg-brand-500 text-white" : "border-line bg-white text-muted hover:bg-brand-50",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
