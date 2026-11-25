import Link from "next/link";
import { Plus } from "lucide-react";
import { MaterialTable } from "@/components/admin/MaterialTable";
import { PageHeader } from "@/components/layout/PageHeader";
import { materials } from "@/data/mock/materials";

export default function AdminMaterialsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Materials"
        action={<Link href="/admin/materials/new" className="btn-primary"><Plus className="h-4 w-4" aria-hidden /> Add Material</Link>}
      />
      <MaterialTable materials={materials} showActions />
    </div>
  );
}
