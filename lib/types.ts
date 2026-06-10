export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string };

export interface Article {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  author: { name: string; avatar: string };
  date: string;
  readTime: string;
  heroImage: string;
  figureCaption: string;
  body: ContentBlock[];
  related: { title: string; date: string; image: string }[];
}
