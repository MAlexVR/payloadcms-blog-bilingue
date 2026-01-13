# Blog Bilingüe con PayloadCMS y Diseño Atómico

Un blog bilingüe (Inglés/Español) moderno y de alto rendimiento construido con **Next.js 15**, **PayloadCMS 3.0**, **Tailwind CSS 4** y **Shadcn UI**.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **CMS**: PayloadCMS 3.0 (SQLite)
- **Estilos**: Tailwind CSS 4 + Shadcn UI
- **Lenguaje**: TypeScript
- **Gestor de Paquetes**: npm

## 📂 Estructura del Proyecto (Diseño Atómico)

El proyecto sigue la metodología de **Diseño Atómico** para garantizar escalabilidad y mantenibilidad.

### Organización de `src/components`

- **Atoms** (`/atoms`): Los bloques de construcción más pequeños. Ejemplos: Botones, Inputs, Etiquetas. Son componentes "tontos" sin lógica de aplicación.
- **Molecules** (`/molecules`): Grupos de átomos que funcionan juntos. Ejemplos: `PostCard`, `LanguageSwitcher`, Barra de Búsqueda. Pueden tener lógica de UI (como abrir/cerrar un menú) pero no lógica de negocio.
- **Organisms** (`/organisms`): Secciones complejas y distintas de una interfaz. Ejemplos: `Header`, `Footer`, `Hero`. Forman las partes principales de una página y pueden interactuar con el estado global o datos.
- **Templates** (`/templates`): Diseños a nivel de página que colocan componentes en una cuadrícula. (Usado para estructuras de página repetidas).
- **Pages** (`src/app`): Las instancias reales donde se obtienen los datos y se pasan a templates u organismos.

## 🛠️ Configuración e Instalación

### Instalación y Configuración

El proyecto utiliza **npm** como gestor de paquetes.

1.  **Instalar dependencias**:

    ```bash
    npm install
    ```

2.  **Configurar Variables de Entorno**:
    Copia el archivo de ejemplo y configura tu base de datos (SQLite por defecto).

    ```bash
    cp .env.example .env
    ```

3.  **Ejecutar en Desarrollo**:

    ```bash
    npm run dev
    ```

4.  **Generar Tipos de Payload**:
    Si modificas las colecciones, regenera los tipos:
    ```bash
    npm run generate:types
    ```
5.  **Acceder al Panel Administrativo**:
    Ve a `http://localhost:3000/admin` para gestionar el contenido.

## 🌍 Localización (i18n)

El proyecto soporta **Español (es)** e **Inglés (en)**.

- **Backend**: PayloadCMS está configurado con localización habilitada en `payload.config.ts`.
- **Frontend**: Un hook personalizado `useLocale` y `useDictionary` gestionan el estado y el contenido de texto.
- **Diccionarios**: Todo el texto está centralizado en `src/dictionaries/{locale}.ts` para un fácil mantenimiento.

## 🔍 Manejo de SEO

El SEO se gestiona a través de la API de Metadatos de Next.js.

- **Metadatos Estáticos**: Definidos en `layout.tsx` (título, descripción).
- **Metadatos Dinámicos**: Usa `generateMetadata` en `page.tsx` para obtener dinámicamente títulos y descripciones del contenido de PayloadCMS (por ejemplo, para posts individuales).
- **Sitemap**: Payload puede generar sitemaps automáticamente usando plugins.

## 🎨 Mejores Prácticas

- **Tipado Estricto**: Todos los componentes y obtenciones de datos están fuertemente tipados con TypeScript.
- **Server Components**: Priorizamos Server Components para la obtención de datos para mejorar el rendimiento y el SEO.
- **Diseño Responsivo**: Enfoque Mobile-first usando Tailwind CSS.
