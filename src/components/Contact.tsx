import { useLang } from '../i18n/useLang'
import Reveal from './Reveal'

export default function Contact() {
  const { t } = useLang()
  return (
    <section id="contato" className="section contact">
      <Reveal>
        <span className="section__label">05 // {t.contact.label}</span>
        <a className="contact__big" data-text={t.contact.big.join('\n')} href="mailto:lukaslunasantos_13@hotmail.com">
          {t.contact.big[0]}<br />{t.contact.big[1]}
        </a>
      </Reveal>
      <Reveal delay={0.1} className="contact__links">
         <a className="btn btn--link" href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <span className="btn__icon" aria-hidden>[↗]</span>{t.contact.linkedin}
        </a>
        <a className="btn btn--ghost  btn--link" href="mailto:lukaslunasantos_13@hotmail.com">
          <span className="btn__icon" aria-hidden>[↗]</span>{t.contact.email}
        </a>
        <a className="btn btn--ghost btn--link" href="https://github.com/LuccasLuna" target="_blank" rel="noreferrer">
          <span className="btn__icon" aria-hidden>[↗]</span>{t.contact.github}
        </a>
      </Reveal>
    </section>
  )
}
