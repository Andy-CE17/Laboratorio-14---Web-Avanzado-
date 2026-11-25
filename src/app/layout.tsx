import type { Metadata } from "next";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/inter/latin-800.css";
import "@fontsource/barlow-condensed/latin-800-italic.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: `${personalInfo.name} - ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.description,
  keywords: ["desarrollador web", "full stack", "next.js", "react", "typescript", "portafolio"],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: personalInfo.siteUrl,
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.description,
    siteName: personalInfo.name,
    images: [{
      url: personalInfo.avatar,
      alt: `${personalInfo.name} - Portafolio`,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.description,
    images: [personalInfo.avatar],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <div className="portfolio-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
