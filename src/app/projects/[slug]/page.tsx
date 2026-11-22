import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import TechnologyBadge from "@/components/TechnologyBadge";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Proyecto no encontrado" };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="section-wrap inner-page detail-hero-page">
      <Link href="/projects" className="button button-primary detail-return"><ArrowLeft size={18} aria-hidden="true" /> Volver a proyectos</Link>
      <article className="project-feature">
        <div className="project-feature-copy">
          <span className="detail-status"><span aria-hidden="true" />{project.demoUrl ? "Publicado" : "En desarrollo"}</span>
          <h1>{project.title}</h1>
          <p className="project-feature-description">{project.intro}</p>
          <div className="project-feature-actions">
            {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="button button-primary">Abrir aplicación <ArrowUpRight size={18} aria-hidden="true" /></a>}
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="button button-outline"><Image src="/icons/github.svg" alt="" width={20} height={20} className="brand-monochrome" /> Ver código <ArrowUpRight size={17} aria-hidden="true" /></a>}
            {!project.demoUrl && !project.githubUrl && <p className="project-link-note">Los enlaces públicos estarán disponibles cuando publique el proyecto.</p>}
          </div>
          <div className="project-feature-technologies" aria-label="Tecnologías utilizadas">
            {project.technologies.map(tech => <TechnologyBadge key={tech} name={tech} />)}
          </div>
        </div>
        <div className="project-feature-preview">
          <Image src={project.image} alt={`Vista previa de ${project.title}`} fill priority sizes="(max-width: 850px) 90vw, 55vw" />
        </div>
      </article>
    </div>
  );
}
