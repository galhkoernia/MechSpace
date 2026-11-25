import { Ruler, CarFront, ShieldCheck } from "lucide-react";
import type { Category } from "@/types";

export const categories: Category[] = [
  {
    slug: "alat-ukur",
    name: "Alat Ukur",
    description: "Jangka sorong, mikrometer, dan alat ukur dasar.",
    icon: Ruler,
    tint: "bg-indigo-100 text-indigo-600",
  },
  {
    slug: "teknik-otomotif",
    name: "Teknik Otomotif",
    description: "Dasar pemeriksaan dan perawatan komponen otomotif.",
    icon: CarFront,
    tint: "bg-sky-100 text-sky-600",
  },
  {
    slug: "k3",
    name: "K3",
    description: "Keselamatan dan kesehatan kerja di bengkel.",
    icon: ShieldCheck,
    tint: "bg-rose-100 text-rose-600",
  },
];