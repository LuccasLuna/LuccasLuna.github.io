import { experience } from '../data/content'
import { useLang } from '../i18n/useLang'
import Reveal from './Reveal'

export default function Experience() {
  const { t } = useLang()
  return (
    <section id="experiencia" className="section">
      <Reveal>
        <span className="section__label">04 // {t.experience.label}</span>
        <h2 className="section__title">{t.experience.heading}</h2>
      </Reveal>
      <ol className="timeline">
        {experience.map((e, i) => (
          <Reveal as="li" className="timeline__item" delay={i * 0.08} key={e.from}>
            <span className="timeline__period">{e.from} — {e.to ?? t.experience.present}</span>
            <span className="timeline__role">{t.experience.role} @ {t.experience.company}</span>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
