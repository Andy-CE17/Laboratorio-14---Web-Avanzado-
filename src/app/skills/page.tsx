import type { Metadata } from "next";
import Image from "next/image";
import TechnologyBadge from "@/components/TechnologyBadge";

export const metadata: Metadata = {
  title: "Habilidades",
  description: "Las tecnologías que utiliza Andy Campos Escandón para el desarrollo web y móvil: React, Next.js, Node.js, bases de datos, Flutter y Android Studio.",
};

const skillGroups = [
  { title: "Interfaces web", icon: "interfaces", skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"] },
  { title: "Backend y bases de datos", icon: "backend", skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Supabase"] },
  { title: "Desarrollo móvil", icon: "mobile", skills: ["Flutter", "Android Studio"] },
  { title: "Herramientas y despliegue", icon: "deployment", skills: ["Git", "GitHub", "Docker", "Vercel"] },
];

export default function SkillsPage() {
  return (
    <div className="section-wrap inner-page skills-page">
      <h1 className="page-title">Mi stack de desarrollo</h1>
      <p className="page-intro">Tecnologías que uso para crear aplicaciones web y móviles.</p>
      <div className="skill-groups">
        {skillGroups.map(group => (
          <article className="skill-group" key={group.title}>
            <div className="skill-group-heading">
              <span className="skill-group-icon"><Image src={`/icons/categories/${group.icon}.png`} alt="" width={64} height={64} /></span>
              <h2>{group.title}</h2>
            </div>
            <div className="skill-logos">{group.skills.map(name => <TechnologyBadge key={name} name={name} />)}</div>
          </article>
        ))}
      </div>
      <p className="icon-credit">Iconos de categorías: <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Icons8</a></p>
    </div>
  );
}
