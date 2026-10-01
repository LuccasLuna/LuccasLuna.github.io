import { LANGS, type Lang } from '../i18n/messages'
import { useLang } from '../i18n/useLang'

export default function LanguageSelect() {
  const { lang, setLang, t } = useLang()
  return (
    <select
      className="lang-select"
      value={lang}
      onChange={(e) => setLang(e.target.value as Lang)}
      aria-label={t.language.label}
    >
      {LANGS.map((l) => (
        <option key={l.code} value={l.code} lang={l.html}>
          {l.label}
        </option>
      ))}
    </select>
  )
}
