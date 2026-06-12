import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Github, Linkedin, Mail, Code2, Download, ArrowUpRight, MapPin,
  Menu, X, ExternalLink, Sparkles, Database, Server, Cpu, ArrowDown,
} from 'lucide-react'
import { profile, stats, experience, projects, skills } from './data'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.21, 0.8, 0.3, 1] },
  }),
}

function SectionTitle({ kicker, title }) {
  return (
    <div className="mb-12 text-center">
      <motion.p
        variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-light"
      >
        <span className="h-px w-6 bg-brand-light/60" /> {kicker}
      </motion.p>
      <motion.h2
        variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
    </div>
  )
}

/* ---------- Navbar ---------- */
function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <nav className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 sm:px-6 transition-all duration-300 ${scrolled ? 'glass py-2.5' : 'py-2'}`}>
        <a href="#home" className="group flex items-center gap-2 font-bold text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-cyan text-sm font-black text-white shadow-lg shadow-brand/30">SS</span>
          <span className="hidden text-sm tracking-wide sm:block">Sagar Saini</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white">
              {n.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a href={profile.resume} download
            className="hidden items-center gap-1.5 rounded-lg bg-gradient-to-r from-brand to-brand-glow px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:shadow-brand/50 sm:inline-flex">
            <Download size={15} /> Resume
          </a>
          <button onClick={() => setOpen((v) => !v)} className="grid h-10 w-10 place-items-center rounded-lg text-white md:hidden" aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="glass mx-4 mt-2 rounded-2xl p-3 md:hidden">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/5">
                {n.label}
              </a>
            ))}
            <a href={profile.resume} download onClick={() => setOpen(false)}
              className="mt-1 flex items-center gap-2 rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white">
              <Download size={15} /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-28">
      <div className="aurora left-[-10%] top-[-5%] h-[420px] w-[420px] bg-brand-glow" />
      <div className="aurora right-[-8%] top-[20%] h-[380px] w-[380px] bg-brand-cyan animate-pulseGlow" />
      <div className="aurora bottom-[-15%] left-[30%] h-[360px] w-[360px] bg-indigo-600" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-900" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.div variants={fadeUp} initial="hidden" animate="show"
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for full-stack & backend roles
          </motion.div>

          <motion.h1 variants={fadeUp} custom={1} initial="hidden" animate="show"
            className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Hi, I'm <span className="text-gradient">Sagar Saini</span>.
          </motion.h1>

          <motion.p variants={fadeUp} custom={2} initial="hidden" animate="show"
            className="mt-4 text-xl font-semibold text-brand-light sm:text-2xl">
            {profile.role}
          </motion.p>

          <motion.p variants={fadeUp} custom={3} initial="hidden" animate="show"
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
            {profile.tagline}
          </motion.p>

          <motion.div variants={fadeUp} custom={4} initial="hidden" animate="show"
            className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-glow px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:shadow-brand/60">
              View my work <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href={profile.resume} download
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              <Download size={16} /> Download Resume
            </a>
          </motion.div>

          <motion.div variants={fadeUp} custom={5} initial="hidden" animate="show"
            className="mt-8 flex items-center gap-3">
            <SocialIcon href={profile.links.github} label="GitHub"><Github size={18} /></SocialIcon>
            <SocialIcon href={profile.links.linkedin} label="LinkedIn"><Linkedin size={18} /></SocialIcon>
            <SocialIcon href={profile.links.leetcode} label="LeetCode"><Code2 size={18} /></SocialIcon>
            <SocialIcon href={`mailto:${profile.email}`} label="Email"><Mail size={18} /></SocialIcon>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto hidden md:block">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand/40 to-brand-cyan/40 blur-2xl" />
          <div className="relative animate-floaty">
            <div className="rounded-[2rem] bg-gradient-to-tr from-brand to-brand-cyan p-[2px] shadow-2xl shadow-brand/20">
              <div className="overflow-hidden rounded-[1.9rem] bg-ink-850">
                <Avatar />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition hover:text-brand-light">
        <ArrowDown size={22} className="animate-bounce" />
      </a>
    </section>
  )
}

function Avatar() {
  const [err, setErr] = useState(false)
  if (err) {
    return (
      <div className="grid aspect-[4/5] w-72 place-items-center bg-gradient-to-br from-ink-700 to-ink-850">
        <div className="text-center">
          <div className="text-6xl font-black text-gradient">SS</div>
          <p className="mt-3 px-6 text-xs text-slate-500">Add <code className="text-brand-light">profile.jpg</code> to the <code className="text-brand-light">public/</code> folder</p>
        </div>
      </div>
    )
  }
  return (
    <img src="/profile.jpg" alt="Sagar Saini" onError={() => setErr(true)}
      className="aspect-[4/5] w-72 object-cover" />
  )
}

function SocialIcon({ href, label, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-0.5 hover:border-brand/50 hover:text-white">
      {children}
    </a>
  )
}

/* ---------- About ---------- */
function About() {
  const icons = [Server, Sparkles, Cpu, Database]
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionTitle kicker="About" title="A bit about me" />
      <div className="grid items-start gap-10 md:grid-cols-[1.3fr_1fr]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="space-y-5 text-lg leading-relaxed text-slate-300">
          <p>{profile.blurb}</p>
          <p className="text-base text-slate-400">
            My core stack is <span className="text-white">Python, Django, Django REST Framework, FastAPI and Flask</span> on the
            backend, with <span className="text-white">React</span> on the front. I'm comfortable across the whole lifecycle —
            data modeling, JWT auth, Redis caching, and shipping to Docker, Railway and Vercel.
          </p>
        </motion.div>
        <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div key={s.label} className="card-glow rounded-2xl border border-white/10 bg-ink-800/60 p-5">
                <Icon size={20} className="mb-3 text-brand-light" />
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="mt-1 text-xs leading-snug text-slate-400">{s.label}</div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

/* ---------- Experience ---------- */
function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-6 py-24">
      <SectionTitle kicker="Career" title="Where I've worked" />
      <div className="relative">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-brand via-brand/40 to-transparent md:left-1/2" />
        <div className="space-y-10">
          {experience.map((job, i) => (
            <motion.div key={job.role}
              variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
              className={`relative pl-10 md:w-1/2 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}>
              <span className={`absolute top-2 grid h-6 w-6 place-items-center rounded-full bg-ink-900 ring-2 ring-brand left-0 md:left-auto ${i % 2 === 0 ? 'md:-right-3' : 'md:-left-3'}`}>
                <span className="h-2 w-2 rounded-full bg-brand-light" />
              </span>
              <div className="card-glow rounded-2xl border border-white/10 bg-ink-800/60 p-6">
                <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-light">{job.period}</span>
                <h3 className="mt-3 text-lg font-bold text-white">{job.role}</h3>
                <p className="text-sm font-medium text-slate-400">{job.company}</p>
                <ul className={`mt-4 space-y-2.5 text-sm leading-relaxed text-slate-300 ${i % 2 === 0 ? 'md:text-left' : ''}`}>
                  {job.points.map((p, j) => (
                    <li key={j} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Projects ---------- */
function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionTitle kicker="Work" title="Featured projects" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article key={p.name}
            variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }}
            className={`card-glow group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-800/60 p-6 ${p.featured ? 'lg:col-span-1' : ''}`}>
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
            <div className="relative flex h-full flex-col">
              <div className="mb-4 flex items-start justify-between gap-3">
                <h3 className="text-base font-bold leading-snug text-white">{p.name}</h3>
                {p.live && (
                  <span className="shrink-0 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-400">Live</span>
                )}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-slate-400">{p.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-medium text-slate-300">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-4 border-t border-white/5 pt-4">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light transition hover:text-white">
                    <ExternalLink size={15} /> Live demo
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 transition hover:text-white">
                    <Github size={15} /> {p.github.includes('/pull/') ? 'View PR' : 'Code'}
                  </a>
                )}
                {!p.live && !p.github && (
                  <span className="text-xs text-slate-500">Client / proprietary work</span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

/* ---------- Skills ---------- */
function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-5xl px-6 py-24">
      <SectionTitle kicker="Toolbox" title="Skills & technologies" />
      <div className="space-y-5">
        {skills.map((s, i) => (
          <motion.div key={s.group}
            variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid gap-3 rounded-2xl border border-white/10 bg-ink-800/40 p-5 sm:grid-cols-[160px_1fr] sm:items-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-light">{s.group}</h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((t) => (
                <span key={t}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-brand/40 hover:text-white">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ---------- Contact ---------- */
function Contact() {
  const cards = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, cta: 'Say hello' },
    { icon: Linkedin, label: 'LinkedIn', value: 'sagar-saini', href: profile.links.linkedin, cta: 'Connect' },
    { icon: Github, label: 'GitHub', value: 'Sagar231', href: profile.links.github, cta: 'Follow' },
    { icon: Code2, label: 'LeetCode', value: 'sagarsaini_', href: profile.links.leetcode, cta: 'Top 13%' },
  ]
  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-24">
      <SectionTitle kicker="Contact" title="Let's build something" />
      <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="mx-auto mb-12 max-w-xl text-center text-slate-400">
        I'm open to full-stack and backend engineering roles. The fastest way to reach me is email — or find me on the
        platforms below. <span className="inline-flex items-center gap-1 text-slate-500"><MapPin size={14} /> {profile.location}</span>
      </motion.p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <motion.a key={c.label} href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
            variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="card-glow group flex flex-col items-center rounded-2xl border border-white/10 bg-ink-800/60 p-6 text-center">
            <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand/20 to-brand-cyan/10 text-brand-light transition group-hover:from-brand group-hover:to-brand-glow group-hover:text-white">
              <c.icon size={20} />
            </span>
            <div className="text-xs uppercase tracking-wider text-slate-500">{c.label}</div>
            <div className="mt-1 text-sm font-semibold text-white">{c.value}</div>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand-light opacity-0 transition group-hover:opacity-100">
              {c.cta} <ArrowUpRight size={13} />
            </span>
          </motion.a>
        ))}
      </div>
      <motion.div variants={fadeUp} custom={4} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="mt-12 text-center">
        <a href={profile.resume} download
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-glow px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:shadow-brand/60">
          <Download size={16} /> Download my resume
        </a>
      </motion.div>
    </section>
  )
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Sagar Saini. Built with React, Vite & Tailwind.</p>
        <div className="flex items-center gap-3">
          <SocialIcon href={profile.links.github} label="GitHub"><Github size={16} /></SocialIcon>
          <SocialIcon href={profile.links.linkedin} label="LinkedIn"><Linkedin size={16} /></SocialIcon>
          <SocialIcon href={profile.links.leetcode} label="LeetCode"><Code2 size={16} /></SocialIcon>
          <SocialIcon href={`mailto:${profile.email}`} label="Email"><Mail size={16} /></SocialIcon>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-900 selection:bg-brand/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
