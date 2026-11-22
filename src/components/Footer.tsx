import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.</p>
      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"><Image src="/icons/github.svg" alt="" width={16} height={16} className="brand-monochrome" /> Mi GitHub <ArrowUpRight size={14} /></a>
    </footer>
  );
}
