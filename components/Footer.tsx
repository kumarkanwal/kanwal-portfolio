'use client'

export default function Footer() {
  return (
    <footer className="relative py-10 px-6 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded border flex items-center justify-center text-xs font-mono font-bold"
            style={{ borderColor: 'var(--cyber)', color: 'var(--cyber)', background: 'var(--cyber-glow)' }}>
            KK
          </div>
          <span className="font-display font-600 text-sm" style={{ color: 'var(--text-primary)' }}>
            Kanwal Kumar <span style={{ color: 'var(--cyber)' }}>(AI)</span>
          </span>
        </div>
        <p className="font-mono text-xs text-center" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Built with ❤️ By "Kanwal Kumar(AI)"
        </p>
        <p className="font-mono text-xs" style={{ color: 'var(--cyber)' }}>
          Automate. Scale. Dominate.
        </p>
      </div>
    </footer>
  )
}
