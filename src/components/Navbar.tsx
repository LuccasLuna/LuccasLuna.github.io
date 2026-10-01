import { sections } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import { useAtTop } from '../hooks/useAtTop'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const active = useActiveSection(sections.map((s) => s.id))
  const atTop = useAtTop()
  return (
    <nav className={`navbar${atTop ? ' navbar--top' : ''}`}>
      <a className="navbar__brand" href="#inicio">// LUCAS_LUNA</a>
      <div className="navbar__links">
        {sections.slice(1).map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`navbar__link${active === s.id ? ' navbar__link--active' : ''}`}
          >
            {s.label}
          </a>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  )
}
