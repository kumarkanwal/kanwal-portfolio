'use client'
import { useEffect, useRef } from 'react'

interface Node {
  x: number; y: number; vx: number; vy: number; r: number; phase: number
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let nodes: Node[] = []
    const COUNT = 40
    const MAX_DIST = 180

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < COUNT; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
        phase: Math.random() * Math.PI * 2,
      })
    }

    const isDark = () => document.documentElement.classList.contains('dark')

    const draw = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const dark = isDark()
      const nodeColor = dark ? '0, 255, 245' : '0, 157, 150'
      const lineColor = dark ? '0, 255, 245' : '0, 157, 150'

      nodes.forEach(n => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1

        const pulse = Math.sin(t * 0.001 + n.phase) * 0.3 + 0.7

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${nodeColor}, ${pulse * (dark ? 0.8 : 0.6)})`
        ctx.fill()

        // Glow
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 6)
        grad.addColorStop(0, `rgba(${nodeColor}, ${pulse * (dark ? 0.15 : 0.1)})`)
        grad.addColorStop(1, `rgba(${nodeColor}, 0)`)
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * 6, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      })

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * (dark ? 0.25 : 0.15)
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.setLineDash([4, 4])
            ctx.lineDashOffset = -t * 0.02
            ctx.stroke()
            ctx.setLineDash([])
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
