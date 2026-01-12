'use client'

import { Button } from '@/components/atoms/button'
import Link from 'next/link'
import { useLocale } from '@/hooks/useLocale'
import { useDictionary } from '@/hooks/useDictionary'
// import { heroDictionary } from './hero.dictionary'

export interface HeroProps {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

export function Hero({
  title,
  description,
  primaryButtonText,
  primaryButtonHref = '#',
  secondaryButtonText,
  secondaryButtonHref = '#',
}: HeroProps) {
  const { currentLocale } = useLocale()
  const { dictionary } = useDictionary()
  const t = dictionary.hero

  const displayTitle = title || t.title
  const displayDescription = description || t.description
  const displayPrimaryButtonText = primaryButtonText || t.primaryButton
  const displaySecondaryButtonText = secondaryButtonText || t.secondaryButton

  return (
    <section
      /* Fondo con degradado institucional: Azul marino (#00304D) -> Verde oscuro (#007832) -> Morado (#71277A) 🌌 */
      className="relative min-h-[450px] lg:min-h-[51vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#00304D] via-[#007832] to-[#71277A]"
    >
      {/* Contenedor del fondo con patrón de mosaico tecnológico 🧩 */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('/assets/abstract-scientific-research-pattern.jpg')",
          backgroundRepeat: 'repeat',
          backgroundSize: '300px',
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-12 text-center text-white">
        {/* Título con balance de texto para mejor lectura 📖 */}
        <h1 className="font-sans text-balance mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          {displayTitle}
        </h1>

        <p className="font-sans text-balance mx-auto mb-10 max-w-3xl text-lg text-white/90 md:text-xl">
          {displayDescription}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Botón Primario: Consistente con el Header (Verde Brillante -> Verde Oscuro) ✅ */}
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-secondary text-white font-sans font-semibold px-8 transition-colors"
          >
            <Link href={primaryButtonHref}>{displayPrimaryButtonText}</Link>
          </Button>

          {/* Botón Secundario: Variante contorno para jerarquía visual ⚪ */}
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white text-white hover:bg-white/10 bg-transparent font-sans font-semibold px-8 transition-all"
          >
            <Link href={secondaryButtonHref}>{displaySecondaryButtonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
