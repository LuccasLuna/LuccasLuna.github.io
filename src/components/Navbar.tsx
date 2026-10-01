import { sections } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'

export default function Navbar() {
  const active = useActiveSection(sections.map((s) => s.id))
  return (
    <nav className="navbar">
      <a className="navbar__brand" href="#inicio">// SEU_NOME</a>
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
      </div>
    </nav>
  )
}
