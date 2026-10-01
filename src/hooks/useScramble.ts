import { gsap } from 'gsap'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { type RefObject, useCallback, useEffect } from 'react'

gsap.registerPlugin(ScrambleTextPlugin)

// letras maiúsculas, minúsculas, números e símbolos
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!<>-_\\/[]{}=+*^?#'

/**
 * Efeito "decodificar" com GSAP ScrambleText: as letras viram caracteres aleatórios e se
 * revelam da esquerda para a direita. Roda ao montar; `replay` repete (ex.: no hover).
 * Com prefers-reduced-motion o texto fica no valor final, sem animação.
 */
export function useScramble(ref: RefObject<HTMLElement | null>, text: string, duration = 1.2) {
  const replay = useCallback(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.killTweensOf(el)
    gsap.to(el, {
      duration,
      ease: 'none',
      // speed menor = caracteres trocam mais devagar
      scrambleText: { text, chars: CHARS, speed: 0.4, revealDelay: 0 },
    })
  }, [ref, text, duration])

  useEffect(() => {
    const el = ref.current
    replay()
    return () => {
      if (el) gsap.killTweensOf(el)
    }
  }, [ref, replay])

  return { replay }
}
