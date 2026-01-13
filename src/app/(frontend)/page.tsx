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
      <Hero primaryButtonHref="#servicios" secondaryButtonHref="#proyectos" />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
