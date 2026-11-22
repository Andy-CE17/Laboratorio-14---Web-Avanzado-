"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, CodeXml, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Sobre mí" },
  { href: "/skills", label: "Habilidades" },
  { href: "/projects", label: "Proyectos" },
  { href: "/contact", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Portafolio, inicio">
        <CodeXml size={38} strokeWidth={2.5} aria-hidden="true" />
        <span>PORTAFOLIO</span>
      </Link>
      <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="main-navigation">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav id="main-navigation" className={open ? "navigation is-open" : "navigation"} aria-label="Navegación principal">
        {links.map(({ href, label }) => (
          <Link key={href} href={href} onClick={() => setOpen(false)} className={pathname === href ? "nav-link active" : "nav-link"} aria-current={pathname === href ? "page" : undefined}>{label}</Link>
        ))}
        {pathname !== "/contact" && (
          <Link href="/contact" className="button button-primary nav-cta" onClick={() => setOpen(false)}>Hablemos <ArrowUpRight size={17} /></Link>
        )}
      </nav>
    </header>
  );
}
