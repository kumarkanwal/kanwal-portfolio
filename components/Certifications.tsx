'use client'
import { Award, BookOpen, Trophy } from 'lucide-react'

const certifications = [
  {
    title: 'Introduction to Next.js',
    issuer: 'Vercel / Official Next.js Team',
    icon: '▲',
    color: '#ffffff',
    type: 'Certification',
  },
  {
    title: 'AI Automation Fundamentals',
    issuer: 'n8n Academy',
    icon: '⚡',
    color: '#ea4b71',
    type: 'Certification',
  },
  {
    title: 'LangChain for LLM Application Dev',
    issuer: 'DeepLearning.AI',
    icon: '🔗',
    color: '#00a8e0',
    type: 'Course',
  },
  {
    title: 'OpenAI API Fundamentals',
    issuer: 'OpenAI',
    icon: '🧠',
    color: '#10a37f',
    type: 'Certification',
  },
]

const awards = [
  {
    title: '3rd Prize — Geekathon 2025',
    org: 'MITE University',
    description: 'Competed against top CS students in a national hackathon, placing 3rd with an AI-powered automation solution.',
    icon: <Trophy size={20} />,
    color: '#f59e0b',
  },
]

const publications = [
  {
    title: 'A Systematic Global Comparative Review of Cyberattacks',
    type: 'Research Publication',
    icon: <BookOpen size={20} />,
    color: '#7c3aed',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-3">// credentials</p>
          <h2 className="font-display font-800 text-4xl" style={{ color: 'var(--text-primary)' }}>
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Award size={18} style={{ color: 'var(--cyber)' }} />
            <h3 className="font-display font-700 text-xl" style={{ color: 'var(--text-primary)' }}>Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((c, i) => (
              <div key={i} className="glass-card rounded-xl p-6 text-center box-glow-hover">
                <div className="text-3xl mb-3">{c.icon}</div>
                <span className="section-label text-xs mb-2 block" style={{ color: c.color }}>{c.type}</span>
                <h4 className="font-display font-700 text-sm mb-2 leading-snug" style={{ color: 'var(--text-primary)' }}>
                  {c.title}
                </h4>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{c.issuer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Publications */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Trophy size={18} style={{ color: '#f59e0b' }} />
              <h3 className="font-display font-700 text-xl" style={{ color: 'var(--text-primary)' }}>Awards</h3>
            </div>
            {awards.map((a, i) => (
              <div key={i} className="glass-card rounded-xl p-6 box-glow-hover">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${a.color}20`, color: a.color, border: `1px solid ${a.color}40` }}>
                    {a.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-700 text-base mb-1" style={{ color: 'var(--text-primary)' }}>{a.title}</h4>
                    <p className="text-xs font-mono mb-2" style={{ color: a.color }}>{a.org}</p>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{a.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen size={18} style={{ color: '#7c3aed' }} />
              <h3 className="font-display font-700 text-xl" style={{ color: 'var(--text-primary)' }}>Publications</h3>
            </div>
            {publications.map((p, i) => (
              <div key={i} className="glass-card rounded-xl p-6 box-glow-hover">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${p.color}20`, color: p.color, border: `1px solid ${p.color}40` }}>
                    {p.icon}
                  </div>
                  <div>
                    <span className="section-label text-xs mb-2 block" style={{ color: p.color }}>{p.type}</span>
                    <h4 className="font-display font-700 text-base leading-snug" style={{ color: 'var(--text-primary)' }}>
                      {p.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
