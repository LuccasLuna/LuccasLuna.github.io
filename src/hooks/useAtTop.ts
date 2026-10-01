import { useEffect, useState } from 'react'

/** true enquanto a página está no topo (até `threshold` px de rolagem). */
export function useAtTop(threshold = 8) {
  const [atTop, setAtTop] = useState(() => window.scrollY <= threshold)

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY <= threshold)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return atTop
}
