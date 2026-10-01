import { motion } from 'motion/react'
import type { ReactNode } from 'react'

const tags = { div: motion.div, article: motion.article, li: motion.li, p: motion.p }

type Props = {
  as?: keyof typeof tags
  delay?: number
  className?: string
  aria?: string
  children: ReactNode
}

// Sobe e aparece uma vez ao entrar na tela. Respeita prefers-reduced-motion (MotionConfig em App).
export default function Reveal({ as = 'div', delay = 0, className, aria, children }: Props) {
  const Tag = tags[as] as typeof motion.div
  return (
    <Tag
      className={className}
      aria-label={aria}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </Tag>
  )
}
