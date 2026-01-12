'use client'

import Link from 'next/link'
import { Button } from '@/components/atoms/button'
import { useDictionary } from '@/hooks/useDictionary'

export function ContactSection() {
  const { dictionary } = useDictionary()
  const t = dictionary.home.contact

  return (
    <section
      id="contacto"
      className="bg-gradient-to-r from-[#007832] to-[#00304D] py-20 text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-4xl font-bold font-sans">{t.title}</h2>
        <p className="text-balance mx-auto mb-8 max-w-2xl text-lg text-white/90 font-secondary">
          {t.description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="bg-[#39A900] hover:bg-[#007832] text-white font-sans font-semibold border-0"
          >
            <Link href="#contacto">{t.contactButton}</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white text-white hover:bg-white/10 bg-transparent font-sans font-semibold"
          >
            <Link href="#servicios">{t.portfolioButton}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
