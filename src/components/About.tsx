import { about } from '../data/content'
import { useLang } from '../i18n/useLang'
import Reveal from './Reveal'

export default function About() {
  const { t } = useLang()
  return (
    <section id="sobre" className="section about">
      <Reveal>
        <span className="section__label">01 // {t.about.label}</span>
        <p className="about__hook">{t.about.hook}</p>
        <h2 className="about__title">
          {t.about.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="about__body">
        <div className="about__text">
          {t.about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="about__media">
          {about.image ? (
            <img src={`${import.meta.env.BASE_URL}${about.image}`} alt={t.about.photoAlt} />
          ) : (
            <span className="about__placeholder">{t.about.photo}</span>
          )}
        </div>
      </Reveal>
    </section>
  )
}
