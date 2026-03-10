'use client'
import { useState } from 'react'
import { MessageSquare, X, Bot, Send } from 'lucide-react'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div className="chat-widget">
      {/* Chat panel */}
      {open && (
        <div className="mb-4 w-80 rounded-2xl overflow-hidden shadow-2xl glass-card"
          style={{ border: '1px solid var(--cyber)', boxShadow: '0 0 40px var(--cyber-glow)' }}>
          {/* Header */}
          <div className="px-5 py-4 flex items-center justify-between"
            style={{ background: 'var(--cyber)', color: '#000' }}>
            <div className="flex items-center gap-3">
              <Bot size={20} />
              <div>
                <p className="font-display font-700 text-sm">Kanwal's AI Agent</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-xs opacity-80">Always online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="opacity-70 hover:opacity-100">
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="p-5 space-y-3 min-h-48">
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                style={{ background: 'var(--cyber-glow)', border: '1px solid var(--border)', color: 'var(--cyber)' }}>
                🤖
              </div>
              <div className="rounded-xl rounded-tl-none px-4 py-3 text-sm max-w-xs"
                style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}>
                Hi! I'm Kanwal's AI Agent 👋<br />
                Ask me anything about his work, services, or book a free audit call!
              </div>
            </div>

            {/* Placeholder for n8n webhook */}
            <p className="text-xs text-center font-mono py-2" style={{ color: 'var(--text-muted)' }}>
              — Connect your n8n webhook below —
            </p>
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t flex items-center gap-2" style={{ borderColor: 'var(--border)' }}>
            <input
              type="text"
              placeholder="Ask me anything..."
              className="flex-1 bg-transparent text-sm outline-none font-body"
              style={{ color: 'var(--text-primary)' }}
              // TODO: Connect to n8n webhook URL
              // onKeyDown={(e) => e.key === 'Enter' && sendToWebhook(e.target.value)}
            />
            <button className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              style={{ background: 'var(--cyber)', color: '#000' }}>
              <Send size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 relative"
        style={{ background: 'var(--cyber)', color: '#000', boxShadow: '0 0 20px var(--cyber-glow)' }}
      >
        {open ? <X size={22} /> : <Bot size={22} />}
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping absolute" />
          </span>
        )}
      </button>
    </div>
  )
}
