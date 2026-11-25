import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

type ContinueLearningProps = { title: string; href: string };

export function ContinueLearning({ title, href }: ContinueLearningProps) {
  return (
    <section aria-labelledby="continue-heading" className="card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
          <BookOpen className="h-6 w-6" aria-hidden />
        </span>
        <div>
          <p id="continue-heading" className="text-sm font-semibold text-muted">Continue Learning</p>
          <h2 className="mt-1 text-xl font-bold sm:text-2xl">{title}</h2>
          <p className="mt-1 text-sm text-muted">Open a material and continue studying at your own pace.</p>
        </div>
      </div>
      <Link href={href} className="btn-primary shrink-0">
        Continue <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </section>
  );
}
