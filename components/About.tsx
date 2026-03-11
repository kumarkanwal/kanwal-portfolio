'use client'
import Image from 'next/image'
import { Download, MapPin, GraduationCap, Building2 } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image card */}
          <div className="relative">
            <div className="glass-card rounded-2xl overflow-hidden aspect-[4/5] relative max-w-sm mx-auto">
              <Image src="/kanwal.png" alt="Kanwal Kumar" fill className="object-cover" />
              {/* Overlay */}
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 60%)'
              }} />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-2">
                  {['n8n Certified', 'OpenAI Expert', 'LangChain Dev'].map(tag => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -right-4 top-8 glass-card rounded-xl p-4 max-w-xs hidden lg:block"
              style={{ border: '1px solid var(--cyber)' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                  style={{ background: 'var(--cyber-glow)', border: '1px solid var(--border)' }}>
                  🏆
                </div>
                <div>
                  <p className="font-display font-600 text-sm" style={{ color: 'var(--text-primary)' }}>Top Rated</p>
                  <p className="text-xs font-bold" style={{ color: 'var(--text-muted)' }}>AI Automation Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="section-label mb-3">// about me</p>
            <h2 className="font-display font-800 text-4xl mb-6" style={{ color: 'var(--text-primary)' }}>
              From Doctor to{' '}
              <span className="gradient-text">Machine Intelligence</span>
            </h2>

            <div className="space-y-4 mb-8" style={{ color: 'var(--text-secondary)' }}>
              <p>
                I made a bold pivot from the medical field in 2020 — driven by a deep fascination with 
                logic-based systems and automation. What started as learning HTML & PHP became a full 
                obsession with building intelligent, self-running business infrastructure.
              </p>
              <p>
                Today I architect and deploy <strong style={{ color: 'var(--text-primary)' }}>autonomous AI agents</strong> and 
                workflow automation systems that don't just save time — they eliminate entire categories 
                of manual work. My builds are designed for one thing: <strong style={{ color: 'var(--cyber)' }}>measurable ROI</strong>.
              </p>
              <p>
                I'm currently Building <strong style={{ color: 'var(--text-primary)' }}>Customer care agents and lead generation products</strong>  to help startups and SMBs automate repeatative task and boost sales globally
                through my agency <strong style={{ color: 'var(--text-primary)' }}>Innoventix360</strong>.
              </p>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: <MapPin size={14}/>, label: 'Location', value: 'Karachi, Pakistan' },
                { icon: <Building2 size={14}/>, label: 'Agency', value: 'Innoventix360' },
                // { icon: <GraduationCap size={14}/>, label: 'Degree', value: 'B.S. Computer Science' },
                // { icon: <GraduationCap size={14}/>, label: 'University', value: 'MITE (2024–2028)' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span style={{ color: 'var(--cyber)', marginTop: '2px' }}>{item.icon}</span>
                  <div>
                    <p className="text-xs font-mono mb-0.5" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                    <p className="text-sm font-500" style={{ color: 'var(--text-primary)' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/kanwal-kumar-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded font-mono text-sm border transition-all hover:scale-105"
                style={{ borderColor: 'var(--cyber)', color: 'var(--cyber)', background: 'var(--cyber-glow)' }}
              >
                LinkedIn Profile
              </a>
              <a
                href="/Kanwal-AI-Automation-CV.pdf"
                download
                className="flex items-center gap-2 px-5 py-2.5 rounded font-mono text-sm transition-all hover:scale-105"
                style={{ background: 'var(--cyber)', color: 'var(--bg-primary)' }}
              >
                <Download size={14} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
