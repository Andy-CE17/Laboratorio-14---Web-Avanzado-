import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="home-hero" aria-labelledby="hero-title">
        <Image src="/images/mountain-lake.webp" alt="" fill priority sizes="100vw" className="hero-landscape" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="hero-greeting">Hola, soy</p>
          <h1 id="hero-title">Andy Campos<br />Escandón<span>.</span></h1>
          <h2>Desarrollo web Full Stack</h2>
          <p className="hero-description">Soy estudiante de Tecsup y construyo mi camino en el desarrollo web y móvil. Me gusta dar vida a las ideas, conectar interfaces con soluciones funcionales y convertir cada proyecto en una oportunidad para aprender y superar nuevos retos.</p>
          <div className="hero-actions">
            <Link href="/projects" className="button button-primary">Ver mis proyectos <ArrowRight size={19} /></Link>
            <Link href="/contact" className="button button-outline"><MessageCircle size={19} /> Contáctame</Link>
          </div>
        </div>
        <div className="hero-portrait">
          <Image src="/images/andy-cutout.webp" alt={personalInfo.name} fill priority sizes="(max-width: 700px) 90vw, 48vw" className="portrait-image" />
        </div>
        <div className="hero-bottom-fade" />
      </section>
    </>
  );
}
