'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useDictionary } from '@/hooks/useDictionary'

export default function Footer() {
  const { dictionary } = useDictionary()

  // Seleccionamos el diccionario del hook
  const t = dictionary.footer

  return (
    <footer className="relative z-10 w-full overflow-hidden border-t border-solid border-slate-800 bg-slate-900 text-slate-300">
      {/* Contenido Principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Sección de Marca (Logo y Redes) */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link href="/" className="relative h-16 w-44 flex items-center">
                <Image
                  src="/assets/branding/white/logo-grupo-investigacion-white.svg"
                  alt="Logo Grupo de Investigación"
                  fill
                  className="object-contain object-left"
                />
              </Link>
            </div>

            <p className="text-pretty mb-6 text-sm text-slate-400 max-w-sm">
              {t.brand.description}
            </p>

            {/* Redes Sociales */}
            <div className="flex gap-4">
              {/* Facebook */}
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 transition-colors hover:bg-[#39A900] hover:text-white"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </Link>
              {/* LinkedIn */}
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 transition-colors hover:bg-[#39A900] hover:text-white"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              {/* Twitter/X */}
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 transition-colors hover:bg-[#39A900] hover:text-white"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Columnas de Links Generadas Dinámicamente */}
          {/* Nosotros */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">{t.columns.nosotros.title}</h3>
            <ul className="space-y-2.5">
              {t.columns.nosotros.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-[#39A900]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">{t.columns.servicios.title}</h3>
            <ul className="space-y-2.5">
              {t.columns.servicios.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-[#39A900]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Eventos y Legal (Combinados en una columna visual para ahorrar espacio si es necesario) */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">{t.columns.eventos.title}</h3>
            <ul className="mb-6 space-y-2.5">
              {t.columns.eventos.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-[#39A900]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 text-sm font-semibold text-white">{t.columns.legal.title}</h3>
            <ul className="space-y-2.5">
              {t.columns.legal.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-[#39A900]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Logos Institucionales */}
        {/* Nota: Asegúrate de tener estas imágenes en tu carpeta /public, de lo contrario Next.js dará error.
            He comentado las imágenes reales y puesto placeholders temporales para evitar fallos ahora mismo. */}
        <div className="mt-12 flex flex-col items-center md:items-end border-t border-slate-800 pt-8">
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 md:gap-10 opacity-100 transition-opacity">
            {/* Logo Centro de Formación */}
            <div className="relative h-12 md:h-16 w-auto">
              <Image
                src="/assets/branding/white/logo-centro-formacion-white.svg"
                alt="Logo Centro de Formación"
                width={0}
                height={64}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>

            {/* Logo SENNOVA */}
            <div className="relative h-12 md:h-16 w-auto">
              <Image
                src="/assets/branding/white/logo-sennova-white.svg"
                alt="Logo SENNOVA"
                width={0}
                height={64}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Barra Inferior */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-slate-500 md:flex-row md:text-left">
            <p>
              &copy; {new Date().getFullYear()} GICS. {t.copyright.rights}
            </p>
            <p>{t.copyright.developedBy}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
