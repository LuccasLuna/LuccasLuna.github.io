import { useEffect, useState } from 'react'

const COLS = 5
const ROWS = 7
const TOTAL = COLS * ROWS
const INTERVAL = 4000
const MIN_ON = Math.ceil(TOTAL * 0.4)

const rand = (min: number, max: number) => min + Math.floor(Math.random() * (max - min + 1))

// Bloco sólido 5x7 ao qual faltam pixels: alguns retângulos recortados + pixels soltos removidos.
function randomShape(prev?: boolean[]): boolean[] {
  for (let attempt = 0; attempt < 20; attempt++) {
    const cells = Array<boolean>(TOTAL).fill(true)

    for (let n = rand(1, 3); n > 0; n--) {
      const w = rand(1, 3)
      const h = rand(1, 3)
      const x0 = rand(0, COLS - w)
      const y0 = rand(0, ROWS - h)
      for (let y = y0; y < y0 + h; y++) for (let x = x0; x < x0 + w; x++) cells[y * COLS + x] = false
    }
    const scatter = 0.1 + Math.random() * 0.05
    for (let i = 0; i < TOTAL; i++) if (Math.random() < scatter) cells[i] = false

    const on = cells.filter(Boolean).length
    const same = prev?.every((v, i) => v === cells[i])
    if (on >= MIN_ON && !same) return cells
  }
  return Array<boolean>(TOTAL).fill(true)
}

// Bloco de pixels que, de tempos em tempos, se dissolve em outro formato aleatório.
export default function PixelShape({ className }: { className?: string }) {
  const [cells, setCells] = useState<boolean[]>(() => randomShape())
  // atraso aleatório por pixel (sorteado uma vez), para a troca parecer uma dissolução
  const [delays] = useState(() => Array.from({ length: TOTAL }, () => rand(0, 250)))

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setCells((prev) => randomShape(prev)), INTERVAL)
    return () => clearInterval(id)
  }, [])

  return (
    <svg className={className} viewBox={`0 0 ${COLS} ${ROWS}`} width="30" height="42" shapeRendering="crispEdges">
      {cells.map((on, i) => (
        <rect
          key={i}
          x={i % COLS}
          y={Math.floor(i / COLS)}
          width="1"
          height="1"
          fill="currentColor"
          style={{ opacity: on ? 1 : 0, transition: 'opacity 0.25s', transitionDelay: `${delays[i]}ms` }}
        />
      ))}
    </svg>
  )
}
