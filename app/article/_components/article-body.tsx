import { Article } from "@/lib/types";
import { ChevronRight } from "lucide-react";

type ArticleBodyProps = {
  articleData: Article;
};
export default function ArticleBody({ articleData }: ArticleBodyProps) {
  return (
    <article className="flex-1 max-w-4xl">
      {/* Breadcrumbs */}
      <nav
        className="flex items-center gap-2 text-sm text-article-muted mb-8"
        aria-label="Breadcrumb"
      >
        <span>Home</span>
        <ChevronRight className="h-3 w-3" />
        <span className="text-article-main dark:text-zinc-100 font-medium">
          {articleData.category}
        </span>
      </nav>

      <figure className="mb-10 italic text-sm text-[#737373]">
        Photograph: Growtika / Unsplash — A neural network visualization inside
        a modern editorial workspace.
      </figure>

      <div className="space-y-4">
        {articleData.body.map((block, idx) => {
          if (block.type === "paragraph") {
            return (
              <p
                key={idx}
                className="text-article-main text-[17px] leading-[1.8] font-normal"
              >
                {block.text}
              </p>
            );
          }
          if (block.type === "heading") {
            return (
              <h2
                key={idx}
                className="text-2xl font-bold font-source text-article-main"
              >
                {block.text}
              </h2>
            );
          }
          if (block.type === "quote") {
            return (
              <blockquote key={idx}>
                <p className="text-[22px] font-serif italic text-article-muted leading-snug text-center max-w-2xl mx-auto">
                  &quot;{block.text}&quot;
                </p>
              </blockquote>
            );
          }
          return null;
        })}
      </div>
    </article>
  );
}
