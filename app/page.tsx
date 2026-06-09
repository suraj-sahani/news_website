import { EditorsPicks } from "@/components/home/editors-pick";
import HeroSection from "@/components/home/hero";
import { LatestNews } from "@/components/home/latest-news";
import TopStories from "@/components/home/top-stories";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TopStories />
      <LatestNews />
      <EditorsPicks />
    </>
  );
}
