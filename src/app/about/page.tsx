import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: "Soy Andy Campos Escandón, estudiante de Diseño y Desarrollo de Software en Tecsup. Conoce mi formación y mi enfoque para crear aplicaciones web y móviles.",
};

export default function AboutPage() {
  return (
    <div className="section-wrap inner-page about-focused">
      <div className="about-grid">
        <figure className="about-portrait">
          <Image src={personalInfo.avatar} alt={personalInfo.name} fill priority sizes="(max-width: 600px) 85vw, (max-width: 1150px) 35vw, 450px" />
        </figure>
        <div className="about-copy">
          <p className="eyebrow">SOBRE MÍ</p>
          <h1 className="page-title">{personalInfo.name}</h1>
          <p className="about-role">Estudiante de Diseño y Desarrollo de Software en Tecsup</p>
          <p className="about-description">Me gusta resolver la lógica de una aplicación y cuidar los detalles de su interfaz. Desarrollo proyectos web y móviles que sean fáciles de usar.</p>
          <div className="about-principles">
            <span><Check size={22} aria-hidden="true" /> Interfaces adaptables</span>
            <span><Check size={22} aria-hidden="true" /> Control de versiones con Git</span>
            <span><Check size={22} aria-hidden="true" /> Validación antes de publicar</span>
          </div>
          <Link href="/projects" className="button button-primary">Ver mis proyectos <ArrowUpRight size={18} /></Link>
        </div>
      </div>
    </div>
  );
}
