import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial, OrbitControls } from '@react-three/drei'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, BrainCircuit, BriefcaseBusiness, Code2, DatabaseZap, GraduationCap, Layers3, Mail, Rocket, ShieldCheck, Sparkles } from 'lucide-react'
import type { Mesh } from 'three'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    name: 'ClientFlow Lite — SaaS Client Portal',
    type: 'Founder SaaS Product',
    summary: 'Built a global-first SaaS MVP for freelance developers and micro-agencies: a polished client portal for projects, milestones, tasks, approvals, and invoice visibility on a lean Vercel + Supabase stack.',
    stack: ['React', 'TypeScript', 'Supabase', 'GSAP', 'SaaS MVP'],
    link: 'https://clientflow-lite.vercel.app/',
  },
  {
    name: 'Audit Mutu — AI-Powered Quality Audit Platform',
    type: 'AI + SaaS Workflow',
    summary: 'Led a digital audit platform deployed at FK Universitas Trisakti and FK Universitas Muhammadiyah Semarang, reducing audit completion time by 30% with LLM-powered document analysis and auditor support.',
    stack: ['Laravel', 'ReactJS', 'ChatGPT', 'Groq', 'SCSS'],
  },
  {
    name: 'Olympic Furniture Group ERP',
    type: 'Enterprise Operations',
    summary: 'Contributed to ERP Olympic for 50+ internal users across Procurement, Sales, Warehouse & Inventory, Marketing Operations, and Accounting with a focus on backend logic, integration, and data consistency.',
    stack: ['Laravel', 'PHP', 'SQL', 'REST APIs', 'ERP'],
  },
  {
    name: 'D-Namis Internal Apps',
    type: 'Lead Developer',
    summary: 'Designed and owned two internal applications for ~20 users: a lightweight CMS for corporate microsites and an asset lending system for the Production House division.',
    stack: ['Laravel', 'CMS', 'MySQL', 'Internal Tools'],
  },
  {
    name: '#dudukgaktakutambruk Campaign Site',
    type: 'Interactive Frontend',
    summary: 'Built a motion-rich campaign website using Nuxt.js, GSAP animations, and integrated 3D furniture assets to elevate a brand marketing experience.',
    stack: ['Nuxt.js', 'GSAP', '3D Assets', 'Responsive UI'],
  },
  {
    name: 'MORE App — Mobile Commerce Flow',
    type: 'Mobile UX',
    summary: 'Improved UI and corrected app flow issues for GMB’s proprietary Flutter-based mobile e-commerce platform.',
    stack: ['Flutter', 'Dart', 'Mobile UI/UX'],
  },
  {
    name: 'Ereses Mojokerto — DPRD Portal',
    type: 'Government Portal',
    summary: 'Designed and implemented a citizen-facing portal for Mojokerto Regency’s legislative body with CMS-backed information services and online complaint features.',
    stack: ['Laravel', 'PHP', 'CMS', 'Accessible UI'],
  },
]

const experiences = [
  ['Olympic Furniture Group (GMB)', 'Full Stack Web Developer', 'Nov 2024 – Oct 2025', 'Enterprise ERP, D-Namis internal apps, Nuxt/GSAP marketing campaigns, brand UI refreshes, and Flutter MORE App improvements.'],
  ['PT Utama Padma Qualiti (UPQuality)', 'Full Stack Web Developer', 'Mar 2022 – Dec 2023', 'Built Audit Mutu, integrated ChatGPT/Groq-powered audit assistant, and delivered Agile/Scrum product increments for Indonesian institutions.'],
  ['PT Tatacipta Teknologi Indonesia', 'Web Developer', 'Aug 2021 – Oct 2022', 'Developed Laravel-based government web applications, translated UI/UX specs into interfaces, and contributed to code reviews and Agile ceremonies.'],
]

const techStack = ['LARAVEL', 'PHP', 'REACT', 'TYPESCRIPT', 'SUPABASE', 'NUXT', 'VUE', 'FLUTTER', 'REST API', 'MYSQL', 'POSTGRESQL', 'GSAP', 'THREE.JS', 'LLM API']

const capabilities = [
  ['Full-stack Delivery', 'Laravel/PHP, JavaScript, React, Nuxt/Vue, Flutter, REST APIs, SQL, MySQL/PostgreSQL, and pragmatic deployment work.'],
  ['Frontend Craft', 'Responsive interfaces, motion systems, dashboards, design systems, conversion-focused landing pages, GSAP, and 3D asset integration.'],
  ['Operational Systems', 'ERP, CMS, internal tools, audit workflows, admin dashboards, data models, reporting, and role-based product logic.'],
  ['AI & Automation', 'LLM integrations with ChatGPT/Groq, AI-powered chatbots, document analysis automation, trading automation, and monitoring.'],
]

function KineticArtifact() {
  const core = useRef<Mesh>(null)
  const ring = useRef<Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (core.current) {
      core.current.rotation.x = t * 0.33
      core.current.rotation.y = t * 0.52
    }
    if (ring.current) {
      ring.current.rotation.x = t * 0.18
      ring.current.rotation.z = t * -0.28
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.7} floatIntensity={1.1}>
      <mesh ref={ring} scale={[2.4, 2.4, 2.4]}>
        <torusGeometry args={[1.1, 0.018, 16, 96]} />
        <meshStandardMaterial color="#d7ff51" emissive="#9cff00" emissiveIntensity={1.2} />
      </mesh>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.95, 1]} />
        <MeshTransmissionMaterial
          color="#8ffcff"
          thickness={0.7}
          roughness={0.12}
          transmission={0.88}
          chromaticAberration={0.08}
          anisotropy={0.25}
        />
      </mesh>
      <mesh position={[0, -1.42, 0.1]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.42, 0.42, 0.035]} />
        <meshStandardMaterial color="#f8fafc" emissive="#ffffff" emissiveIntensity={0.28} />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5.4], fov: 42 }} dpr={[1, 1.8]} aria-label="Abstract 3D glass artifact representing Afu's frontend engineering craft">
      <ambientLight intensity={1.1} />
      <directionalLight position={[3, 4, 5]} intensity={2.4} color="#d7ff51" />
      <pointLight position={[-3, -2, 3]} intensity={3} color="#8ffcff" />
      <Suspense fallback={null}>
        <KineticArtifact />
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.7} />
    </Canvas>
  )
}

function App() {
  const year = useMemo(() => new Date().getFullYear(), [])
  const [loading, setLoading] = useState(true)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [cursorVariant, setCursorVariant] = useState<'default' | 'project'>('default')

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 850)
    const moveCursor = (event: MouseEvent) => {
      if (!cursorRef.current) return
      gsap.to(cursorRef.current, { x: event.clientX, y: event.clientY, duration: 0.12, ease: 'power2.out' })
    }
    window.addEventListener('mousemove', moveCursor, { passive: true })
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  const handleMagneticMove = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget
    const rect = target.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    gsap.to(target, { x: x * 0.18, y: y * 0.18, duration: 0.35, ease: 'power3.out' })
  }

  const handleMagneticLeave = (event: React.MouseEvent<HTMLElement>) => {
    gsap.to(event.currentTarget, { x: 0, y: 0, duration: 0.65, ease: 'elastic.out(1, 0.35)' })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.loading-screen', { yPercent: -100, duration: 0.85, ease: 'power4.inOut', delay: 0.05 })
      gsap.fromTo('.hero-copy > *', { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power4.out', stagger: 0.1, delay: 0.12 })
      gsap.fromTo('.visual-card', { scale: 0.94, rotate: -3, opacity: 0 }, { scale: 1, rotate: 0, opacity: 1, duration: 1.2, ease: 'elastic.out(1, .75)', delay: 0.2 })

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.fromTo(el, { y: 54, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 84%', toggleActions: 'play none none reverse' },
        })
      })

      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        gsap.to(el, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
        })
      })

      gsap.to('.scroll-progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: 0.2 },
      })

      ScrollTrigger.create({
        trigger: '.experience-rail',
        start: 'top 70%',
        end: 'bottom 60%',
        onEnter: () => document.body.classList.add('timeline-active'),
        onLeaveBack: () => document.body.classList.remove('timeline-active'),
      })

      gsap.to('.orbit-line', { rotate: 360, duration: 28, repeat: -1, ease: 'none' })
      gsap.to('.tech-track', { xPercent: -50, duration: 24, repeat: -1, ease: 'none' })
    })
    return () => ctx.revert()
  }, [])

  return (
    <main className={loading ? 'is-loading' : ''}>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="loading-screen" aria-hidden={!loading}>
        <div>
          <span>AFU</span>
          <p>Loading interface</p>
        </div>
      </div>
      <div ref={cursorRef} className={`custom-cursor ${cursorVariant === 'project' ? 'is-project' : ''}`} aria-hidden="true">
        <span>VIEW</span>
      </div>
      <div className="section-dots" aria-label="Section shortcuts">
        <a href="#top" aria-label="Hero" />
        <a href="#capabilities" aria-label="Capabilities" />
        <a href="#experience" aria-label="Experience" />
        <a href="#work" aria-label="Work" />
        <a href="#contact" aria-label="Contact" />
      </div>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Afu portfolio home">Afu<span>.</span></a>
        <div>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section" id="top">
        <div className="grain" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={16} /> Surabaya-based senior full-stack engineer</p>
          <h1>Design-led full-stack engineering for systems that need to look sharp and work hard.</h1>
          <p className="lead">
            I build production-ready web and mobile applications across ERP systems, e-commerce flows, AI-integrated tools, government portals, and motion-rich frontend experiences.
          </p>
          <div className="hero-actions">
            <a className="primary magnetic-btn" onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave} href="mailto:afumoons@gmail.com?subject=Project%20inquiry%20for%20Afu">Start a project <ArrowUpRight size={18} /></a>
            <a className="secondary magnetic-btn" onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave} href="https://github.com/Afumoons" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={18} /></a>
          </div>
          <dl className="hero-stats" aria-label="Professional snapshot">
            <div><dt>Experience</dt><dd>3+ years production delivery</dd></div>
            <div><dt>Stack</dt><dd>Laravel · React · Nuxt · Flutter</dd></div>
            <div><dt>Impact</dt><dd>ERP · AI audit · 30% faster audits</dd></div>
          </dl>
        </div>

        <aside className="visual-card" aria-label="Afu portrait and 3D portfolio artifact" data-parallax>
          <div className="portrait-frame">
            <img src="/afu-portfolio/afu-portrait.png" alt="Afu Sidhi Pamekas portrait" />
            <span className="portrait-glow" aria-hidden="true" />
          </div>
          <div className="canvas-wrap"><Scene /></div>
          <div className="orbit-line" aria-hidden="true" />
          <p className="card-caption">Design-aware engineering for clients who need sharp UI, reliable systems, and fast execution.</p>
        </aside>
      </section>

      <section className="tech-marquee" aria-label="Core technologies">
        <div className="tech-track">
          {[...techStack, ...techStack].map((tech, index) => (
            <span key={`${tech}-${index}`}>{tech}</span>
          ))}
        </div>
      </section>

      <section className="section intro-grid" data-reveal>
        <div>
          <p className="section-kicker">Professional profile</p>
          <h2>Senior full-stack engineer with frontend taste and operational depth.</h2>
        </div>
        <p>
          Afu has 3+ years of experience delivering scalable production-ready applications: enterprise ERP, e-commerce and mobile flows, AI-integrated audit tools, CMS-backed portals, and brand-facing campaign sites. The throughline is practical ownership — from architecture and backend logic to responsive UI, motion, and deployable outcomes.
        </p>
      </section>

      <section className="section capability-grid" id="capabilities">
        {capabilities.map(([title, text], index) => (
          <article className="capability-card" data-reveal key={title}>
            <div className="cap-icon" aria-hidden="true">{[<Code2 />, <Layers3 />, <DatabaseZap />, <BrainCircuit />][index]}</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading" data-reveal>
          <p className="section-kicker"><BriefcaseBusiness size={16} /> Experience</p>
          <h2>Built inside real organizations, not just portfolio sandboxes.</h2>
        </div>
        <div className="experience-rail">
          {experiences.map(([company, role, period, detail]) => (
            <article className="experience-card" data-reveal key={company}>
              <span>{period}</span>
              <div>
                <h3>{company}</h3>
                <p className="role">{role}</p>
                <p>{detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">Selected work DNA</p>
          <h2>Projects shaped around business process, automation, and user-facing clarity.</h2>
        </div>
        <div className="work-list">
          {projects.map((project, index) => (
            <article className="work-card" data-reveal key={project.name} onMouseEnter={() => setCursorVariant('project')} onMouseLeave={() => setCursorVariant('default')}>
              <span className="work-number">0{index + 1}</span>
              <div>
                <p className="work-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                {'link' in project && project.link && <a className="work-link" href={project.link} target="_blank" rel="noreferrer">View live SaaS <ArrowUpRight size={16} /></a>}
                <ul>
                  {project.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section trust-panel" data-reveal>
        <div>
          <ShieldCheck size={28} />
          <h2>What clients can expect</h2>
        </div>
        <div className="trust-grid">
          <p><strong>Clear execution.</strong> From vague operational needs to scoped features, database shape, UI, and deployment path.</p>
          <p><strong>Modern interaction.</strong> Motion, responsiveness, accessibility, SEO metadata, and detail that makes the product feel premium.</p>
          <p><strong>Practical systems thinking.</strong> Admin panels, audit trails, CMS, ERP logic, reporting, API boundaries, and maintainable workflows.</p>
        </div>
      </section>

      <section className="section education-strip" data-reveal>
        <GraduationCap size={24} />
        <p><strong>Bachelor’s Degree — Management Information Systems</strong>, UPN “Veteran” Jawa Timur · GPA 3.62 / 4.00 · BNSP Junior Web Programmer Certificate.</p>
      </section>

      <section className="section contact" id="contact" data-reveal>
        <p className="section-kicker">Available for selected builds</p>
        <h2>Need a frontend that looks premium and a system that actually works?</h2>
        <p>Send a short brief. I can help with landing pages, ERP modules, dashboards, AI-assisted workflows, and full-stack product delivery.</p>
        <div className="contact-actions">
          <a className="primary magnetic-btn" onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave} href="mailto:afumoons@gmail.com?subject=Project%20inquiry%20for%20Afu"><Mail size={18} /> afumoons@gmail.com</a>
          <a className="secondary magnetic-btn" onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave} href="https://www.linkedin.com/in/afu-sidhi-pamekas-62b725194/" target="_blank" rel="noreferrer"><ArrowUpRight size={18} /> LinkedIn</a>
          <a className="secondary magnetic-btn" onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave} href="https://github.com/Afumoons" target="_blank" rel="noreferrer"><Rocket size={18} /> View GitHub</a>
        </div>
      </section>

      <footer>
        <p>© {year} Afu Sidhi Pamekas — Senior Full-stack web engineer. Built with React, GSAP ScrollTrigger, and Three.js.</p>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  )
}

export default App
