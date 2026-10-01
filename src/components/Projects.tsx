import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <span className="section__label">02 // Projetos</span>
      <h2 className="section__title">Trabalhos</h2>
      <div className="projects__grid">
        {projects.map((p, i) => (
          <article className="card" key={p.title}>
            <span className="card__index">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="card__title">{p.title}</h3>
            <p className="card__text">{p.description}</p>
            <ul className="card__tags">
              {p.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <a className="card__link" href={p.href}>Ver projeto →</a>
          </article>
        ))}
      </div>
    </section>
  )
}
