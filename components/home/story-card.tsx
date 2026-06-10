import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface StoryProps {
  href: string;
  image: string;
  imageAlt: string;
  className?: string;
  children?: ReactNode;
}

export function StoryCard({
  href,
  imageAlt,
  children,
  image,
  className,
}: StoryProps) {
  return (
    <article className={cn("min-h-105 h-full", className)}>
      <Link href={href} className="group block h-full">
        <Card className="h-full rounded-md overflow-hidden border-border bg-card transition-all hover:shadow-md pt-0">
          {/* IMAGE SECTION */}
          <div className="relative aspect-video h-52.5 w-full overflow-hidden shrink-0">
            <Image
              src={image}
              alt={imageAlt}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
            />
          </div>

          {children}
        </Card>
      </Link>
    </article>
  );
}
