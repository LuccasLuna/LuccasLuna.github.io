import { useAudio } from '../hooks/useAudio'
import { useLang } from '../i18n/useLang'

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
    >
      [ ♪<span className="audio-toggle__state"> {playing ? t.audio.on : t.audio.off}</span> ]
    </button>
  )
}
