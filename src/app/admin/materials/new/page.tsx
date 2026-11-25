import { MaterialForm } from "@/components/admin/MaterialForm";
import { PageHeader } from "@/components/layout/PageHeader";

export default function NewMaterialPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Add New Material" />
      <MaterialForm />
    </div>
  );
}
