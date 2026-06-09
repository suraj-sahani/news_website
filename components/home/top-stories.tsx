import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { StoryCard } from "./story-card";
import { CardContent, CardFooter, CardHeader } from "../ui/card";

const CATEGORIES = ["Top Stories", "Politics", "Science", "Health", "Tech"];

const STORIES = [
  {
    title: "The Quiet Revolution Inside AI Chip Foundries",
    category: "Tech",
    description:
      "A new generation of semiconductors promises to reshape how data centers consume power across the globe.",
    author: "Daniel Cho",
    date: "April 11, 2026",
    image: "/home/top-stories/story-1.jpg",
    slug: "ai-chip-foundries",
  },
  {
    title: "Markets Rally as Central Banks Signal Rate Pause",
    category: "Business",
    description:
      "Investors cheered fresh inflation data, sending major indices to record highs in early trading.",
    author: "Priya Nair",
    date: "April 10, 2026",
    image: "/home/top-stories/story-2.jpg",
    slug: "market-rally",
  },
  {
    title: "Inside the Year's Most Talked-About Retrospective",
    category: "Culture",
    description:
      "A sprawling new exhibition reframes a forgotten movement for a contemporary audience.",
    author: "Elena Marsh",
    date: "April 12, 2026",
    image: "/home/top-stories/story-3.jpg",
    slug: "art-retrospective",
  },
];

export default function TopStories() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <Container>
        {/* HEADER SECTION */}
        <div className="mb-2 md:mb-6">
          <div className="flex items-end justify-between">
            <h2 className="hidden md:block text-2xl font-bold font-source text-foreground">
              Top Stories
            </h2>
            <Link
              href="#"
              className="hidden text-sm font-medium text-muted-foreground hover:text-primary md:block"
            >
              View all
            </Link>
          </div>

          {/* MOBILE CATEGORY CHIPS (Seen in your 3rd image) */}
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar -mx-4 px-4 md:hidden">
            {CATEGORIES.map((cat, i) => (
              <Button
                key={cat}
                variant={i === 0 ? "default" : "outline"}
                className={`rounded-lg h-9 px-4 text-xs font-bold whitespace-nowrap ${
                  i === 0 ? "bg-primary text-white" : "border-border"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STORIES.map(
            ({ slug, image, title, category, description, author, date }) => (
              <StoryCard
                key={slug}
                href={`/article/${slug}`}
                image={image}
                imageAlt={title}
              >
                <CardHeader className="space-y-2 px-4 py-0">
                  {/* CATEGORY */}
                  <span className="text-sm font-bold uppercase text-primary">
                    {category}
                  </span>
                  {/* TITLE */}
                  <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                </CardHeader>

                {description ? (
                  <CardContent className="px-4 pt-0 pb-0 md:pb-4">
                    <p className="text-sm text-muted-foreground">
                      {description}
                    </p>
                  </CardContent>
                ) : null}

                {/* FOOTER - Author & Date (Visible on Mobile view) */}
                <CardFooter className="md:hidden px-4 pt-0 border-none bg-transparent flex items-center gap-2 text-xs font-medium text-muted-foreground/80">
                  {author && <span>By {author}</span>}
                  {author && <span className="opacity-50">•</span>}
                  <time dateTime={date}>{date}</time>
                </CardFooter>
              </StoryCard>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
