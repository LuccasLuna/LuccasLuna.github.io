import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <span className="section__label">04 // Experiência</span>
      <h2 className="section__title">Trajetória</h2>
      <ol className="timeline">
        {experience.map((e) => (
          <li className="timeline__item" key={e.period}>
            <span className="timeline__period">{e.period}</span>
            <span className="timeline__role">{e.role} @ {e.company}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
