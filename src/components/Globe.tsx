import { motion, useReducedMotion, useTransform } from 'motion/react'
import { useScrollProgress } from '../hooks/useScrollProgress'

const R = 14
const TURNS = 2 // voltas do globo do topo ao fim da página

// Um meridiano: elipse cuja largura varia com o cosseno do ângulo, o que simula o giro em 3D
function Meridian({ offset, still }: { offset: number; still: boolean }) {
  const progress = useScrollProgress()
  const rx = useTransform(progress, (p) => R * Math.abs(Math.cos(still ? offset : p * TURNS * Math.PI * 2 + offset)))
  return <motion.ellipse cx="16" cy="16" ry={R} rx={rx} />
}

// Globo em arame que gira conforme a página rola
export default function Globe({ className }: { className?: string }) {
  const still = !!useReducedMotion()
  return (
    <svg className={className} viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="16" cy="16" r={R} />
      <path d="M2 16h28M3.4 10h25.2M3.4 22h25.2" />
      {[0, Math.PI / 3, (2 * Math.PI) / 3].map((offset) => (
        <Meridian key={offset} offset={offset} still={still} />
      ))}
    </svg>
  )
}
