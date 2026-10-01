import { type RefObject, useCallback, useEffect, useRef } from 'react'

const SPEED = 40 // px por segundo
const RESUME_DELAY = 2000

/**
 * Rolagem horizontal automática e infinita para um contêiner com `copies` cópias
 * consecutivas da mesma lista (a cópia do meio é a "real"). Também permite roda do
 * mouse (vira rolagem horizontal) e arrastar com o mouse. Pausa enquanto o usuário
 * interage e retoma depois de um tempo.
 */
export function useAutoScroll(ref: RefObject<HTMLElement | null>, count: number) {
  const holdUntil = useRef(0)

  const hold = useCallback((ms: number) => {
    holdUntil.current = performance.now() + ms
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const period = () => {
      const kids = el.children
      return kids.length > count
        ? (kids[count] as HTMLElement).offsetLeft - (kids[0] as HTMLElement).offsetLeft
        : 0
    }

    let hovering = false
    let dragging = false
    let dragStartX = 0
    let dragStartScroll = 0
    let pos = 0
    let lastSet = 0
    let last = performance.now()
    let raf = 0

    el.scrollLeft = period()
    pos = lastSet = el.scrollLeft

    const frame = (now: number) => {
      const dt = Math.min(now - last, 100) / 1000
      last = now
      const p = period()
      const holding = hovering || dragging || now < holdUntil.current

      // alguém mexeu no scroll (roda, arraste, botões, toque): seguir a posição real
      if (Math.abs(el.scrollLeft - lastSet) > 1) pos = el.scrollLeft

      if (!holding && !reduced) pos += SPEED * dt

      if (p > 0 && !holding) {
        if (pos >= 2 * p) pos -= p
        else if (pos < p) pos += p
      }
      if (pos !== lastSet || !holding) {
        el.scrollLeft = pos
        lastSet = el.scrollLeft
      }
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return // trackpad horizontal: nativo
      e.preventDefault()
      el.scrollLeft += e.deltaY
    }
    const onEnter = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') hovering = true
    }
    const onLeave = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      hovering = false
      hold(RESUME_DELAY)
    }
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      dragging = true
      dragStartX = e.clientX
      dragStartScroll = el.scrollLeft
      el.setPointerCapture(e.pointerId)
      el.classList.add('slider--dragging')
    }
    const onMove = (e: PointerEvent) => {
      if (dragging) el.scrollLeft = dragStartScroll - (e.clientX - dragStartX)
    }
    const onUp = () => {
      if (!dragging) return
      dragging = false
      el.classList.remove('slider--dragging')
      hold(RESUME_DELAY)
    }
    const onTouchStart = () => hold(RESUME_DELAY * 3)
    const onTouchEnd = () => hold(RESUME_DELAY)

    el.addEventListener('wheel', onWheel, { passive: false })
    el.addEventListener('pointerenter', onEnter)
    el.addEventListener('pointerleave', onLeave)
    el.addEventListener('pointerdown', onDown)
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerup', onUp)
    el.addEventListener('pointercancel', onUp)
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('pointerenter', onEnter)
      el.removeEventListener('pointerleave', onLeave)
      el.removeEventListener('pointerdown', onDown)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerup', onUp)
      el.removeEventListener('pointercancel', onUp)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [ref, count, hold])

  return { hold }
}
