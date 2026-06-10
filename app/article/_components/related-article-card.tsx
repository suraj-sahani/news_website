import Image from "next/image";

export default function RelatedArticle({
  title,
  date,
  image,
}: {
  title: string;
  date: string;
  image: string;
}) {
  return (
    <div className="flex gap-4 items-start p-4  border-b last:border-0 border-zinc-200 dark:border-zinc-800">
      <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-md">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>
      <div className="flex flex-col">
        <h4 className="text-sm font-semibold leading-tight text-zinc-900 dark:text-zinc-100 hover:underline cursor-pointer line-clamp-2">
          {title}
        </h4>
        <time className="text-xs text-zinc-500 mt-1">{date}</time>
      </div>
    </div>
  );
}
