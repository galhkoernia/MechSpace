import type { Material } from "@/types";
import { MaterialCard } from "./MaterialCard";

export function MaterialGrid({ materials }: { materials: Material[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {materials.map((material) => (
        <MaterialCard key={material.id} material={material} />
      ))}
    </div>
  );
}
