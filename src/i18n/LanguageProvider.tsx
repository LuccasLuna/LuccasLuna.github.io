import { type ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { LANGS, type Lang, isLang, messages } from './messages'
import { LangContext } from './useLang'

const KEY = 'lang'

// Português é o padrão; só usa outro idioma se o visitante já tiver escolhido
function initialLang(): Lang {
  try {
    const stored = localStorage.getItem(KEY)
    if (isLang(stored)) return stored
  } catch {
    // armazenamento indisponível
  }
  return 'pt'
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(KEY, next)
    } catch {
      // a escolha só vale nesta sessão
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = LANGS.find((l) => l.code === lang)!.html
    document.title = messages[lang].meta.title
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: messages[lang] }), [lang, setLang])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}
