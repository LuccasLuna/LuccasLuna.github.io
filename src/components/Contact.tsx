import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contato" className="section contact">
      <Reveal>
        <span className="section__label">05 // Contato</span>
        <a className="contact__big" href="mailto:lukaslunasantos_13@hotmail.com">
          Vamos<br />conversar
        </a>
      </Reveal>
      <Reveal delay={0.1} className="contact__links">
         <a className="btn btn--link" href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <span className="btn__icon" aria-hidden>[↗]</span>LinkedIn
        </a>
        <a className="btn btn--ghost  btn--link" href="mailto:lukaslunasantos_13@hotmail.com">
          <span className="btn__icon" aria-hidden>[↗]</span>E-mail
        </a>
        <a className="btn btn--ghost btn--link" href="https://github.com/LuccasLuna" target="_blank" rel="noreferrer">
          <span className="btn__icon" aria-hidden>[↗]</span>GitHub
        </a>
      </Reveal>
    </section>
  )
}
