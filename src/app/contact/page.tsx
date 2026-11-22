import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta con Andy Campos Escandón para conversar sobre ideas y colaborar en proyectos de desarrollo web y móvil.",
  openGraph: {
    title: "¿Qué podemos crear juntos? | Andy Campos Escandón",
    description: "Cuéntame qué quieres construir o en qué te gustaría colaborar.",
    images: [personalInfo.avatar],
  },
};

export default function ContactPage() {
  return (
    <div className="section-wrap inner-page contact-page">
      <div className="contact-layout">
        <div className="contact-presentation">
          <p className="eyebrow">CONTACTO</p>
          <h1 className="page-title">¿Qué podemos<br /><span>crear juntos?</span></h1>
          <p>Cuéntame qué quieres construir o en qué te gustaría colaborar.</p>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-github">
            <Image src="/icons/github.svg" alt="" width={30} height={30} className="brand-monochrome" />
            <span>Ver mi GitHub</span><ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </div>
        <ContactForm recipient={personalInfo.email} />
      </div>
    </div>
  );
}
