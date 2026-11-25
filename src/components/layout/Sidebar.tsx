"use client";

import { studentNav } from "@/lib/navigation";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  return <SidebarNav nav={studentNav} />;
}
