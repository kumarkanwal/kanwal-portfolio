'use client'

const experiences = [
  {
    role: 'AI Automation Consultant & Developer',
    company: 'Innoventix360',
    period: 'Nov 2025 – Present',
    type: 'Full-time',
    color: '#00fff5',
    highlights: [
      'Architect autonomous AI agents using N8N & LangGraph for multi-step business processes',
      'Build sophisticated automation pipelines in Agentic AI & n8n connecting disparate APIs',
      'Implement RAG systems & advanced prompt engineering for context-aware AI outputs',
      'Develop custom webhooks syncing CRM, Notion, HubSpot, Slack & project tools',
      'Monitor & tune agent chains to reduce latency and manage token cost efficiency',
    ]
  },
  {
    role: 'SEO & WordPress Developer',
    company: 'TechTalks.Pk',
    period: 'Apr 2025 – Jun 2025',
    type: 'Remote',
    color: '#00a8e0',
    highlights: [
      'Scaled digital footprint via technical WordPress dev + data-driven SEO strategies',
      'Optimized Core Web Vitals via caching, database tuning & asset minification',
      'Structured metadata & site hierarchy for maximum crawlability',
      'Tracked growth via Google Search Console & Analytics for iterative improvements',
    ]
  },
  {
    role: 'Web Developer (Internship)',
    company: 'IIT Solutions',
    period: 'Mar 2024 – Aug 2024',
    type: 'On-site, Karachi',
    color: '#7c3aed',
    highlights: [
      'Built a fully functional educational website from scratch (PHP + MySQL)',
      'Integrated trending UI/UX techniques with smooth animations',
      'Designed 5 key pages with mobile-first responsive layouts',
    ]
  },
  {
    role: 'Web Developer',
    company: 'CodSoft',
    period: 'Nov 2023 – Jan 2024',
    type: 'Internship, Sindh',
    color: '#f59e0b',
    highlights: [
      'Developed responsive websites using HTML, CSS & JavaScript',
      'Built customizable CMS architectures with WordPress plugins',
      'Applied SEO basics and performance optimization techniques',
    ]
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="absolute left-0 top-1/3 w-80 h-80 rounded-full pointer-events-none" style={{
        background: 'radial-gradient(circle, var(--cyber-glow) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="section-label mb-3">// career</p>
          <h2 className="font-display font-800 text-4xl" style={{ color: 'var(--text-primary)' }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block" style={{
            background: 'linear-gradient(to bottom, var(--cyber), transparent)'
          }} />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:pl-24">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-5 top-6 w-6 h-6 rounded-full items-center justify-center"
                  style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}` }}>
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                <div className="glass-card rounded-2xl p-7 box-glow-hover transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display font-700 text-xl mb-1" style={{ color: 'var(--text-primary)' }}>
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="font-500" style={{ color: exp.color }}>{exp.company}</span>
                        <span className="tech-tag">{exp.type}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs px-3 py-1.5 rounded"
                      style={{ background: 'var(--bg-secondary)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
