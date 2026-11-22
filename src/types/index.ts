export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  intro: string;
  features: string[];
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Metadata {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  ogImage?: string;
}
