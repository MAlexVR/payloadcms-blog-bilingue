'use client'

import { ProjectCard } from '@/components/molecules/ProjectCard'
import { useDictionary } from '@/hooks/useDictionary'

export function ProjectsSection() {
  const { dictionary } = useDictionary()
  const t = dictionary.home.projects

  return (
    <section id="proyectos" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold font-sans">{t.title}</h2>
          <p className="text-pretty mx-auto max-w-2xl text-lg text-muted-foreground font-secondary">
            {t.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {t.cards.map((card, index) => (
            <ProjectCard
              key={index}
              title={card.title}
              code={card.code}
              year={card.year}
              description={card.description}
              imageUrl={`/assets/projects/Project-${index + 1}.png`}
              href={card.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
