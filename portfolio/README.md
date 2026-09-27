# 🕷️ Prince Albert — Developer Portfolio

An industry-grade, interactive developer portfolio inspired by the **Spider-Man aesthetic** (referencing *spydyy-portfolio*), engineered with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and the native **Web Audio API**.

Built to showcase production-grade full-stack engineering, academic peer-reviewed AI publications, and deep system architecture capabilities.

---

## 🌟 Interactive Highlights & Easter Eggs

- **🎭 Interactive Hero Identity Unmasking**:
  Dual-layer hero canvas with smooth mouse-tracking spotlight mask. Moving your cursor across the hero unmasks the Spider-Man layer to reveal **Prince Albert** in the webbed suit underneath.
- **⚡ "THWIP!" Web-Shooter Click Effect**:
  Clicking anywhere on the screen fires an animated radial SVG web burst with 8 tensile strands and concentric web arcs, accompanied by a synthesized pneumatic web-release sound.
- **🚨 Spider-Sense Easter Egg (`Alt + S` or Click Logo)**:
  Press <kbd>Alt</kbd> + <kbd>S</kbd> (or <kbd>Option</kbd> + <kbd>S</kbd> on Mac), or click the **Prince Albert** logo in the top navbar to trigger screen-wide comic yellow/red zigzag tingle speedlines and chime arpeggio.
- **🔊 Native Web Audio API Synthesizer (0 KB MP3s)**:
  100% self-contained audio synthesizer in `lib/soundEffects.ts`—zero external audio files, zero network latency, instant offline support. Features a dedicated mute/unmute toggle in the navbar.
- **🎯 Spider-Man Target Lock-On Cursor**:
  Desktop custom crosshair reticle that tightens from 32px to 22px, rotates 45°, and pulses crimson when hovering over interactive cards, buttons, and links.
- **🎗️ Dual Crossed Slanted Marquee Banners**:
  Slanted ribbons (+4° crimson, -4° pitch black) continuously streaming skill stacks separated by custom spider badges (`spydy.png`) and web glyphs.
- **🕸️ Suspended Web-String Portrait**:
  Profile portrait hanging from the ceiling on a gradient web thread with gentle pendulum sway physics (`origin-top`) and ambient crimson breathing glow.

---

## 🚀 Featured Projects (Screenshots Included)

| Index | Project | Stack | Highlights |
|---|---|---|---|
| **01** | **[Lumen Academy](#)** | `React.js`, `TypeScript`, `Node.js`, `Express`, `PostgreSQL`, `Prisma ORM`, `Firebase`, `Playwright` | Live NEET/JEE exam-prep platform across **23 modules & 79 lessons**, versioned migrations, multi-provider AI abstraction layer, automated E2E test suite. |
| **02** | **[Tax-Shield: AI Tax Compliance](#)** | `Python`, `FastAPI`, `OCR`, `Machine Learning`, `REST API` | Automated micro-merchant tax & GST extraction engine. Published in **BMC Research Notes (Springer Nature)** after technical peer review. |
| **03** | **[AI Policy Intelligence System](#)** | `Python`, `FastAPI`, `Streamlit`, `Sentence-Transformers`, `NLP` | Industry capstone (TCS iON) using sentence-transformer semantic embeddings to match corporate policy clauses against regulatory frameworks in real time. |
| **04** | **[Loan Management System](#)** | `Java`, `Spring Boot`, `SQL`, `MVC Architecture`, `REST APIs` | Full-cycle banking loan application funnel, risk underwriting algorithms, amortization schedules, and SQL transaction ledger. |
| **05** | **[Data Pipeline & Analytics Engine](#)** | `Python`, `Pandas`, `NumPy`, `Scikit-Learn`, `Matplotlib`, `Seaborn` | Automated ETL data engineering pipelines with correlation heatmap matrices, anomaly detection scatter plots, and exploratory data analysis. |

*All 5 project cards include high-resolution UI screenshots located in [`public/projects/`](./public/projects/).*

---

## 🛠️ Technical Stack & Skills Arsenal

### **Frontend & UI**
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS, Vanilla CSS, Custom Comic Typography
- **Animations**: Framer Motion 11
- **Icons & Assets**: Custom SVG Web Bursts, Favicon (`favicon.ico`), Spider-Man Theme Kit

### **Backend & Architecture**
- **Runtime**: Node.js & Express.js
- **Enterprise**: Java & Spring Boot
- **AI/ML**: Python, FastAPI, Sentence-Transformers, Streamlit
- **Databases**: PostgreSQL, MySQL, Prisma ORM, Supabase
- **Testing & QA**: Playwright E2E Test Automation

---

## 📂 Project Structure

```
portfolio/
├── app/
│   ├── favicon.ico              # Spider-Man Favicon
│   ├── globals.css              # Comic shadows, animations, and crosshair styles
│   ├── layout.tsx               # Root layout with Outfit + JetBrains Mono & SEO meta
│   └── page.tsx                 # Main single-page application
├── components/
│   ├── About.tsx                # "Behind the Mask" - suspended portrait & research bio
│   ├── Certifications.tsx       # Verified credentials & honors cards
│   ├── Contact.tsx              # Interactive contact form with sound & click-to-copy
│   ├── Experience.tsx           # Vertical timeline with glowing spider nodes
│   ├── Footer.tsx               # Footer with Spider quote & back-to-top trigger
│   ├── Hero.tsx                 # Golden-ratio hero with mouse unmasking & marquee
│   ├── Navbar.tsx               # Glassmorphic header with scroll-spy & audio toggle
│   ├── Skills.tsx               # Matrix cards with sliding red fill & filter tabs
│   ├── SpiderInteractions.tsx   # Web-shooter bursts, custom cursor, Spider-Sense
│   └── Work.tsx                 # Featured projects with screenshots & highlight badges
├── lib/
│   ├── data.ts                  # Centralized resume, project, and experience data
│   └── soundEffects.ts          # Native Web Audio API synthesizer
├── public/
│   ├── favicon.ico              # Standard multi-resolution favicon
│   ├── prince-albert.jpg        # Professional portrait
│   ├── Prince_Albert_Resume.pdf # Downloadable resume PDF
│   ├── projects/                # UI screenshots for all 5 projects (1-5)
│   └── spiderman/               # Spider-Man thematic assets & character art
└── tailwind.config.ts           # Spider-red tokens, custom keyframes & timings
```

---

## ⚡ Getting Started Locally

### 1. Prerequisites
- **Node.js** (v18.17+ or v20+)
- **npm** (v9+)

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/Prince121711/prince-albert-portfolio.git

# Navigate into the project folder
cd prince-albert-portfolio/portfolio

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🌐 Deployment

The project is optimized for 1-click deployment on **[Vercel](https://vercel.com/)**:
1. Push your repository to GitHub.
2. Import the repository in your Vercel Dashboard.
3. Set the Root Directory to `portfolio`.
4. Deploy! Next.js static page generation will pre-render all routes in seconds.

---

## 📬 Contact & Author

**Prince Albert**  
*Full Stack Developer & AI Researcher*  
- 📍 Salem, Tamil Nadu, India  
- 📧 [princeprince45613@gmail.com](mailto:princeprince45613@gmail.com)  
- 📱 +91 7502138129  
- 🐙 GitHub: [@Prince121711](https://github.com/Prince121711)  
- 💼 LinkedIn: [/in/prince-albert1217](https://linkedin.com/in/prince-albert1217)  

> *"With great power comes great code."*
