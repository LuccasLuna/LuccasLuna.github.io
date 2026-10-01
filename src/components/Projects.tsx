import { useRef, useState } from 'react'
import { projects } from '../data/content'
import { useAutoScroll } from '../hooks/useAutoScroll'
import { useLang } from '../i18n/useLang'
import ProjectModal from './ProjectModal'
import Reveal from './Reveal'

type StripProps = { label: string; aria: string; items: string[]; accent: 'primary' | 'alt'; reverse?: boolean }

export function ToolsStrip({ label, aria, items, accent, reverse }: StripProps) {
  return (
    <Reveal
      className={`tools tools--${accent}${reverse ? ' tools--reverse' : ''}`}
      aria={aria}
    >
      <span className="tools__label">{label}</span>
      <div className="tools__viewport">
        <ul className="tools__track">
          {[...items, ...items].map((t, i) => (
            <li key={`${t}-${i}`} aria-hidden={i >= items.length}>{t}</li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

// 3 cópias: a do meio é a real; as outras permitem o loop infinito dos dois lados
const COPIES = [0, 1, 2]

export default function Projects() {
  const { t } = useLang()
  const track = useRef<HTMLDivElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { hold } = useAutoScroll(track, projects.length)

  const scroll = (dir: 1 | -1) => {
    const el = track.current
    if (!el) return
    hold(1500)
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section id="projetos" className="section projects">
      <Reveal>
        <span className="section__label">02 // {t.projects.label}</span>
      </Reveal>
      <div className="projects__head">
        <h2 className="section__title">{t.projects.heading}</h2>
        <div className="projects__controls">
          <button type="button" aria-label={t.projects.prev} onClick={() => scroll(-1)}>←</button>
          <button type="button" aria-label={t.projects.next} onClick={() => scroll(1)}>→</button>
        </div>
      </div>

      <div className="slider" ref={track} aria-label={t.projects.slider}>
        {COPIES.map((copy) =>
          projects.map((p, i) => (
            <article
              className={`slide slide--${i % 2 ? 'alt' : 'primary'}`}
              key={`${copy}-${i}`}
              aria-hidden={copy !== 1}
              inert={copy !== 1}
            >
              <span className="slide__index">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="slide__title">{t.projects.items[i].title}</h3>
                <p className="slide__text">{t.projects.items[i].description}</p>
                <ul className="card__tags">
                  {p.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <button type="button" className="card__link" onClick={() => setOpenIndex(i)}>
                  {t.projects.view}
                </button>
              </div>
            </article>
          )),
        )}
      </div>

      <ProjectModal index={openIndex} onClose={() => setOpenIndex(null)} />

      {/* <ToolsStrip label={t.projects.toolsLabel} aria={t.projects.toolsAria} items={tools} accent="primary" /> */}
      {/* <ToolsStrip label={t.projects.stackLabel} aria={t.projects.toolsAria} items={[...tools].reverse()} accent="alt" reverse /> */}
    </section>
  )
}
