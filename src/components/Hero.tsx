import { useRef } from 'react'
import { useScramble } from '../hooks/useScramble'

const NAME = 'Lucas_Luna'

export default function Hero() {
  const nameRef = useRef<HTMLSpanElement>(null)
  const { replay } = useScramble(nameRef, NAME)

  return (
    <section id="inicio" className="section hero">
      <span className="hero__label">00 // Olá, eu sou</span>
      <h1 className="hero__title" aria-label={NAME} onPointerEnter={replay}>
        <span ref={nameRef} aria-hidden>{NAME}</span>
      </h1>
      <p className="hero__subtitle">Desenvolvedor Full Stack</p>
      <div className="hero__actions">
        <a className="btn" href="#projetos">Ver projetos</a>
        <a className="btn btn--ghost" href="#contato">Contato</a>
      </div>
    </section>
  )
}
