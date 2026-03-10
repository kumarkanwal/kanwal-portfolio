'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowDown, Zap, Bot, GitBranch } from 'lucide-react'

const roles = [
  'Agentic AI Developer',
  'AI Automation Architect',
  'n8n Workflow Engineer',
  'LangChain & OpenAI Expert',
  'Business Systems Builder',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
        return () => clearTimeout(t)
      } else {
        setRoleIndex((roleIndex + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIndex])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 grid-bg">
      {/* Radial gradient behind hero */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 40%, var(--cyber-glow) 0%, transparent 70%)'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: 'var(--cyber)' }} />
              <span className="section-label">Available for projects</span>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--cyber)' }} />
            </div>

            <h1 className="font-display font-800 leading-tight mb-4 hero-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3.2rem)', color: 'var(--text-primary)' }}>
              {/* Hi, I'm{' '}
              <span className="gradient-text">Kanwal Kumar</span>
              <br />
              <span style={{ color: 'var(--cyber)' }}>(AI)</span> */}
              Hi, I'm <span className="gradient-text">Kanwal Kumar</span>
            </h1>

            <div className="flex items-center gap-2 mb-6 h-8">
              <span className="section-label">›</span>
              <span className="font-mono text-sm cursor" style={{ color: 'var(--cyber)' }}>
                {displayed}
              </span>
            </div>

            <p className="text-base leading-relaxed mb-8 max-w-lg" style={{ color: 'var(--text-secondary)' }}>
              I build <strong style={{ color: 'var(--text-primary)' }}>24/7 AI Systems</strong> that qualify leads, book meetings & automate 
              repetitive operations — so you can scale without the overhead. 
              Serving startups & SMBs globally.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: <Zap size={16}/>, val: '20+', label: 'Hrs Saved/Week' },
                { icon: <Bot size={16}/>, val: '10+', label: 'AI Agents Built' },
                { icon: <GitBranch size={16}/>, val: '4+', label: 'Yrs Experience' },
              ].map((s, i) => (
                <div key={i} className="glass-card rounded p-4 text-center">
                  <div className="flex items-center justify-center gap-1 mb-1" style={{ color: 'var(--cyber)' }}>
                    {s.icon}
                    <span className="font-display font-800 text-xl">{s.val}</span>
                  </div>
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#projects"
                className="animated-border px-6 py-3 rounded font-mono text-sm font-500 transition-all hover:scale-105"
                style={{ background: 'var(--cyber)', color: 'var(--bg-primary)' }}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded font-mono text-sm border transition-all hover:scale-105"
                style={{ borderColor: 'var(--cyber)', color: 'var(--cyber)', background: 'var(--cyber-glow)' }}
              >
                DM 'AUDIT' for Free Review
              </a>
            </div>
          </div>

          {/* Right: Photo + orbit */}
          <div className="flex items-center justify-center relative isolate">
            {/* Orbit rings */}
            
              <div className="absolute w-80 h-80 rounded-full border opacity-20"
                style={{ borderColor: 'var(--cyber)', borderStyle: 'dashed' }} />
              <div className="absolute w-64 h-64 rounded-full border opacity-10"
                style={{ borderColor: 'var(--cyber)' }} />

            {/* Floating skill pills */}
            {[
              { label: 'n8n', angle: 0, delay: '0s' },
              { label: 'OpenAI', angle: 72, delay: '1s' },
              { label: 'LangChain', angle: 144, delay: '2s' },
              { label: 'FastAPI', angle: 216, delay: '3s' },
              { label: 'CrewAI', angle: 288, delay: '4s' },
            ].map((p, i) => {
              const rad = (p.angle * Math.PI) / 180
              const r = 170
              const x = Math.cos(rad) * r
              const y = Math.sin(rad) * r
              return (
                <div
                  key={i}
                  className="absolute tech-tag pointer-events-none"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    animationDelay: p.delay,
                    zIndex: 20,
                  }}
                >
                  {p.label}
                </div>
              )
            })}

            {/* Photo */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden box-glow animate-float"
                style={{ border: '0px solid var(--cyber)', zIndex: 10}}>
              <Image
                src="/kanwal.png"
                alt="Kanwal Kumar"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Live indicator */}
            <div className="absolute bottom-4 right-8 flex items-center gap-2 px-3 py-2 rounded glass-card text-xs font-mono"
              style={{ color: 'var(--cyber)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#22c55e' }} />
              Open to work
            </div>
          </div>
        </div>

        {/* Scroll down */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="section-label">scroll</span>
          <ArrowDown size={14} style={{ color: 'var(--cyber)' }} />
        </div>
      </div>
    </section>
  )
}
