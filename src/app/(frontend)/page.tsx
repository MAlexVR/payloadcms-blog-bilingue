import React from 'react'
import { Hero } from '@/components/organisms/Hero/Hero'
import { AboutSection } from '@/components/organisms/AboutSection'
import { ServicesSection } from '@/components/organisms/ServicesSection'
import { ProjectsSection } from '@/components/organisms/ProjectsSection'
import { ContactSection } from '@/components/organisms/ContactSection'

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ locale?: string }>
}) {
  await searchParams // Ensures searchParams are awaited even if not explicitly used for logic here (good practice in Next 15)

  return (
    <>
      <Hero
        title="Innovación en Investigación y Desarrollo"
        description="Grupo de investigación comprometido con la excelencia académica, el desarrollo tecnológico y la generación de conocimiento aplicado a soluciones reales"
        primaryButtonText="Nuestros Servicios"
        primaryButtonHref="#servicios"
        secondaryButtonText="Ver Proyectos"
        secondaryButtonHref="#proyectos"
      />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
