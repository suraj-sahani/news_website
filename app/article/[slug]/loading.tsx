import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function ArticleLoading() {
  return (
    <>
      {/* 2. HERO SECTION SKELETON (Using your design tokens) */}
      <section className="relative bg-article-bg bg-hero-glow pt-20 pb-24 overflow-hidden">
        <Container className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <Skeleton className="h-6 w-20 bg-pink-500/20" /> {/* Tag */}
            <div className="space-y-3">
              <Skeleton className="h-12 w-full" /> {/* Title Line 1 */}
              <Skeleton className="h-12 w-3/4" /> {/* Title Line 2 */}
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full opacity-50" />
              <Skeleton className="h-4 w-full opacity-50" />
              <Skeleton className="h-4 w-2/3 opacity-50" />
            </div>
            <div className="flex items-center gap-3 pt-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-3 w-32" />
              </div>
            </div>
          </div>
          {/* Main Hero Image Placeholder */}
          <Skeleton className="aspect-video lg:aspect-square w-full rounded-2xl bg-zinc-800/50" />
        </Container>
      </section>

      {/* 3. MAIN CONTENT AREA */}
      <Container className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT COLUMN: ARTICLE BODY */}
        <main className="lg:col-span-8 space-y-8 px-4 lg:px-8 py-16 lg:py-24">
          <Skeleton className="h-4 w-32" /> {/* Breadcrumbs */}
          <Skeleton className="h-3 w-full" /> {/* Caption */}
          <div className="space-y-4 pt-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton
                key={i}
                className={`h-4 ${i % 3 === 0 ? "w-2/3" : "w-full"}`}
              />
            ))}
          </div>
          {/* Blockquote Skeleton */}
          <div className="border-l-4 border-zinc-200 pl-6 py-2 italic">
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-4/5" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-8 w-1/2 mt-8" /> {/* Subheading */}
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-4 w-full" />
            ))}
          </div>
        </main>

        {/* RIGHT COLUMN: SIDEBAR */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Related Articles Box */}
          <div className="border rounded-xl p-6 space-y-6">
            <Skeleton className="h-6 w-32 mb-4" />
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4">
                <Skeleton className="h-16 w-16 shrink-0 rounded-md" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-3 w-20" />
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Box */}
          <div className="bg-zinc-50 dark:bg-zinc-900 border rounded-xl p-8 text-center space-y-4">
            <Skeleton className="h-6 w-3/4 mx-auto" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-10 w-full rounded-lg" />
            <Skeleton className="h-10 w-full rounded-lg bg-pink-500/20" />
          </div>
        </aside>
      </Container>

      {/* 4. FOOTER SKELETON */}
      <footer className="border-t py-16 bg-zinc-50 dark:bg-zinc-950">
        <Container className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-3 w-20" />
            </div>
          ))}
        </Container>
      </footer>
    </>
  );
}
