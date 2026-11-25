import { PageHeader } from "@/components/layout/PageHeader";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="About MechSpace" description="Digital Learning Space for Mechanical Engineering Education." />
      <section className="card max-w-2xl p-6 sm:p-8">
        <p className="text-lg leading-relaxed">
          MechSpace menyediakan ruang digital sederhana bagi siswa Pendidikan Teknik Mesin dan SMK Teknik Mesin dan Otomotif untuk menemukan, membuka, dan membaca materi pembelajaran secara terstruktur.
        </p>
      </section>
    </div>
  );
}
