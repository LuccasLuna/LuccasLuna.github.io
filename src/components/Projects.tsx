import { useRef } from 'react'
import { projects, tools } from '../data/content'
import { useAutoScroll } from '../hooks/useAutoScroll'
import Reveal from './Reveal'

type StripProps = { label: string; items: string[]; accent: 'primary' | 'alt'; reverse?: boolean }

function ToolsStrip({ label, items, accent, reverse }: StripProps) {
  return (
    <Reveal
      className={`tools tools--${accent}${reverse ? ' tools--reverse' : ''}`}
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
  const track = useRef<HTMLDivElement>(null)
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
        <span className="section__label">02 // Projetos</span>
      </Reveal>
      <div className="projects__head">
        <h2 className="section__title">Trabalhos</h2>
        <div className="projects__controls">
          <button type="button" aria-label="Projetos anteriores" onClick={() => scroll(-1)}>←</button>
          <button type="button" aria-label="Próximos projetos" onClick={() => scroll(1)}>→</button>
        </div>
      </div>

      <div className="slider" ref={track} aria-label="Slider de projetos">
        {COPIES.map((copy) =>
          projects.map((p, i) => (
            <article
              className={`slide slide--${i % 2 ? 'alt' : 'primary'}`}
              key={`${copy}-${p.title}`}
              aria-hidden={copy !== 1}
              inert={copy !== 1}
            >
              <span className="slide__index">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="slide__title">{p.title}</h3>
                <p className="slide__text">{p.description}</p>
                <ul className="card__tags">
                  {p.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <a className="card__link" href={p.href}>Ver projeto →</a>
              </div>
            </article>
          )),
        )}
      </div>

      <ToolsStrip label="Ferramentas" items={tools} accent="primary" />
      <ToolsStrip label="Stack" items={[...tools].reverse()} accent="alt" reverse />
    </section>
  )
}
