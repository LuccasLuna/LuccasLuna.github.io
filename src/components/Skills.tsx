import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="habilidades" className="section">
      <span className="section__label">03 // Habilidades</span>
      <h2 className="section__title">Stack</h2>
      <div className="skills__grid">
        {Object.entries(skills).map(([group, items]) => (
          <div className="card" key={group}>
            <h3 className="card__title">{group}</h3>
            <ul className="card__tags">
              {items.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
