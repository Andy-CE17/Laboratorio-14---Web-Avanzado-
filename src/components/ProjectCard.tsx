import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import TechnologyBadge from "@/components/TechnologyBadge";

interface ProjectCardProps { project: Project; prominent?: boolean; }

export default function ProjectCard({ project, prominent = false }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className={prominent ? "project-card project-card-prominent" : "project-card"}>
      <div className="project-cover">
        <Image src={project.image} alt={project.title} fill loading="lazy" sizes={prominent ? "(max-width: 1100px) 90vw, 43vw" : "(max-width: 650px) 90vw, (max-width: 1100px) 44vw, 25vw"} />
        <span className="project-status">{project.demoUrl ? "Publicado" : "En desarrollo"}</span>
      </div>
      <div className="project-copy">
        <div className="project-title"><h2>{project.title}</h2></div>
        <p>{project.summary}</p>
        <div className="tag-list">{project.technologies.map(tech => <TechnologyBadge key={tech} name={tech} />)}</div>
        <div className="project-card-footer"><span className="button button-primary">Explorar proyecto <ArrowUpRight size={18} aria-hidden="true" /></span></div>
      </div>
    </Link>
  );
}
