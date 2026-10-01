import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isLight = theme === 'light'
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-pressed={isLight}
      aria-label="Alternar tema claro/escuro"
    >
      [ {isLight ? 'Claro' : 'Escuro'} ]
    </button>
  )
}
