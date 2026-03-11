'use client'
import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Kanwal Kumar (AI) — Agentic AI & Automation Developer</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="description" content="I build 24/7 AI Systems that qualify & book while you sleep. Agentic AI Developer specializing in n8n, LangChain, OpenAI & workflow automation." />
        <meta name="keywords" content="AI Automation, Agentic AI, n8n, LangChain, OpenAI, Workflow Automation, Kanwal Kumar" />
        <meta property="og:title" content="Kanwal Kumar (AI) — Agentic AI Developer" />
        <meta property="og:description" content="I build 24/7 AI Systems that automate your business and scale without overhead." />
        <meta property="og:url" content="https://kanwalkumar.innoventix360.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
