import { Bookmark, BookOpen, GraduationCap, Info, LayoutDashboard, Library, PlusCircle } from "lucide-react";
import { categories } from "@/data/mock/categories";
import type { NavEntry } from "@/types";

export const studentNav: NavEntry[] = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard, exact: true },
  {
    label: "Materials",
    icon: BookOpen,
    children: [
      { label: "All Materials", href: "/materials" },
      ...categories.map((category) => ({ label: category.name, href: `/materials?category=${category.slug}` })),
    ],
  },
  { label: "Bookmarks", href: "/bookmarks", icon: Bookmark },
  { label: "About", href: "/about", icon: Info },
];

export const adminNav: NavEntry[] = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard, exact: true },
  { label: "Materials", href: "/admin/materials", icon: Library, exact: true },
  { label: "Add Material", href: "/admin/materials/new", icon: PlusCircle },
  { label: "Student View", href: "/", icon: GraduationCap },
];
