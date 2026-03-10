'use client'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  description: string
  tags: string[]
  emoji: string
  color: string
  status: string
  featured?: boolean
  github?: string
}

const projects: Project[] = [
  {
  title: 'WhatsApp AI Customer Support Agent',
  description: 'A 24/7 autonomous AI agent that handles customer inquiries, qualifies leads, and saves them to a CRM automatically — built with whatsapp-web.js, N8N, and OpenAI.',
  tags: ['N8N', 'OpenAI', 'whatsapp-web.js', 'React', 'Google Sheets'],
  emoji: '🤖',
  color: '#25D366',
  status:'Production',
},
  {
    title: 'AI Lead Qualification Agent',
    description: 'A 24/7 autonomous AI agent that qualifies inbound leads, scores them based on ICP criteria, and books discovery calls automatically — eliminating manual SDR work.',
    tags: ['n8n', 'OpenAI', 'CRM Integration', 'WhatsApp API'],
    emoji: '🎯',
    color: '#00fff5',
    status: 'Production',
  },
  // {
  //   title: 'Automated Content Workflow System',
  //   description: 'End-to-end content pipeline that researches topics, generates SEO-optimized articles, posts to CMS, and distributes across social channels — all autonomously.',
  //   tags: ['LangChain', 'n8n', 'WordPress API', 'OpenAI GPT-4'],
  //   emoji: '📝',
  //   color: '#00a8e0',
  //   status: 'Live',
  // },
  // {
  //   title: 'WhatsApp AI Customer Care Agent',
  //   description: 'Human-tone conversational agent deployed on WhatsApp that handles FAQs, qualifies prospects, and escalates complex queries — operating 24/7 without human oversight.',
  //   tags: ['WhatsApp Business API', 'OpenAI', 'n8n', 'FastAPI'],
  //   emoji: '💬',
  //   color: '#22c55e',
  //   status: 'Featured Product',
  //   featured: true,
  // },
  // {
  //   title: 'Business Intelligence Automation Suite',
  //   description: 'Integrated system connecting HubSpot, Notion, Slack, and analytics tools — auto-generates weekly performance reports, sends AI-summarized insights to stakeholders.',
  //   tags: ['n8n', 'HubSpot API', 'Notion API', 'Slack API'],
  //   emoji: '📊',
  //   color: '#f59e0b',
  //   status: 'Client Project',
  // },
  // {
  //   title: 'RAG-Powered Knowledge Base Agent',
  //   description: 'Custom RAG system built with LangChain and vector databases that lets businesses chat with their internal docs, SOPs, and knowledge bases using natural language.',
  //   tags: ['LangChain', 'RAG', 'Pinecone', 'FastAPI', 'Python'],
  //   emoji: '🧠',
  //   color: '#7c3aed',
  //   status: 'Open Source',
  //   github: 'https://github.com/kumarkanwal',
  // },
  // {
  //   title: 'Multi-Agent CrewAI Research System',
  //   description: 'Autonomous multi-agent pipeline using CrewAI where specialized agents collaborate to research market trends, write reports, and deliver actionable business insights.',
  //   tags: ['CrewAI', 'LangGraph', 'OpenAI', 'Python'],
  //   emoji: '🤝',
  //   color: '#ec4899',
  //   status: 'In Development',
  // },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-3">// portfolio</p>
          <h2 className="font-display font-800 text-4xl mb-4" style={{ color: 'var(--text-primary)' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Real-world AI systems built to deliver measurable ROI — not just demos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-7 flex flex-col box-glow-hover relative overflow-hidden ${p.featured ? 'ring-1' : ''}`}
              style={p.featured ? { outline: `1px solid ${p.color}` } : {}}
            >
              {p.featured && (
                <div className="absolute top-4 right-4 text-xs font-mono px-2 py-1 rounded"
                  style={{ background: p.color, color: '#000' }}>
                  ⭐ Featured
                </div>
              )}

              {/* Glow bg */}
              <div className="absolute inset-0 pointer-events-none opacity-5 rounded-2xl" style={{
                background: `radial-gradient(circle at 20% 20%, ${p.color}, transparent 60%)`
              }} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="text-3xl mb-4">{p.emoji}</div>

                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-display font-700 text-lg leading-snug" style={{ color: 'var(--text-primary)' }}>
                    {p.title}
                  </h3>
                </div>

                <span className="tech-tag self-start mb-4" style={{ color: p.color, borderColor: p.color }}>
                  {p.status}
                </span>

                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--text-secondary)' }}>
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono transition-all hover:scale-105"
                      style={{ color: 'var(--cyber)' }}>
                      <Github size={13} /> GitHub
                    </a>
                  )}
                  <a href="#contact"
                    className="flex items-center gap-1.5 text-xs font-mono transition-all hover:scale-105 ml-auto"
                    style={{ color: p.color }}>
                    <ExternalLink size={13} /> Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/kumarkanwal" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded border font-mono text-sm transition-all hover:scale-105"
            style={{ borderColor: 'var(--cyber)', color: 'var(--cyber)', background: 'var(--cyber-glow)' }}>
            <Github size={16} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
