import { useEffect, useState } from 'react'
import { sections } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import { useAtTop } from '../hooks/useAtTop'
import { useLang } from '../i18n/useLang'
import LanguageSelect from './LanguageSelect'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const active = useActiveSection(sections.map((s) => s.id))
  const atTop = useAtTop()
  const { t } = useLang()
  const [open, setOpen] = useState(false)

  // fecha o menu com Esc e ao voltar para telas grandes
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const mq = window.matchMedia('(min-width: 801px)')
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onChange)
    return () => {
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onChange)
    }
  }, [])

  return (
    <nav className={`navbar${atTop ? ' navbar--top' : ''}`}>
      <a className="navbar__brand" href="#inicio">// LUCAS_LUNA</a>
      <div className="navbar__actions">
        <div id="nav-links" className={`navbar__links${open ? ' navbar__links--open' : ''}`}>
          {sections.slice(1).map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`navbar__link${active === s.id ? ' navbar__link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {t.nav[s.id]}
            </a>
          ))}
          <LanguageSelect />
        </div>
        <ThemeToggle />
        <button
          type="button"
          className="navbar__menu"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          [ {open ? t.menu.close : t.menu.open} ]
        </button>
      </div>
    </nav>
  )
}
