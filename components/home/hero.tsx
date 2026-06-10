import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden py-0 lg:py-20 bg-[#F7F7F8] dark:bg-[#17181C]">
      {/*
        Mobile Background Image
        Only visible on mobile/tablet. Absolute positioning to fill the hero area.
      */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <Image
          src="/home/hero-section/hero-image.jpg"
          alt="Global leaders forum background"
          fill
          priority
          className="object-cover"
          sizes="768px"
        />
        {/* Dark overlay for text readability on mobile background */}
        <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent" />
      </div>

      <Container className="relative z-10">
        <article className="grid min-h-105 grid-cols-1 items-end pb-12 lg:min-h-0 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-0">
          {/* CONTENT COLUMN */}
          <div className="flex flex-col items-start space-y-5 md:space-y-6">
            {/* Tag/Category */}
            <Badge
              variant="default"
              className="rounded-md text-white font-bold uppercase"
            >
              World
            </Badge>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl font-bold leading-tight text-home-main  md:text-5xl">
              Global Leaders Convene as Climate Deadline Looms
            </h1>

            {/* Subheader */}
            <p className="hidden lg:block text-md leading-relaxed text-home-muted">
              Delegates from over 190 nations gathered this week to negotiate
              sweeping emissions targets, as scientists warn the window to avert
              irreversible damage is rapidly closing.
            </p>

            {/* Author Attribution */}
            <div className="flex items-center gap-3">
              {/* Avatar hidden on mobile to match the specific "Voices in the Square" image style */}
              <Avatar className="hidden lg:flex size-10 border border-border">
                <AvatarImage
                  src="/home/hero-section/hero-avatar.jpg"
                  alt="Eleanor Hayes"
                />
                <AvatarFallback>EH</AvatarFallback>
              </Avatar>

              <div className="flex flex-col text-sm lg:gap-0 gap-1">
                {/* Text is white on mobile overlay, theme-aware on desktop */}
                <span className="font-bold text-white lg:text-foreground">
                  By Eleanor Hayes
                </span>
                <time dateTime="2025-06-12" className="text-home-muted">
                  June 12, 2025
                </time>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/article/climate-deadline"
              className="group hidden lg:flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:opacity-80"
            >
              Read More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/*
            Desktop Image Column
            This follows the original layout but is hidden on mobile
            since the image becomes the background.
          */}
          <div className="hidden lg:block relative aspect-4/3 w-full lg:aspect-square">
            <figure className="h-full w-full">
              <Image
                src="/home/hero-section/hero-image.jpg"
                alt="Global leaders sitting in a circular forum"
                fill
                priority
                className="rounded-lg object-cover shadow-2xl"
                sizes="564px"
              />
              <figcaption className="sr-only">
                World leaders at the climate summit forum.
              </figcaption>
            </figure>
          </div>
        </article>
      </Container>
    </section>
  );
}
