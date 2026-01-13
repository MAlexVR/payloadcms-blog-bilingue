'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useLocale } from '@/hooks/useLocale'
import { useDictionary } from '@/hooks/useDictionary'
import { Button } from '@/components/atoms/button'
import { LanguageSwitcher } from '@/components/molecules/LanguageSwitcher'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null)

  const { currentLocale, changeLocale } = useLocale()
  const { dictionary } = useDictionary()
  const t = dictionary.header

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <nav className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo 🎨 */}
        <div className="flex items-center gap-3">
          <Link href="/" className="relative h-14 w-40 flex items-center">
            <Image
              src="/assets/branding/color/logo-grupo-investigacion.svg"
              alt="Logo Grupo de Investigación"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
        </div>

        {/* Navegación Desktop - Hover con Verde Oscuro (#007832) 🖥️ */}
        <div className="hidden items-center gap-8 lg:flex">
          {t.navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-secondary"
              >
                {item.name}
                {item.submenu && <ChevronDown className="h-4 w-4" />}
              </Link>

              {item.submenu && activeDropdown === item.name && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="min-w-[280px] rounded-lg border bg-white p-2 shadow-lg">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block rounded-md px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-primary/10 hover:text-secondary"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Acciones - Botón con Verde Brillante (#39A900) ⚙️ */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <Button
            asChild
            className="hidden sm:inline-flex font-semibold text-white bg-primary hover:bg-secondary"
          >
            <Link href="#login">{t.actions.login}</Link>
          </Button>

          <button
            type="button"
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Menú Móvil - Detalles en Verde Brillante 📱 */}
      {mobileMenuOpen && (
        <div className="border-t bg-white lg:hidden">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-8 p-1 bg-gray-100 rounded-lg border">
              <button
                onClick={() => changeLocale('es')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm transition-all ${
                  currentLocale === 'es'
                    ? 'bg-white shadow-sm font-bold text-primary'
                    : 'text-gray-500'
                }`}
              >
                <span className="fi fi-es rounded-sm"></span> Español
              </button>
              <button
                onClick={() => changeLocale('en')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm transition-all ${
                  currentLocale === 'en'
                    ? 'bg-white shadow-sm font-bold text-primary'
                    : 'text-gray-500'
                }`}
              >
                <span className="fi fi-us rounded-sm"></span> English
              </button>
            </div>

            <nav className="space-y-1">
              {t.navigation.map((item) => (
                <div key={item.name} className="border-b border-gray-50 last:border-0">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveMobileSubmenu(
                            activeMobileSubmenu === item.name ? null : item.name,
                          )
                        }
                        className="flex w-full items-center justify-between py-4 text-base font-medium text-gray-900"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            activeMobileSubmenu === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {activeMobileSubmenu === item.name && (
                        <div className="bg-gray-50 rounded-md mb-2 overflow-hidden">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="block py-3 px-6 text-sm text-gray-700 hover:text-primary active:bg-gray-100"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-4 text-base font-medium text-gray-900 active:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-8">
              <Button
                asChild
                className="w-full py-6 text-base font-semibold text-white bg-primary hover:bg-secondary"
              >
                <Link href="#login" onClick={() => setMobileMenuOpen(false)}>
                  {t.actions.login}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
