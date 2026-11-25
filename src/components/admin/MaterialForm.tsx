import Link from "next/link";
import { categories } from "@/data/mock/categories";
import { FileUploadArea } from "./FileUploadArea";

const fileTypes = ["PDF"];

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="text-sm font-semibold">{label}</label>
      {children}
    </div>
  );
}

/** Static form. Submission is intentionally disabled until the backend phase. */
export function MaterialForm() {
  return (
    <form className="card max-w-2xl space-y-5 p-6 sm:p-8" aria-label="Add new material">
      <Field label="Title" htmlFor="title"><input id="title" name="title" className="field" placeholder="e.g. Dasar Mesin Bubut" /></Field>
      <Field label="Description" htmlFor="description"><textarea id="description" name="description" rows={4} className="field" placeholder="Short description of the material" /></Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Category" htmlFor="category">
          <select id="category" name="category" className="field" defaultValue="">
            <option value="" disabled>Select category</option>
            {categories.map((category) => <option key={category.slug}>{category.name}</option>)}
          </select>
        </Field>
        <Field label="File Type" htmlFor="type">
          <select id="type" name="type" className="field" defaultValue="">
            <option value="" disabled>Select type</option>
            {fileTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
        </Field>
      </div>
      <FileUploadArea />
      <div className="flex justify-end gap-3">
        <Link href="/admin/materials" className="btn-secondary">Cancel</Link>
        <button type="button" disabled className="btn-primary">Upload Material</button>
      </div>
    </form>
  );
}
