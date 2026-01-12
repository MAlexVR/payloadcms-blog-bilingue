'use client'

import Link from 'next/link'
import { Button } from '@/components/atoms/button'
import { ServiceCard } from '@/components/molecules/ServiceCard'
import { useDictionary } from '@/hooks/useDictionary'

export function ServicesSection() {
  const { dictionary } = useDictionary()
  const t = dictionary.home.services

  return (
    <section id="servicios" className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold font-sans">{t.title}</h2>
          <p className="text-pretty mx-auto max-w-2xl text-lg text-muted-foreground font-secondary">
            {t.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.cards.map((card, index) => {
            // Map assets based on the index order defined in the dictionary (LSU, LEPS, CRGR)
            const assets = [
              {
                image: '/assets/modern-laboratory-equipment-testing.jpg',
                logo: '/assets/branding/white/logo-lsu-white.svg',
              },
              {
                image: '/assets/solar-panel-testing-laboratory.jpg',
                logo: '/assets/branding/white/logo-leps-white.svg',
              },
              {
                image: '/assets/refrigerant-gas-recovery-equipment.jpg',
                logo: '/assets/branding/white/logo-crgr-white.svg',
              },
            ]

            return (
              <ServiceCard
                key={index}
                logo={assets[index]?.logo}
                title={card.title}
                acronym={card.acronym}
                description={card.description}
                imageUrl={assets[index]?.image}
                href={card.href}
              />
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            asChild
            className="bg-[#39A900] hover:bg-[#007832] text-white font-sans font-semibold"
          >
            <Link href="#contacto">{t.cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
