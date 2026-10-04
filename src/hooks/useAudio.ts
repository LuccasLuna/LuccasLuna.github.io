import { gsap } from 'gsap'
import { useCallback, useEffect, useRef, useState } from 'react'
import { AUDIO_SRC } from '../data/content'

const KEY = 'audio-muted'
const VOLUME = 0.35 // música de fundo: baixa
const FADE = 0.4 // segundos
const GESTURES = ['pointerdown', 'keydown', 'touchstart'] as const

function initialMuted() {
  try {
    return localStorage.getItem(KEY) === '1'
  } catch {
    return false // armazenamento indisponível
  }
}

/**
 * Música de fundo em loop. Tenta tocar assim que o site abre; como a maioria dos navegadores
 * bloqueia som antes de qualquer interação, se for recusada ela começa no primeiro clique, toque
 * ou tecla (a menos que o visitante já tenha mutado antes).
 * Pausa com a aba oculta. Se o arquivo não existir, `available` fica falso e o botão some.
 */
export function useAudio() {
  const [playing, setPlaying] = useState(false) // o que o botão mostra: só é verdadeiro com a música tocando
  const [available, setAvailable] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const mutedRef = useRef(initialMuted()) // preferência salva do visitante
  const startedRef = useRef(false)

  const fade = useCallback((volume: number, onDone?: () => void) => {
    const audio = audioRef.current
    if (!audio) return
    gsap.killTweensOf(audio)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    gsap.to(audio, { volume, duration: reduced ? 0 : FADE, ease: 'none', onComplete: onDone })
  }, [])

  const play = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return Promise.reject(new Error('sem áudio'))
    return audio.play().then(() => {
      if (audioRef.current !== audio) return // o efeito foi desmontado (StrictMode) enquanto carregava
      startedRef.current = true
      setPlaying(true)
      fade(VOLUME)
    })
  }, [fade])

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC)
    audio.loop = true
    audio.preload = 'metadata' // dispara `error` já na carga se o arquivo não existir
    audio.volume = 0
    audioRef.current = audio
    startedRef.current = false

    const onError = () => setAvailable(false)
    audio.addEventListener('error', onError)

    // começa no primeiro gesto; se o navegador recusar, tenta de novo no gesto seguinte
    const stopListening = () => GESTURES.forEach((e) => window.removeEventListener(e, onGesture))
    function onGesture(e: Event) {
      // o botão de som decide sozinho no clique; se o gesto dele também iniciasse a música, o
      // clique em seguida a mutaria
      if (mutedRef.current || startedRef.current || (e.target as Element | null)?.closest?.('.audio-toggle')) return
      play().then(stopListening, () => {})
    }
    if (!mutedRef.current) {
      // tenta já ao abrir o site (funciona se o navegador permitir som automático neste site);
      // se recusar, o primeiro gesto do visitante inicia
      GESTURES.forEach((e) => window.addEventListener(e, onGesture, { passive: true }))
      play().then(stopListening, () => {})
    }

    const onVisibility = () => {
      if (!startedRef.current || mutedRef.current) return
      if (document.hidden) audio.pause()
      else audio.play().catch(() => {})
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      stopListening()
      document.removeEventListener('visibilitychange', onVisibility)
      audio.removeEventListener('error', onError)
      gsap.killTweensOf(audio)
      audio.pause()
      audioRef.current = null
    }
  }, [play])

  const toggle = useCallback(() => {
    // tocando: muta; parado (mutado antes ou autoplay recusado): toca
    const mute = playing
    mutedRef.current = mute
    try {
      localStorage.setItem(KEY, mute ? '1' : '0')
    } catch {
      // a escolha só vale nesta sessão
    }
    if (mute) {
      setPlaying(false)
      fade(0, () => audioRef.current?.pause())
    } else {
      play().catch(() => {}) // é um gesto do usuário: o navegador permite
    }
  }, [fade, play, playing])

  return { playing, available, toggle }
}
