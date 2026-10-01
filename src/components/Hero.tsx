import { useRef } from 'react'
import { useScramble } from '../hooks/useScramble'
import { useLang } from '../i18n/useLang'

const NAME = 'Lucas_Luna'

export default function Hero() {
  const { t } = useLang()
  const nameRef = useRef<HTMLSpanElement>(null)
  const { replay } = useScramble(nameRef, NAME)

  return (
    <section id="inicio" className="section hero">
      <span className="hero__label">00 // {t.hero.label}</span>
      <h1 className="hero__title" aria-label={NAME} onPointerEnter={replay}>
        <span ref={nameRef} aria-hidden>{NAME}</span>
      </h1>
      <p className="hero__subtitle">{t.hero.subtitle}</p>
      <div className="hero__actions">
        <a className="btn" href="#projetos">{t.hero.seeProjects}</a>
        <a className="btn btn--ghost" href="#contato">{t.hero.contact}</a>
      </div>
    </section>
  )
}
