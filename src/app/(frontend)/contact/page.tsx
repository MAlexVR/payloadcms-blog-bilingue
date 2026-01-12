import { Suspense } from 'react'
import { PageLayout } from '@/components/templates/PageLayout'
import { ContactForm } from '@/components/organisms/ContactForm'

export const metadata = {
  title: 'Contáctenos | GICS', // Fallback title, ideally dynamic based on locale but metadata is static here unless we use generateMetadata with params
  description: 'Ponte en contacto con nuestro equipo de investigación y servicios.',
}

export default async function ContactPage() {
  return (
    <PageLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />
      </Suspense>
    </PageLayout>
  )
}
