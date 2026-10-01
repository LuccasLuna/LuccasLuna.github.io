import { about } from '../data/content'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="sobre" className="section about">
      <Reveal>
        <span className="section__label">01 // Sobre</span>
        <p className="about__hook">{about.hook}</p>
        <h2 className="about__title">
          {about.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="about__body">
        <div className="about__text">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="about__media">
          {about.image ? (
            <img src={`${import.meta.env.BASE_URL}${about.image}`} alt="Foto de Lucas Luna" />
          ) : (
            <span className="about__placeholder">[ foto ]</span>
          )}
        </div>
      </Reveal>
    </section>
  )
}
