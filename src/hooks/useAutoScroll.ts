import { type RefObject, useCallback, useEffect, useRef } from 'react'

const SPEED = 40 // px por segundo
const RESUME_DELAY = 2000
const DRAG_THRESHOLD = 5 // px

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
    let pressed = false
    let dragging = false
    let capturedId: number | null = null
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
      // `pressed` entra aqui para o carrossel ficar parado entre o pointerdown e o
      // pointerup: se ele andasse durante o clique, o alvo mudaria e o click seria
      // redirecionado para um ancestral, perdendo o botão "Ver projeto"
      const holding = hovering || pressed || dragging || now < holdUntil.current

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
    // só vira arrasto depois de mover alguns pixels: um clique simples (ex.: no botão "Ver projeto")
    // continua chegando ao elemento clicado, porque a captura do ponteiro redirecionaria o click
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      pressed = true
      dragStartX = e.clientX
      dragStartScroll = el.scrollLeft
    }
    const onMove = (e: PointerEvent) => {
      // o pointerenter só dispara ao entrar: se o ponteiro já estava sobre o slider
      // quando o efeito montou (ou quando o modal fechou), `hovering` ficaria falso
      // e o carrossel andaria debaixo do cursor
      if (e.pointerType === 'mouse') hovering = true
      if (!pressed) return
      // o botão já foi solto, mas o pointerup não chegou (soltou fora da janela):
      // sem isto, `pressed` ficaria preso e o próximo movimento viraria um arrasto fantasma
      if (e.buttons === 0) {
        onUp()
        return
      }
      if (!dragging && Math.abs(e.clientX - dragStartX) > DRAG_THRESHOLD) {
        dragging = true
        capturedId = e.pointerId
        el.setPointerCapture(e.pointerId)
        el.classList.add('slider--dragging')
      }
      if (dragging) el.scrollLeft = dragStartScroll - (e.clientX - dragStartX)
    }
    const onUp = () => {
      pressed = false
      if (!dragging) return
      dragging = false
      if (capturedId !== null && el.hasPointerCapture(capturedId)) el.releasePointerCapture(capturedId)
      capturedId = null
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
    // na janela, e não no slider: soltar o botão fora dele também precisa encerrar o arrasto
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointercancel', onUp)
    window.addEventListener('blur', onUp)
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('pointerenter', onEnter)
      el.removeEventListener('pointerleave', onLeave)
      el.removeEventListener('pointerdown', onDown)
      el.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
      window.removeEventListener('blur', onUp)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [ref, count, hold])

  return { hold }
}
