import { useId } from 'react'
import { useAudio } from '../hooks/useAudio'
import { useLang } from '../i18n/useLang'
import Tip from './Tip'

// Ondas sonoras (public/audio-wave*.webp, derivadas do GIF do Icons8, com fundo transparente):
// animadas com a música tocando, imagem parada quando não está. A cor segue a do botão
// (texto, topo da página, hover) por um filtro SVG, em vez de cores fixas.
const WAVE = `${import.meta.env.BASE_URL}audio-wave.webp`
const WAVE_PAUSED = `${import.meta.env.BASE_URL}audio-wave-paused.webp`

export default function AudioToggle() {
  const { playing, available, toggle } = useAudio()
  const { t } = useLang()
  const tipId = useId()
  if (!available) return null
  return (
    <button
      type="button"
      className="audio-toggle tip-host"
      onClick={toggle}
      aria-pressed={playing}
      aria-label={t.audio.aria}
      aria-describedby={playing ? undefined : tipId}
    >
      <img className="audio-toggle__icon" src={playing ? WAVE : WAVE_PAUSED} alt="" width="20" height="20" />
      {/* pinta as ondas com a cor do texto do botão (currentColor herdado do <button>), mantendo a animação */}
      <svg className="audio-toggle__filter" width="0" height="0" aria-hidden focusable="false">
        <filter id="audio-wave-tint" colorInterpolationFilters="sRGB">
          <feFlood floodColor="currentColor" />
          <feComposite in2="SourceAlpha" operator="in" />
        </filter>
      </svg>
      {/* dica só enquanto a música não toca */}
      {!playing && <Tip id={tipId}>{t.audio.hint}</Tip>}
    </button>
  )
}
