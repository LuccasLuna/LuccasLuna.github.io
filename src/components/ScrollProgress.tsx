import { motion } from 'motion/react'
import { useScrollProgress } from '../hooks/useScrollProgress'

export default function ScrollProgress() {
  const scaleX = useScrollProgress()
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden />
}
