import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AppShell } from "@/components/layout/AppShell";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AppShell sidebar={<AdminSidebar />}>{children}</AppShell>;
}
