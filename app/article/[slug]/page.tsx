import { Container } from "@/components/ui/container";
import { MOCK_ARTICLES } from "@/lib/constants";
import NewsletterForm from "../_components/newsletter-form";
import RelatedArticle from "../_components/related-article-card";

import { Metadata } from "next";
import ArticleBody from "../_components/article-body";
import ArticleHero from "../_components/article-hero";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const articleData =
    MOCK_ARTICLES.find((article) => article.slug === slug) || MOCK_ARTICLES[0];

  if (!articleData) {
    return {
      title: "Article Not Found | The Herald",
    };
  }

  const title = `${articleData.title} | The Herald`;
  const description = articleData.description;
  const url = `${SITE_URL}/article/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "The Herald",
      type: "article",
      publishedTime: articleData.date,
      authors: [articleData.author.name],
      images: [
        {
          url: articleData.heroImage,
          width: 1200,
          height: 630,
          alt: articleData.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [articleData.heroImage],
      creator: "@theherald",
    },
    // Additional SEO tags
    category: articleData.category,
    other: {
      "article:published_time": articleData.date,
      "article:section": articleData.category,
      author: articleData.author.name,
    },
  };
}

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
      <ArticleHero articleData={articleData} />

      {/* Main Content */}
      <Container>
        <main className="px-4 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Article Body */}
            <ArticleBody articleData={articleData} />

            {/* Sidebar */}
            <aside className="w-full lg:w-95 space-y-12">
              {/* Related Articles */}
              <section aria-labelledby="related-title">
                <h3
                  id="related-title"
                  className="text-xl font-bold mb-6 text-article-main dark:text-white"
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
