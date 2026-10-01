import { useLang } from '../i18n/useLang'

const year = new Date().getFullYear()

export default function Footer() {
  const { t } = useLang()
  return <footer className="footer">{t.footer.replace('{year}', String(year))}</footer>
}
