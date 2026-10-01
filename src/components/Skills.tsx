import { skills } from '../data/content'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="habilidades" className="section">
      <Reveal>
        <span className="section__label">03 // Habilidades</span>
        <h2 className="section__title">Stack</h2>
      </Reveal>
      <div className="skills__grid">
        {Object.entries(skills).map(([group, items], i) => (
          <Reveal className="card" delay={i * 0.08} key={group}>
            <h3 className="card__title">{group}</h3>
            <ul className="card__tags">
              {items.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
