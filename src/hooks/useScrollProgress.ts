import { useScroll, useSpring } from 'motion/react'

/** Progresso de rolagem da página (0 a 1), suavizado. Compartilhado pela barra e pela mira. */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll()
  return useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
}
