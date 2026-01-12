import { useLocale } from './useLocale'
import { es } from '@/dictionaries/es'
import { en } from '@/dictionaries/en'

const dictionaries = {
  es,
  en,
}

export function useDictionary() {
  const { currentLocale } = useLocale()

  // Type-safe locale selection, defaulting to 'es'
  const dictionary = dictionaries[currentLocale as keyof typeof dictionaries] || dictionaries.es

  return { dictionary }
}
