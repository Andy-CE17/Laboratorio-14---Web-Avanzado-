# Portafolio de Andy Campos Escandón

Portafolio personal para el laboratorio 14 de Desarrollo de Aplicaciones Web Avanzado en Tecsup. Desarrollado con Next.js App Router, TypeScript y Tailwind CSS.

## Contenido

- Inicio con presentación personal.
- Sobre mí y formación en Diseño y Desarrollo de Software.
- Habilidades de desarrollo web y móvil.
- Proyectos MELACAMPOS, CINÉTICA y UMBRAL, con fichas individuales.
- Contacto con validación de campos y preparación de un correo dirigido a Andy.
- Metadatos por página, Open Graph, sitemap y robots.txt.

El formulario utiliza `mailto:`: abre el cliente de correo del visitante para que confirme el envío. No envía mensajes desde un servidor ni requiere contraseñas de correo.

## Desarrollo local

```sh
pnpm install
pnpm dev
```

Abrir http://localhost:3000.

## Validación

```sh
pnpm lint
pnpm build
pnpm start
```

## Despliegue y SEO

El despliegue se realiza en Vercel. La variable pública opcional `NEXT_PUBLIC_SITE_URL` define el dominio definitivo para los metadatos, el sitemap y robots.txt. Si no está configurada, se usa el dominio de producción proporcionado por Vercel; en local se usa http://localhost:3000.

Los archivos de entorno, credenciales, dependencias y resultados de compilación están excluidos de Git.

## Recursos gráficos

Los logotipos de tecnologías proceden de Devicon, Simple Icons y Auth.js. Los iconos de categorías son de Icons8, con atribución visible en Habilidades. Las fuentes y créditos se encuentran en `public/icons/credits.txt`. La foto fue proporcionada por Andy; el recorte y el paisaje se prepararon para este portafolio, con detalles en `public/images/credits.txt`.

## Laboratorio 15 CloudFormation y Docker

El proyecto también incluye una plantilla actualizada de AWS CloudFormation en `infrastructure/ec2-docker.yaml`. La infraestructura crea:

- Una instancia EC2 con Amazon Linux 2023.
- Un grupo de seguridad con HTTP público y SSH opcional restringido.
- Docker instalado automáticamente mediante `UserData`.
- Una aplicación Nginx o este portafolio de Next.js dentro de un contenedor.

La plantilla solicita una VPC y una subred pública existentes. El parámetro `ApplicationMode` permite realizar las dos etapas del laboratorio:

- `nginx`: despliegue inicial con Nginx.
- `portfolio`: compilación y despliegue del portafolio desde este repositorio.

Al finalizar la práctica se debe eliminar el stack de CloudFormation para detener la instancia y evitar consumo innecesario.
