import { Container } from "@/components/ui/container";
import { Flame, Radio } from "lucide-react";
import { cn } from "@/lib/utils";

const NEWS_ITEMS = [
  "Senate passes landmark infrastructure bill in late-night vote",
  "Tech giant unveils next-gen wearable at keynote",
  "Wildfire containment reaches 80% in coastal region",
  "Central bank holds rates amid inflation watch",
];

export function LatestNews() {
  return (
    <section className="border-y border-border bg-muted/30 py-4 lg:py-3 overflow-hidden">
      <Container>
        {/* --- MOBILE VIEW: Trending Chips (Scrollable) --- */}
        <div className="lg:hidden">
          <div className="flex items-center gap-2 mb-4">
            <Radio className="size-4 text-primary fill-primary/10" />

            <h2 className="text-[10px] font-bold uppercase tracking-widest text-home-main">
              Latest
            </h2>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar -mx-4 px-4">
            {NEWS_ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-3 rounded-lg border border-border bg-card px-3 py-2"
              >
                <span className="text-sm font-bold text-primary">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-home-main whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- DESKTOP VIEW: Marquee Ticker --- */}
        <div className="hidden lg:flex items-center gap-4">
          {/* LATEST BADGE */}
          <div className="flex items-center gap-2 shrink-0 rounded-md bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-tighter text-white">
            <Radio size={14} />
            Latest
          </div>

          {/* TICKER TRACK */}
          <div className="relative flex overflow-hidden flex-1">
            <div className="flex animate-marquee whitespace-nowrap items-center">
              {NEWS_ITEMS.map((item, i) => (
                <div key={i} className="flex items-center">
                  <span className="text-sm font-medium text-foreground mx-6">
                    {item}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-primary/40 mx-2" />
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap items-center">
              {NEWS_ITEMS.map((item, i) => (
                <div key={i} className="flex items-center">
                  <span className="text-sm font-medium text-foreground mx-6">
                    {item}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-primary/40 mx-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
