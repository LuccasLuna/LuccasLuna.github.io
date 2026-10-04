import { useEffect, useId, useRef, useState } from 'react'
import { LANGS, type Lang } from '../i18n/messages'
import { useLang } from '../i18n/useLang'
import Tip from './Tip'

// Dropdown próprio (o popup do <select> nativo não aceita o estilo do layout).
// Segue o padrão "select-only combobox" do WAI-ARIA: botão + listbox, com teclado completo.
export default function LanguageSelect() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const root = useRef<HTMLDivElement>(null)
  const button = useRef<HTMLButtonElement>(null)
  const listId = useId()
  const tipId = useId()

  const currentIndex = LANGS.findIndex((l) => l.code === lang)
  const current = LANGS[currentIndex]

  // fecha ao clicar fora
  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', onDown)
    return () => document.removeEventListener('pointerdown', onDown)
  }, [open])

  const openList = () => {
    setActive(currentIndex)
    setOpen(true)
  }

  const choose = (code: Lang) => {
    setLang(code)
    setOpen(false)
    button.current?.focus()
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(e.key)) {
        e.preventDefault()
        openList()
      }
      return
    }
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setActive((i) => (i + 1) % LANGS.length)
        break
      case 'ArrowUp':
        e.preventDefault()
        setActive((i) => (i - 1 + LANGS.length) % LANGS.length)
        break
      case 'Home':
        e.preventDefault()
        setActive(0)
        break
      case 'End':
        e.preventDefault()
        setActive(LANGS.length - 1)
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        choose(LANGS[active].code)
        break
      case 'Escape':
        e.preventDefault()
        e.stopPropagation()
        setOpen(false)
        break
      case 'Tab':
        setOpen(false)
        break
    }
  }

  return (
    <div className="lang" ref={root}>
      <button
        ref={button}
        type="button"
        className="lang-select tip-host"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open ? `${listId}-${LANGS[active].code}` : undefined}
        aria-label={t.language.label}
        aria-describedby={open ? undefined : tipId}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onKeyDown}
      >
        {current.label} <span aria-hidden>▾</span>
        {!open && <Tip id={tipId}>{t.language.hint}</Tip>}
      </button>
      {open && (
        <ul className="lang__list" role="listbox" id={listId} aria-label={t.language.label}>
          {LANGS.map((l, i) => (
            <li
              key={l.code}
              id={`${listId}-${l.code}`}
              role="option"
              lang={l.html}
              aria-selected={l.code === lang}
              className={`lang__option${i === active ? ' lang__option--active' : ''}${l.code === lang ? ' lang__option--selected' : ''}`}
              onPointerEnter={() => setActive(i)}
              onClick={() => choose(l.code)}
            >
              {l.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
