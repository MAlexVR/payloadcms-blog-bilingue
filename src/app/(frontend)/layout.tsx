import React from 'react'
import './globals.css'
// 1. Importamos el componente Header
import Header from '@/components/organisms/Header/Header'
import Footer from '@/components/organisms/Footer/Footer'

export const metadata = {
  title: 'GICS - Investigación, Desarrollo e Innovación',
  description:
    'Sitio web bilingüe del Grupo de Investigación GICS. Comprometidos con la excelencia académica, el desarrollo tecnológico y la generación de conocimiento aplicado.',
}

import { Suspense } from 'react'

// ... existing imports

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* 2. Colocamos el Header antes del contenido principal */}
        <Suspense fallback={<div className="h-20 border-b bg-white" />}>
          <Header />
        </Suspense>

        {/* Usamos flex-grow para que el contenido empuje el futuro footer hacia abajo */}
        <main className="flex-grow">{children}</main>

        <Suspense fallback={<div className="h-20 bg-slate-900" />}>
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
