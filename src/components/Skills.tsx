import { skills } from '../data/content'
import { useLang } from '../i18n/useLang'
import Reveal from './Reveal'

export default function Skills() {
  const { t } = useLang()
  return (
    <section id="habilidades" className="section">
      <Reveal>
        <span className="section__label">03 // {t.skills.label}</span>
        <h2 className="section__title">{t.skills.heading}</h2>
      </Reveal>
      <div className="skills__grid">
        {(Object.keys(skills) as (keyof typeof skills)[]).map((group, i) => (
          <Reveal className="card" delay={i * 0.08} key={group}>
            <h3 className="card__title">{t.skills.groups[group]}</h3>
            <ul className="card__tags">
              {skills[group].map((s) => <li key={s}>{s}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
