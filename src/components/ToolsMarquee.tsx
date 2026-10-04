import { tools } from '../data/content'

type RowProps = { tone: 'primary' | 'plain'; reverse?: boolean; items: string[] }

function Row({ tone, reverse, items }: RowProps) {
  return (
    <div className={`marquee__row marquee__row--${tone}${reverse ? ' marquee__row--reverse' : ''}`}>
      <ul className="marquee__track">
        {[...items, ...items].map((t, i) => (
          <li key={`${t}-${i}`}>{t}</li>
        ))}
      </ul>
    </div>
  )
}

// Slider grande com as ferramentas usadas: duas linhas correndo em sentidos opostos (decorativo)
type Props = { accent?: 'primary' | 'alt'; page?: boolean; invert?: boolean }

// `invert`: troca o sentido das duas linhas
// `page`: o slider fica solto na página (fora de uma .section), sem a sangria lateral
export default function ToolsMarquee({ accent = 'primary', page, invert }: Props) {
  const items = tools.map((t) => t.toUpperCase())
  return (
    <div className={`marquee${accent === 'alt' ? ' marquee--alt' : ''}${page ? ' marquee--page' : ''}`} aria-hidden>
      <Row tone="primary" reverse={invert} items={items} />
      <Row tone="plain" reverse={!invert} items={[...items].reverse()} />
    </div>
  )
}
