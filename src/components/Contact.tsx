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
        <a className="btn" href="mailto:lukaslunasantos_13@hotmail.com">E-mail</a>
        <a className="btn btn--ghost" href="https://github.com/LuccasLuna" target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn btn--ghost" href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
      </Reveal>
    </section>
  )
}
