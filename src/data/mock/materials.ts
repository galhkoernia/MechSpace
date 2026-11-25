import type { Material } from "@/types";

export const materials: Material[] = [
  {
    id: "jangka-sorong",
    title: "Jangka Sorong",
    description: "Materi alat ukur presisi jangka sorong untuk pembelajaran teknik otomotif.",
    category: "Teknik Pemesinan",
    fileType: "PDF",
    fileUrl: "/material/alat_ukur_jangka_sorong.pdf",
    updatedAt: "25 Nov 2026",
  },
  {
    id: "mikrometer-sekrup",
    title: "Mikrometer Sekrup",
    description: "Materi alat ukur presisi mikrometer sekrup untuk pembelajaran teknik otomotif.",
    category: "Teknik Pemesinan",
    fileType: "PDF",
    fileUrl: "/material/alat_ukur_mikrometer_sekrup.pdf",
    updatedAt: "25 Nov 2026",
  },
  {
    id: "jangka-sorong-mikrometer",
    title: "Jangka Sorong dan Mikrometer Sekrup",
    description: "Materi alat ukur presisi untuk siswa SMK Teknik Otomotif.",
    category: "Teknik Pemesinan",
    fileType: "PDF",
    fileUrl: "/material/jangka-sorong-mikrometer.pdf",
    updatedAt: "15 Nov 2026",
  },
];

export function getMaterialById(id: string): Material | undefined {
  return materials.find((material) => material.id === id);
}
