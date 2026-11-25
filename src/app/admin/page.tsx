import Link from "next/link";
import { Layers, Library, Plus } from "lucide-react";
import { MaterialTable } from "@/components/admin/MaterialTable";
import { StatsCard } from "@/components/admin/StatsCard";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/data/mock/categories";
import { materials } from "@/data/mock/materials";

const RECENT_COUNT = 4;

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Good Morning, Admin"
        action={<Link href="/admin/materials/new" className="btn-primary"><Plus className="h-4 w-4" aria-hidden /> Add Material</Link>}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <StatsCard label="Total Materials" value={materials.length} icon={Library} />
        <StatsCard label="Total Categories" value={categories.length} icon={Layers} />
      </div>
      <section>
        <SectionHeading title="Recent Materials" />
        <MaterialTable materials={materials.slice(0, RECENT_COUNT)} />
      </section>
    </div>
  );
}
