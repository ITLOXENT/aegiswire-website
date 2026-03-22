'use client'

import { useEffect, useRef } from 'react'

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let w = 0, h = 0
    let t = 0
    let lastTime = 0

    const COLS = 36
    const ROWS = 28
    const XSEGS = 90

    const resize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }

    const HORIZON = 0.40
    const project = (cx: number, cz: number, cy: number): [number, number] => {
      const hy = h * HORIZON
      const sx = w * 0.5 + (cx - 0.5) * w * 1.52 * cz
      const sy = hy + (h - hy) * cz - cy
      return [sx, sy]
    }

    const waveAt = (cx: number, cz: number, time: number): number => {
      const x = cx * 9
      const z = cz * 7
      const amp = h * 0.078 * cz * cz
      return (
        Math.sin(x * 1.1 + z * 1.7 - time * 1.85) * 0.54 +
        Math.sin(x * 2.5 - z * 0.9 - time * 1.15) * 0.28 +
        Math.sin(x * 0.6 + z * 3.1 - time * 2.30) * 0.18
      ) * amp
    }

    const draw = (now: number) => {
      // Delta-time: advance at a fixed 0.86 rad/s regardless of frame rate
      const dt = lastTime ? Math.min((now - lastTime) / 1000, 0.05) : 1 / 60
      lastTime = now
      t += dt * 0.86

      ctx.clearRect(0, 0, w, h)

      for (let ci = 0; ci <= COLS; ci++) {
        const cx = ci / COLS
        ctx.beginPath()
        let first = true
        for (let ri = 0; ri <= ROWS; ri++) {
          const cz = ri / ROWS
          const [sx, sy] = project(cx, cz, waveAt(cx, cz, t))
          if (first) { ctx.moveTo(sx, sy); first = false }
          else ctx.lineTo(sx, sy)
        }
        ctx.strokeStyle = 'rgba(40,110,255,0.176)'
        ctx.lineWidth = 0.7
        ctx.stroke()
      }

      for (let ri = 0; ri <= ROWS; ri++) {
        const cz = ri / ROWS
        const cz2 = cz * cz

        ctx.beginPath()
        let first = true
        for (let si = 0; si <= XSEGS; si++) {
          const cx = si / XSEGS
          const [sx, sy] = project(cx, cz, waveAt(cx, cz, t))
          if (first) { ctx.moveTo(sx, sy); first = false }
          else ctx.lineTo(sx, sy)
        }

        ctx.strokeStyle = `rgba(40,120,255,${0.04 + cz2 * 0.336})`
        ctx.lineWidth = 0.35 + cz * 1.55
        ctx.stroke()
      }

      const hy = h * HORIZON
      const glow = ctx.createLinearGradient(0, hy - 8, 0, hy + 8)
      glow.addColorStop(0, 'rgba(80,180,255,0)')
      glow.addColorStop(0.5, 'rgba(80,180,255,0.08)')
      glow.addColorStop(1, 'rgba(80,180,255,0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, hy - 8, w, 16)

      const topFade = ctx.createLinearGradient(0, 0, 0, hy + 30)
      topFade.addColorStop(0, 'rgba(5,10,20,1)')
      topFade.addColorStop(0.65, 'rgba(5,10,20,0.65)')
      topFade.addColorStop(1, 'rgba(5,10,20,0)')
      ctx.fillStyle = topFade
      ctx.fillRect(0, 0, w, hy + 30)

      const botFade = ctx.createLinearGradient(0, h * 0.88, 0, h)
      botFade.addColorStop(0, 'rgba(5,10,20,0)')
      botFade.addColorStop(1, 'rgba(5,10,20,0.9)')
      ctx.fillStyle = botFade
      ctx.fillRect(0, h * 0.88, w, h * 0.12)

      animId = requestAnimationFrame(draw)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    resize()
    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
