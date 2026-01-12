'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useCallback } from 'react'

export function useLocale() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // 1. Detectamos el idioma actual de la URL. Si no existe, asumimos 'es'.
  const currentLocale = searchParams.get('locale') || 'es'

  // 2. Creamos una función reutilizable para cambiar el idioma
  const changeLocale = useCallback(
    (newLocale: string) => {
      // Clonamos los parámetros actuales para no perder otros filtros si existieran
      const params = new URLSearchParams(searchParams.toString())

      // Actualizamos solo el parámetro 'locale'
      params.set('locale', newLocale)

      // Navegamos a la nueva URL manteniendo la ruta (pathname)
      router.push(`${pathname}?${params.toString()}`)
    },
    [pathname, router, searchParams],
  )

  return { currentLocale, changeLocale }
}
