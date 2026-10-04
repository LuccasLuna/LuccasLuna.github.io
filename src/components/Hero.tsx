import { useRef } from 'react'
import { useScramble } from '../hooks/useScramble'
import { useLang } from '../i18n/useLang'
import PixelGlitch from './PixelGlitch'

const NAME = 'Lucas_Luna'

export default function Hero() {
  const { t } = useLang()
  const nameRef = useRef<HTMLSpanElement>(null)
  const { replay } = useScramble(nameRef, NAME)

  return (
    <section id="inicio" className="section hero">
      <div className="hero__content">
        <PixelGlitch />
        <span className="hero__label">00 // {t.hero.label}</span>
        <h1 className="hero__title" aria-label={NAME} onPointerEnter={replay}>
          <span ref={nameRef} aria-hidden>{NAME}</span>
        </h1>
        <p className="hero__subtitle">{t.hero.subtitle}</p>
        <div className="hero__actions">
          <a className="btn btn--plus" href="#projetos">{t.hero.seeProjects}<span className="btn__plus" aria-hidden /></a>
          <a className="btn btn--ghost btn--plus" href="#contato">{t.hero.contact}<span className="btn__plus" aria-hidden /></a>
        </div>
      </div>
    </section>
  )
}
