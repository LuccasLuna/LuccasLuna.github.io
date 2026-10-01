import { useTheme } from '../hooks/useTheme'
import { useLang } from '../i18n/useLang'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { t } = useLang()
  const isLight = theme === 'light'
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-pressed={isLight}
      aria-label={t.theme.aria}
    >
      [ {isLight ? t.theme.light : t.theme.dark} ]
    </button>
  )
}
