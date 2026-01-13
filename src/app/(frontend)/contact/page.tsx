import { Suspense } from 'react'
import Image from 'next/image'
import { PageLayout } from '@/components/templates/PageLayout'
import { ContactForm } from '@/components/organisms/ContactForm'
import { Mail, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Contáctenos | GICS',
  description: 'Ponte en contacto con nuestro equipo de investigación y servicios.',
}

export default async function ContactPage() {
  return (
    <PageLayout
      className="bg-slate-50 dark:bg-[#001a29]"
      containerClassName="container mx-auto px-4 py-16"
    >
      {/* 🚀 Hero/Intro Section implicitly handled inside ContactForm for mobile/desktop layout flexibility, 
          but we wrap the main components here */}

      <Suspense
        fallback={<div className="min-h-[600px] flex items-center justify-center">Loading...</div>}
      >
        <ContactForm />
      </Suspense>

      {/* 🗺️ Map Section */}
      <div className="mt-24">
        <div className="group w-full h-96 rounded-[2.5rem] overflow-hidden relative border-4 border-white dark:border-navy shadow-2xl transition-all duration-700 cursor-pointer">
          <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors z-10"></div>

          {/* Using a placeholder-like image for map as provided in HTML request */}
          <div className="absolute inset-0 w-full h-full scale-110 group-hover:scale-100 transition-transform duration-1000">
            <Image
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=2000"
              alt="Map Background"
              fill
              className="object-cover"
            />
          </div>

          {/* Pulsing Pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-primary p-4 rounded-full shadow-[0_0_50px_rgba(57,169,0,0.6)]">
              <MapPin className="text-white h-8 w-8" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/20 rounded-full animate-ping"></div>
          </div>

          {/* Info Badge */}
          <div className="absolute bottom-6 left-6 z-20 bg-white/95 dark:bg-navy/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 dark:border-navy/50 shadow-xl max-w-xs font-sans">
            <p className="text-navy dark:text-white font-bold text-sm uppercase tracking-wider mb-1 font-sans">
              Nuestras Oficinas Centrales
            </p>
            <p className="text-navy/60 dark:text-gray-400 text-xs font-medium font-sans">
              Abierto de Lunes a Viernes, 9:00 - 18:00
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
