'use client'
import { useEffect, useRef, useState } from 'react'

const skillCategories = [
  {
    label: 'AI & Automation Core',
    icon: '🤖',
    skills: [
      { name: 'n8n Workflow Automation', level: 95 },
      { name: 'Agentic AI Frameworks (CrewAI, LangGraph)', level: 88 },
      { name: 'OpenAI API & Prompt Engineering', level: 92 },
      { name: 'LangChain & RAG Systems', level: 85 },
      { name: 'Machine learning', level: 80 },
    ]
  },
  {
    label: 'Development & Infrastructure',
    icon: '⚙️',
    skills: [
      { name: 'FastAPI & Python', level: 82 },
      { name: 'Webhook & API Integration', level: 90 },
      { name: 'Next.js / React', level: 78 },
      { name: 'WordPress & Technical SEO', level: 85 },
      { name: 'MySQL & Database Management', level: 75 },
    ]
  },
]

const techStack = [
  { name: 'n8n', emoji: '⚡' },
  { name: 'OpenAI', emoji: '🧠' },
  { name: 'LangChain', emoji: '🔗' },
  { name: 'CrewAI', emoji: '👥' },
  { name: 'LangGraph', emoji: '📊' },
  { name: 'FastAPI', emoji: '🚀' },
  { name: 'Python', emoji: '🐍' },
  { name: 'Zapier', emoji: '⚙️' },
  { name: 'Make.com', emoji: '🔄' },
  { name: 'HubSpot', emoji: '📈' },
  { name: 'Notion API', emoji: '📝' },
  { name: 'Slack API', emoji: '💬' },
  { name: 'WhatsApp API', emoji: '📱' },
  { name: 'Next.js', emoji: '▲' },
  { name: 'WordPress', emoji: '🌐' },
  { name: 'MySQL', emoji: '🗄️' },
  { name: 'Google', emoji: '📍' },
]

function SkillBar({ name, level, animate }: { name: string; level: number; animate: boolean }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-500" style={{ color: 'var(--text-primary)' }}>{name}</span>
        <span className="font-mono text-xs" style={{ color: 'var(--cyber)' }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
        <div
          className="h-full rounded-full skill-bar-fill"
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className="relative py-28 px-6" ref={ref}>
      {/* Background accent */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full pointer-events-none" style={{
        background: 'radial-gradient(circle, var(--cyber-glow) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="section-label mb-3">// expertise</p>
          <h2 className="font-display font-800 text-4xl" style={{ color: 'var(--text-primary)' }}>
            Skills & <span className="gradient-text">Tech Stack</span>
          </h2>
        </div>

        {/* Skill bars */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((cat, ci) => (
            <div key={ci} className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-display font-700 text-lg" style={{ color: 'var(--text-primary)' }}>{cat.label}</h3>
              </div>
              {cat.skills.map((s, si) => (
                <SkillBar key={si} name={s.name} level={s.level} animate={visible} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech grid */}
        <div>
          <p className="section-label text-center mb-8">// tools & platforms</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t, i) => (
              <div
                key={i}
                className="tech-tag flex items-center gap-2 cursor-default"
                style={{ padding: '6px 14px', fontSize: '0.8rem' }}
              >
                <span>{t.emoji}</span>
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
