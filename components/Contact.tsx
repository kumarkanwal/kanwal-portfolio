'use client'
import { Mail, Linkedin, Github, Twitter, Globe, MessageSquare } from 'lucide-react'

const socials = [
  {
    label: 'LinkedIn',
    handle: '@kanwal-kumar-ai',
    href: 'https://www.linkedin.com/in/kanwal-kumar-ai/',
    icon: <Linkedin size={20} />,
    color: '#0a66c2',
    desc: 'Connect professionally',
  },
  {
    label: 'GitHub',
    handle: '@kumarkanwal',
    href: 'https://github.com/kumarkanwal',
    icon: <Github size={20} />,
    color: '#e2eaf2',
    desc: 'View my code & projects',
  },
  {
    label: 'X (Twitter)',
    handle: '@Kanwalkumar01',
    href: 'https://x.com/Kanwalkumar01',
    icon: <Twitter size={20} />,
    color: '#1d9bf0',
    desc: 'Follow for AI insights',
  },
  {
    label: 'Agency',
    handle: 'codevcreation.com',
    href: 'https://Innoventix360.com/',
    icon: <Globe size={20} />,
    color: '#00fff5',
    desc: 'CodePro Software & Web',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 40% at 50% 100%, var(--cyber-glow) 0%, transparent 70%)'
      }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="section-label mb-3">// get in touch</p>
          <h2 className="font-display font-800 text-4xl mb-6" style={{ color: 'var(--text-primary)' }}>
            Let's Build Something <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: 'var(--text-secondary)' }}>
            Ready to automate your business? DM me <strong style={{ color: 'var(--cyber)' }}>'AUDIT'</strong> for a 
            free 15-minute workflow breakdown, or reach out directly below.
          </p>
        </div>

        {/* Email CTA */}
        <div className="rounded-2xl p-8 text-center mb-10"style={{ background: 'var(--bg-card)', border: '1px solid var(--cyber)', boxShadow: '0 0 20px var(--cyber-glow)', }}>
          <Mail size={32} className="mx-auto mb-4" style={{ color: 'var(--cyber)' }} />
          <h3 className="font-display font-700 text-xl mb-2" style={{ color: '#ffffff' }}>Email Me Directly</h3>
          <p className="mb-6 text-sm" style={{ color: 'var(--text-secondary)' }}>For project inquiries, automation audits, and collaborations</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:kanwalkumarqalandri8272@gmail.com"
              className="px-6 py-3 rounded font-mono text-sm transition-all hover:scale-105"
              style={{ background: 'var(--cyber)', color: 'var(--bg-primary)' }}>
              KANWALKUMAROFFICIAL@GMAIL.COM
            </a>
            <a href="mailto:KANWALKUMAROFFICIAL@GMAIL.COM"
              className="px-6 py-3 rounded border font-mono text-sm transition-all hover:scale-105"
              style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
              +92 313 3772883
            </a>
          </div>
        </div>

        {/* Socials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-5 text-center box-glow-hover flex flex-col items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                style={{ background: `${s.color}20`, color: s.color, border: `1px solid ${s.color}30` }}>
                {s.icon}
              </div>
              <div>
                <p className="font-display font-700 text-sm" style={{ color: 'var(--text-primary)' }}>{s.label}</p>
                <p className="font-mono text-xs" style={{ color: s.color }}>{s.handle}</p>
                <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
