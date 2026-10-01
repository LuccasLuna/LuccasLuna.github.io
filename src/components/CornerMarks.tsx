import { motion, useReducedMotion, useTransform } from 'motion/react'
import { useScrollProgress } from '../hooks/useScrollProgress'
import Globe from './Globe'
import PixelShape from './PixelShape'

// Marcas decorativas fixas nos cantos da janela (estilo HUD). Só aparecem em telas largas,
// ficam atrás da navbar e não recebem cliques nem leitura de tela.

const BARS = [3, 1, 2, 1, 1, 3, 1, 2, 1, 3, 1, 1, 2]

export default function CornerMarks() {
  const progress = useScrollProgress()
  const reduced = useReducedMotion()
  // a mira gira junto com a barra de progresso: 2 voltas do topo ao fim da página
  const rotate = useTransform(progress, [0, 1], [0, 720])

  return (
    <div className="corners" aria-hidden>
      <motion.svg
        className="corner corner--tl corner--accent"
        viewBox="0 0 24 24"
        width="28"
        height="28"
        style={reduced ? undefined : { rotate }}
      >
        <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" fill="none" />
      </motion.svg>

      <Globe className="corner corner--tr" />

      <div className="corner corner--bl corner--accent">
        <svg viewBox="0 0 20 40" width="20" height="40" shapeRendering="crispEdges">
          {BARS.map((h, i) => {
            const y = BARS.slice(0, i).reduce((a, b) => a + b + 1, 0) * 2
            return <rect key={i} x="0" y={y} width="20" height={h * 2} fill="currentColor" />
          })}
        </svg>
        <svg viewBox="0 0 20 20" width="20" height="20">
          <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2.5" fill="none" />
        </svg>
        <svg viewBox="0 0 20 20" width="20" height="20">
          <rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <rect x="8" y="8" width="4" height="4" fill="currentColor" />
        </svg>
        <span className="corner__num">20 26</span>
        <span className="corner__text">
          LUCAS LUNA / FULL STACK
          <br />
          &quot;COMPILE. DEPLOY. REPEAT.&quot;
        </span>
      </div>

      <PixelShape className="corner corner--br" />
    </div>
  )
}
