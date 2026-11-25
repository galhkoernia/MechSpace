import type { LucideIcon } from "lucide-react";

export type FileType = "PDF";

export type Material = {
  id: string;
  title: string;
  description: string;
  category: string;
  fileType: FileType;
  fileUrl: string;
  updatedAt: string;
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  /** Tailwind classes for the icon tile. */
  tint: string;
};

export type NavLink = { label: string; href: string; icon: LucideIcon; exact?: boolean };
export type NavGroup = { label: string; icon: LucideIcon; children: { label: string; href: string }[] };
export type NavEntry = NavLink | NavGroup;
