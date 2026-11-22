import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'melacampos',
    title: 'MELACAMPOS',
    category: 'Catálogo y cotizaciones',
    summary: 'Catálogo de materiales y cotizaciones.',
    intro: 'Una plataforma para explorar materiales, conocer proyectos y solicitar cotizaciones.',
    features: ['Catálogo de materiales para explorar opciones de diseño.', 'Presentación de proyectos y espacios.', 'Flujo de solicitudes de cotización en desarrollo.'],
    description: 'Plataforma web en desarrollo con catálogo de materiales, proyectos y solicitudes de cotización. Integra una interfaz de consulta con servicios de backend y una base de datos.',
    image: '/projects/melacampos.webp',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    featured: true,
  },
  {
    slug: 'cinetica',
    title: 'CINÉTICA',
    category: 'Películas y series',
    summary: 'Explora películas y series con búsqueda y filtros.',
    intro: 'Explora películas y series con filtros, fichas de detalle y videos oficiales.',
    features: ['Búsqueda interactiva y filtros de películas y series.', 'Fichas con sinopsis, puntuación y reparto.', 'Reproducción integrada de videos oficiales disponibles.'],
    description: 'Galería de películas y series con búsqueda interactiva, filtros, fichas de detalle y reproducción de videos oficiales de TMDB. Desarrollé este proyecto para trabajar el renderizado en servidor y cliente.',
    image: '/projects/cinetica.webp',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'TMDB'],
    demoUrl: 'https://semana-09-galeria-cinetica.vercel.app/',
    githubUrl: 'https://github.com/Andy-CE17/Semana-09---Desarrollo-web-Avanzado-',
    featured: true,
  },
  {
    slug: 'umbral',
    title: 'UMBRAL',
    category: 'Autenticación y perfiles',
    summary: 'Registro, perfiles y acceso con Google o GitHub.',
    intro: 'Registro, inicio de sesión y perfil personal con acceso mediante Google o GitHub.',
    features: ['Registro e inicio de sesión con credenciales.', 'Acceso mediante Google y GitHub.', 'Panel de perfil y persistencia de datos en Supabase.'],
    description: 'Aplicación de autenticación con registro, inicio de sesión y un panel de perfil adaptable a móviles. Incluye acceso mediante credenciales, Google y GitHub, con persistencia en PostgreSQL de Supabase.',
    image: '/projects/umbral.webp',
    technologies: ['Next.js', 'TypeScript', 'Auth.js', 'PostgreSQL', 'Supabase'],
    demoUrl: 'https://umbral-lab13-andy.vercel.app/signIn',
    githubUrl: 'https://github.com/Andy-CE17/Laboratorio-13-web-avanzado-',
    featured: false,
  },
];

export const personalInfo = {
  name: 'Andy Campos Escandón',
  title: 'Estudiante de Desarrollo de Aplicaciones Web',
  description: 'Creo aplicaciones web con interfaces cuidadas, APIs y bases de datos. En este portafolio comparto mi aprendizaje y mis proyectos de desarrollo web.',
  github: 'https://github.com/Andy-CE17',
  email: 'andy.campos@tecsup.edu.pe',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000'),
  avatar: '/andy-campos.webp',
};
