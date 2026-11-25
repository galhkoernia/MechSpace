"use client";

import { SidebarNav } from "@/components/layout/SidebarNav";
import { adminNav } from "@/lib/navigation";

export function AdminSidebar() {
  return <SidebarNav nav={adminNav} />;
}
