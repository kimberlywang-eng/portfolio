export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'callout'; text: string }
  | { type: 'code'; code: string; language?: string };

export interface ProjectMeta {
  slug: string;
  title: string;
  category: 'Engineering' | 'Software' | 'Data' | 'Design';
  tags: string[];
  summary: string;
  date: string;
  image: string;
  status?: 'live' | 'coming-soon';
  links?: { label: string; href: string }[];
  content: ContentBlock[];
  embed?: 'model-viewer';
}

export interface BlogMeta {
  slug: string;
  title: string;
  dateLabel: string;
  sortDate: string;
  summary: string;
  image: string;
  content: ContentBlock[];
}
