import { Metadata } from "next";
import { projects, personalInfo } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Conoce MELACAMPOS, CINÉTICA y UMBRAL, proyectos de desarrollo web de Andy Campos Escandón.",
  openGraph: {
    title: `Proyectos de ${personalInfo.name}`,
    description: "Catálogo de materiales, cine y series, y autenticación: mis proyectos de desarrollo web.",
    images: [projects[0].image],
  },
};

export default function ProjectsPage() {
  return (
    <div className="section-wrap inner-page projects-page">
      <h1 className="page-title">Mis proyectos</h1>
      <div className="project-showcase">
        {projects.map((project, index) => <ProjectCard key={project.slug} project={project} prominent={index === 0} />)}
      </div>
    </div>
  );
}
