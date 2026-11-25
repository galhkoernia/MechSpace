import { PageHeader } from "@/components/layout/PageHeader";
import { BookmarksContent } from "@/components/materials/BookmarksContent";

export default function BookmarksPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Bookmarks" description="Materials you've saved for later." />
      <BookmarksContent />
    </div>
  );
}
