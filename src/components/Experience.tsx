import { experience } from '../data/content'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <Reveal>
        <span className="section__label">04 // Experiência</span>
        <h2 className="section__title">Trajetória</h2>
      </Reveal>
      <ol className="timeline">
        {experience.map((e, i) => (
          <Reveal as="li" className="timeline__item" delay={i * 0.08} key={e.period}>
            <span className="timeline__period">{e.period}</span>
            <span className="timeline__role">{e.role} @ {e.company}</span>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
