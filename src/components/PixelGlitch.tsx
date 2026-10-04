import { useEffect, useRef } from 'react'

// Retângulo em células da grade: [coluna, linha, largura, altura]
type Cell = [number, number, number, number]
type Region = { x: number; y: number; w: number; h: number }
type Piece = { rect: Cell; alt: boolean } // alt = a outra cor principal, em poucos pedaços

const GAP = 16 // folga até texto, botões e marcas dos cantos
const rand = (min: number, max: number) => min + Math.random() * (max - min)
const randInt = (min: number, max: number) => Math.floor(rand(min, max + 1))
const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v))

// barras verticais penduradas na borda de cima ou de baixo da região
function bars(r: Region, count: number): Cell[] {
  return Array.from({ length: count }, () => {
    const w = randInt(1, 2)
    const len = randInt(3, Math.max(4, Math.floor(r.h * 0.6)))
    const x = r.x + randInt(0, Math.max(0, r.w - w))
    return [x, Math.random() < 0.5 ? r.y : r.y + r.h - len, w, len] as Cell
  })
}

// bloco de faixas empilhadas com as pontas em degraus (borda serrilhada de macrobloco)
function slabs(r: Region, rows: number): Cell[] {
  const out: Cell[] = []
  const x0 = r.x + randInt(0, Math.floor(r.w * 0.3))
  const x1 = r.x + r.w - randInt(0, Math.floor(r.w * 0.3))
  const y0 = r.y + randInt(0, Math.max(0, r.h - rows))
  const width = Math.max(4, x1 - x0)
  let left = 0
  let right = 0
  for (let y = 0; y < rows; ) {
    const h = randInt(1, 3)
    left = clamp(left + randInt(-3, 3), 0, Math.floor(width / 3))
    right = clamp(right + randInt(-3, 3), 0, Math.floor(width / 3))
    out.push([x0 + left, y0 + y, width - left - right, h])
    y += h
  }
  return out
}

// linhas finas e compridas (como linhas de varredura quebradas)
function lines(r: Region, count: number): Cell[] {
  return Array.from({ length: count }, () => {
    const w = randInt(Math.min(8, r.w), r.w)
    return [r.x + randInt(0, r.w - w), r.y + randInt(0, r.h - 1), w, Math.random() < 0.8 ? 1 : 2] as Cell
  })
}

// pixels soltos e pequenos "L"
function specks(r: Region, count: number): Cell[] {
  return Array.from({ length: count }, () => {
    const x = r.x + randInt(0, r.w - 1)
    const y = r.y + randInt(0, r.h - 1)
    return Math.random() < 0.6 ? ([x, y, 1, 1] as Cell) : ([x, y, randInt(2, 3), 1] as Cell)
  })
}

// Um quadro da rajada. `power` (0–1) escala a quantidade: a rajada sobe e desce de intensidade.
function frame(r: Region, kind: 'bars' | 'slabs', power: number): Piece[] {
  const n = (max: number) => Math.max(1, Math.round(max * power))
  const cells =
    kind === 'bars'
      ? [...bars(r, n(10)), ...slabs(r, randInt(3, Math.max(4, Math.round(r.h * 0.5 * power)))), ...specks(r, n(14))]
      : [...slabs(r, randInt(4, Math.max(5, Math.round(r.h * 0.55 * power)))), ...lines(r, n(6)), ...specks(r, n(10))]
  return cells.map((rect) => ({ rect, alt: Math.random() < 0.12 }))
}

function textRect(el: Element) {
  const range = document.createRange()
  range.selectNodeContents(el)
  return range.getBoundingClientRect()
}

// retângulos (em coordenadas da janela) que o glitch não pode cobrir
function obstacles(content: Element): DOMRect[] {
  const texts = [...content.querySelectorAll('.hero__label, .hero__title, .hero__subtitle')].map(textRect)
  const boxes = [...content.querySelectorAll('.btn'), ...document.querySelectorAll('.navbar, .corner')]
  return [...texts, ...boxes.map((el) => el.getBoundingClientRect())]
}

/**
 * Glitch de "monitor com defeito" nos espaços vazios do hero, no estilo dos vídeos do Marathon:
 * rajadas curtas de macroblocos serrilhados, barras verticais e linhas finas em cor chapada
 * (só as duas cores principais do site: destaque e secundária),
 * que sobem e descem de intensidade em poucos quadros. Tudo em canvas, numa grade grossa.
 * O texto, os botões, a navbar e as marcas dos cantos são recortados da imagem.
 * Só roda com o hero visível e a aba ativa; some com prefers-reduced-motion.
 */
export default function PixelGlitch() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const content = canvas?.parentElement
    const hero = canvas?.closest('.hero')
    const ctx = canvas?.getContext('2d')
    if (!canvas || !content || !hero || !ctx || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let width = 0
    let height = 0
    let cell = 12
    let visible = true
    let running = false
    const timers = new Set<number>()
    const later = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => {
        timers.delete(id)
        fn()
      }, ms)
      timers.add(id)
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      width = canvas.clientWidth
      height = canvas.clientHeight
      cell = width < 640 ? 8 : 12
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()

    const colors = () => {
      const css = getComputedStyle(canvas)
      const get = (name: string) => css.getPropertyValue(name).trim()
      return { primary: get('--glitch-primary'), secondary: get('--glitch-secondary') }
    }

    const burst = () => {
      const cols = Math.floor(width / cell)
      const rows = Math.floor(height / cell)
      if (cols < 12 || rows < 8 || running) return
      running = true

      const palette = colors()
      const kind = Math.random() < 0.55 ? 'bars' : 'slabs'
      // cada rajada tem uma cor dominante; a outra aparece em poucos pedaços
      const [main, other] = kind === 'bars' ? [palette.primary, palette.secondary] : [palette.secondary, palette.primary]
      const box = canvas.getBoundingClientRect()
      const blocked = obstacles(content).map((b) => ({
        x: b.left - box.left - GAP,
        y: b.top - box.top - GAP,
        w: b.width + GAP * 2,
        h: b.height + GAP * 2,
      }))

      const w = randInt(Math.floor(cols * 0.25), Math.floor(cols * 0.7))
      const h = randInt(Math.floor(rows * 0.3), Math.floor(rows * 0.85))
      const region: Region = { x: randInt(0, cols - w), y: randInt(0, rows - h), w, h }
      const frames = randInt(4, 8)

      const draw = (i: number) => {
        ctx.clearRect(0, 0, width, height)
        if (i >= frames) {
          running = false
          return
        }
        const power = Math.sin((Math.PI * (i + 0.5)) / frames) // sobe e desce
        ctx.globalAlpha = 0.9
        for (const { rect: [x, y, rw, rh], alt } of frame(region, kind, power)) {
          ctx.fillStyle = alt ? other : main
          ctx.fillRect(x * cell, y * cell, rw * cell, rh * cell)
        }
        for (const b of blocked) ctx.clearRect(b.x, b.y, b.w, b.h)
        later(() => draw(i + 1), rand(60, 110))
      }
      draw(0)
    }

    const schedule = () => {
      later(() => {
        if (visible && !document.hidden) {
          burst()
          // às vezes o monitor "engasga" e repete logo em seguida
          if (Math.random() < 0.25) later(burst, rand(500, 900))
        }
        schedule()
      }, rand(2500, 6000))
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    })
    io.observe(hero)
    later(burst, rand(900, 1800))
    schedule()

    return () => {
      io.disconnect()
      ro.disconnect()
      timers.forEach((id) => window.clearTimeout(id))
    }
  }, [])

  return <canvas className="pixel-glitch" ref={canvasRef} aria-hidden />
}
