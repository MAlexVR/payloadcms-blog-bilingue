'use client'

import * as React from 'react'
import { Check, ChevronDown, Globe } from 'lucide-react'

import { Button } from '@/components/atoms/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/atoms/dropdown-menu'
import { useLocale } from '@/hooks/useLocale'
import { cn } from '@/lib/utils'

export function LanguageSwitcher() {
  const { currentLocale, changeLocale } = useLocale()

  const locales = [
    { code: 'es', label: 'Español', flag: 'fi fi-es' },
    { code: 'en', label: 'English', flag: 'fi fi-gb' }, // or fi-us
  ]

  const current = locales.find((l) => l.code === currentLocale) || locales[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 px-2 font-medium text-gray-700 hover:bg-transparent hover:text-secondary border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none focus:bg-transparent"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline-block">{current.label}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.code}
            onClick={() => changeLocale(locale.code)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className={cn('text-lg leading-none', locale.flag)} />
            <span className="flex-1">{locale.label}</span>
            {currentLocale === locale.code && <Check className="h-4 w-4 ml-2" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
