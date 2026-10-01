import { createContext, useContext } from 'react'
import type { Lang, Messages } from './messages'

export type LangContextValue = { lang: Lang; setLang: (lang: Lang) => void; t: Messages }

export const LangContext = createContext<LangContextValue | null>(null)

export function useLang() {
  const value = useContext(LangContext)
  if (!value) throw new Error('useLang precisa estar dentro de <LanguageProvider>')
  return value
}
