import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Article } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ArticleHeroProps = {
  articleData: Article;
};

export default function ArticleHero({ articleData }: ArticleHeroProps) {
  return (
    <section className="relative w-full bg-article-bg text-white pt-20 pb-24 overflow-hidden">
      {/* Red Gradient Glow */}
      <div
        className="absolute top-15 left-15 w-full h-full bg-glow-red opacity-50 mix-blend-screen"
        aria-hidden="true"
      />

      {/* Blue Gradient Glow */}
      <div
        className="absolute top-75 right-25 w-full h-full bg-glow-blue opacity-40 mix-blend-screen"
        aria-hidden="true"
      />

      <Container>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <Badge className="text-white">{articleData.category}</Badge>
            <h1 className="text-2xl md:text-5xl font-source font-medium leading-tight mb-6">
              {articleData.title}
            </h1>
            <p className="text-lg md:text-[22px] text-[#FFFFFFCC] font-light leading-relaxed mb-8">
              {articleData.description}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <Avatar className="size-10">
                <AvatarImage
                  src={articleData.author.avatar}
                  alt={articleData.author.name}
                />
                <AvatarFallback>EH</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-semibold">{articleData.author.name}</p>
                <p className="text-[#FFFFFFB2]">
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
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20">
              <Image
                src={articleData.heroImage}
                alt={articleData.title}
                fill
                className="object-cover"
                priority
                sizes="456px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
