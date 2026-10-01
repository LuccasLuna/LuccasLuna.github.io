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
export default function ToolsMarquee() {
  const items = tools.map((t) => t.toUpperCase())
  return (
    <div className="marquee" aria-hidden>
      <Row tone="primary" items={items} />
      <Row tone="plain" reverse items={[...items].reverse()} />
    </div>
  )
}
