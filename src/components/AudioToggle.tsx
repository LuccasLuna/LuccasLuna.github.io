import { useAudio } from '../hooks/useAudio'
import { useLang } from '../i18n/useLang'

// Ondas sonoras (public/audio-wave*.webp, derivadas do GIF do Icons8, com fundo transparente):
// animadas com a música tocando, imagem parada quando não está.
const WAVE = `${import.meta.env.BASE_URL}audio-wave.webp`
const WAVE_PAUSED = `${import.meta.env.BASE_URL}audio-wave-paused.webp`

export default function AudioToggle() {
  const { playing, available, toggle } = useAudio()
  const { t } = useLang()
  if (!available) return null
  return (
    <button
      type="button"
      className={`audio-toggle${playing ? '' : ' audio-toggle--off'}`}
      onClick={toggle}
      aria-pressed={playing}
      aria-label={t.audio.aria}
      title={playing ? t.audio.on : t.audio.off}
    >
      <img className="audio-toggle__icon" src={playing ? WAVE : WAVE_PAUSED} alt="" width="20" height="20" />
    </button>
  )
}
