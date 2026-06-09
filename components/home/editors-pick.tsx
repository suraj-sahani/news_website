import { Container } from "@/components/ui/container";
import { CardHeader } from "../ui/card";
import { StoryCard } from "./story-card";

const PICKS = [
  {
    title: "How Cities Are Rethinking the Skyline",
    category: "Urban",
    image: "/home/editors-picks/ep-1.jpg",
    slug: "rethinking-skyline",
    date: "June 10, 2026",
  },
  {
    title: "The Movement Reshaping Policy from the Streets",
    category: "Climate",
    image: "/home/editors-picks/ep-2.jpg",
    slug: "climate-movement",
    date: "June 09, 2026",
  },
  {
    title: "Breakthrough Lab Results Challenge Old Theories",
    category: "Science",
    image: "/home/editors-picks/ep-3.jpg",
    slug: "lab-breakthrough",
    date: "June 08, 2026",
  },
  {
    title: "New Telescope Captures the Deepest View Yet",
    category: "Space",
    image: "/home/editors-picks/ep-4.jpg",
    slug: "deep-space-view",
    date: "June 07, 2026",
  },
];

export function EditorsPicks() {
  return (
    <section className="py-12 bg-background">
      <Container>
        {/* Section Header */}
        <div className="flex items-center gap-4 justify-between mb-6">
          <h2 className="font-source text-2xl font-bold text-foreground md:text-3xl">
            Editor&apos;s Picks
          </h2>

          <hr className="flex-1" />
        </div>

        {/* Editor's Picks Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PICKS.map(({ category, image, slug, title }) => (
            <StoryCard
              key={slug}
              image={image}
              href={`/article/${slug}`}
              imageAlt={title}
              className="min-h-0"
            >
              <CardHeader className="px-4 py-0">
                {/* CATEGORY */}
                <span className="text-xs font-bold uppercase text-primary">
                  {category}
                </span>
                {/* TITLE */}
                <h3 className="font-source text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {title}
                </h3>
              </CardHeader>
            </StoryCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
