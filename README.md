# Kanwal Kumar (AI) — Portfolio
> **URL:** `kanwalkumar.innoventix360.com`

Built with **Next.js 14 + Tailwind CSS + Framer Motion**

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## ☁️ Deploy to Vercel

### Option A: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B: GitHub → Vercel
1. Push this repo to GitHub (`github.com/kumarkanwal`)
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your repo → Deploy
4. Vercel auto-detects Next.js ✅

---

## 🌐 Connect Custom Domain (innoventix360.com)

1. In Vercel Dashboard → Your Project → **Settings → Domains**
2. Add: `kanwalkumar.innoventix360.com`
3. In your domain registrar DNS settings, add:
   ```
   Type: CNAME
   Name: kanwalkumar
   Value: cname.vercel-dns.com
   ```
4. Wait 5–30 min for propagation ✅

---

## 🤖 Connect Your WhatsApp AI Agent (Chat Widget)

Open `components/ChatWidget.tsx` and find the TODO comment.
Replace with your n8n webhook URL:

```typescript
const sendToWebhook = async (message: string) => {
  const res = await fetch('YOUR_N8N_WEBHOOK_URL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, source: 'portfolio-chat' })
  })
  const data = await res.json()
  // Handle response and display in chat
}
```

---

## 📁 Project Structure

```
kanwal-portfolio/
├── app/
│   ├── globals.css        # All CSS variables, animations, themes
│   ├── layout.tsx         # Root layout + SEO meta
│   └── page.tsx           # Main page assembly
├── components/
│   ├── ThemeProvider.tsx  # Dark/light toggle logic
│   ├── Navbar.tsx         # Sticky nav + mobile menu
│   ├── NeuralBackground.tsx # Animated canvas neural network
│   ├── Hero.tsx           # Hero + typewriter + photo
│   ├── About.tsx          # Bio + timeline info
│   ├── Skills.tsx         # Skill bars + tech grid
│   ├── Experience.tsx     # Career timeline
│   ├── Projects.tsx       # Project cards
│   ├── Certifications.tsx # Certs + awards + publications
│   ├── Contact.tsx        # Email + socials
│   ├── Footer.tsx         # Footer
│   └── ChatWidget.tsx     # AI chat widget (bottom-right)
├── public/
│   └── kanwal.png         # Your profile photo
└── package.json
```

---

## 🎨 Customization

- **Colors**: Edit `tailwind.config.js` → `colors.cyber`
- **Content**: Update each component file directly
- **Projects**: Edit `components/Projects.tsx` → `projects` array
- **Skills**: Edit `components/Skills.tsx` → `skillCategories`
- **Theme**: Dark mode is default — toggle persists in localStorage

---

## 🔗 Your Links
- LinkedIn: https://www.linkedin.com/in/kanwal-kumar-ai/
- GitHub: https://github.com/kumarkanwal
- X: https://x.com/Kanwalkumar01
- Agency: https://codevcreation.com/

---

Built with 🤖 by Claude for Kanwal Kumar (AI) — Innoventix360
