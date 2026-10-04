import { useId } from 'react'
import { useTheme } from '../hooks/useTheme'
import { useLang } from '../i18n/useLang'
import Tip from './Tip'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { t } = useLang()
  const isLight = theme === 'light'
  const tipId = useId()
  return (
    <button
      type="button"
      className="theme-toggle tip-host"
      onClick={toggle}
      aria-pressed={isLight}
      aria-label={t.theme.aria}
      aria-describedby={tipId}
    >
      [ {isLight ? t.theme.light : t.theme.dark} ]
      <Tip id={tipId}>{isLight ? t.theme.toDark : t.theme.toLight}</Tip>
    </button>
  )
}
