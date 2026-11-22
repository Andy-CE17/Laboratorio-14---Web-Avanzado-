import Image from "next/image";
import { Code2, Film, ShieldCheck } from "lucide-react";

const icons: Record<string, string> = {
  React: "react", "Next.js": "nextjs", JavaScript: "javascript", TypeScript: "typescript",
  "Node.js": "nodejs", Express: "express", PostgreSQL: "postgresql", MongoDB: "mongodb",
  "Tailwind CSS": "tailwindcss", Supabase: "supabase", Git: "git", GitHub: "github",
  Docker: "docker", Vercel: "vercel", Flutter: "flutter", "Android Studio": "androidstudio",
  "Auth.js": "authjs", TMDB: "tmdb",
};

export default function TechnologyBadge({ name }: { name: string }) {
  const icon = icons[name];
  const Icon = name === "Auth.js" ? ShieldCheck : name === "TMDB" ? Film : Code2;
  const monochrome = ["express", "github", "vercel", "tmdb"].includes(icon);
  return (
    <span className="technology-badge">
      {icon ? <Image src={`/icons/${icon}.${name === "Auth.js" ? "png" : "svg"}`} alt="" width={19} height={19} className={monochrome ? "brand-monochrome" : undefined} /> : <Icon size={18} aria-hidden="true" />}
      <span>{name}</span>
    </span>
  );
}
