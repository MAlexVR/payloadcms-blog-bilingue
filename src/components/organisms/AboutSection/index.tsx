'use client'

import { InfoCard } from '@/components/molecules/InfoCard'
import { useDictionary } from '@/hooks/useDictionary'

export function AboutSection() {
  const { dictionary } = useDictionary()
  const t = dictionary.home.about

  return (
    <section id="nosotros" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold font-sans">{t.title}</h2>
          <p className="text-pretty mb-8 text-lg text-muted-foreground font-secondary">
            {t.description}
          </p>
        </div>

        {/* Mission and Vision Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <InfoCard
            icon={
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
            iconBgColor="bg-[#39A900]/10 text-[#39A900]"
            title={t.mission.title}
            description={t.mission.description}
          />
          <InfoCard
            icon={
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            }
            iconBgColor="bg-[#50E5F9]/10 text-[#00304D]"
            title={t.vision.title}
            description={t.vision.description}
          />
        </div>
      </div>
    </section>
  )
}
