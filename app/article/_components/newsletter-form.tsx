"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function NewsletterForm() {
  return (
    <Card className="bg-zinc-50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 shadow-none rounded-xl overflow-hidden">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">
          Newsletter Signup
        </h3>
        <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
          Get the week&apos;s most important tech stories, curated by our
          editors, delivered to your inbox every Friday.
        </p>
        <form className="space-y-4">
          <Input
            type="email"
            placeholder="you@example.com"
            className="bg-white dark:bg-black border-zinc-200 dark:border-zinc-800 focus-visible:ring-rose-500"
          />
          <Button className="w-full">Subscribe</Button>
        </form>
      </CardContent>
    </Card>
  );
}
