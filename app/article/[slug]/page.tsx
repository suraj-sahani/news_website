import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { MOCK_ARTICLES } from "@/lib/constants";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "../_components/newsletter-form";
import RelatedArticle from "../_components/related-article-card";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const articleData =
    MOCK_ARTICLES.find((article) => article.slug === slug) || MOCK_ARTICLES[0];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-[#0d0d1f] text-white pt-20 pb-24 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-rose-900/20 to-transparent blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/30 to-transparent blur-3xl opacity-50" />

        <Container>
          <div className="container mx-auto px-4 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <Badge className="text-white">{articleData.category}</Badge>
              <h1 className="text-2xl md:text-5xl font-source font-medium leading-tight mb-6">
                {articleData.title}
              </h1>
              <p className="text-lg md:text-[22px] text-zinc-300 font-light leading-relaxed mb-8">
                {articleData.description}
              </p>

              <div className="flex items-center gap-4 mb-8">
                <Avatar className="h-12 w-12 border border-white/20">
                  <AvatarImage src={articleData.author.avatar} />
                  <AvatarFallback>EH</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <p className="font-semibold">{articleData.author.name}</p>
                  <p className="text-zinc-400">
                    <time dateTime={articleData.date}>March 14, 2026</time> ·{" "}
                    {articleData.readTime}
                  </p>
                </div>
              </div>

              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-semibold hover:gap-2 transition-all duration-200 group text-primary"
              >
                Read More{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none lg:w-full">
              {/* This would be the AI Network Visualization Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20">
                <Image
                  src={articleData.heroImage}
                  alt={articleData.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Container>
        <main className="px-4 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Article Body */}
            <article className="flex-1 max-w-4xl">
              {/* Breadcrumbs */}
              <nav
                className="flex items-center gap-2 text-sm text-zinc-500 mb-8"
                aria-label="Breadcrumb"
              >
                <span>Home</span>
                <ChevronRight className="h-3 w-3" />
                <span className="text-zinc-900 dark:text-zinc-100 font-medium">
                  {articleData.category}
                </span>
              </nav>

              <figure className="mb-10 italic text-sm text-zinc-500 leading-relaxed">
                Photograph: Growtika / Unsplash — A neural network visualization
                inside a modern editorial workspace.
              </figure>

              <div className="space-y-4">
                {articleData.body.map((block, idx) => {
                  if (block.type === "paragraph") {
                    return (
                      <p
                        key={idx}
                        className="text-zinc-700 dark:text-zinc-300 text-[17px] leading-[1.8] font-normal"
                      >
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={idx}
                        className="text-2xl font-bold font-source text-zinc-900 dark:text-white"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "quote") {
                    return (
                      <blockquote key={idx}>
                        <p className="text-[22px] font-serif italic text-zinc-800 dark:text-[#FAFAFACC] leading-snug text-center max-w-2xl mx-auto">
                          &quot;{block.text}&quot;
                        </p>
                      </blockquote>
                    );
                  }
                  return null;
                })}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="w-full lg:w-95 space-y-12">
              {/* Related Articles */}
              <section aria-labelledby="related-title">
                <h3
                  id="related-title"
                  className="text-xl font-bold mb-6 text-zinc-900 dark:text-white"
                >
                  Related Articles
                </h3>
                <div className="bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm">
                  <div>
                    {articleData.related.map((article, index) => (
                      <RelatedArticle
                        key={article.title + index}
                        title={article.title}
                        date={article.date}
                        image={article.image}
                      />
                    ))}
                  </div>
                </div>
              </section>

              {/* Newsletter Signup */}
              <NewsletterForm />
            </aside>
          </div>
        </main>
      </Container>
    </>
  );
}
