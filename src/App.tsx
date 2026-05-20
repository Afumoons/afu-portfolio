import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial, OrbitControls } from '@react-three/drei'
import { Suspense, useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, BrainCircuit, Code2, DatabaseZap, Layers3, Mail, Rocket, ShieldCheck, Sparkles } from 'lucide-react'
import type { Mesh } from 'three'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    name: 'Olympic Furniture Group ERP',
    type: 'Enterprise Systems',
    summary: 'Internal ERP, operational dashboards, production workflows, and business tools for a furniture group environment.',
    stack: ['Laravel', 'PHP', 'Vue/Nuxt', 'MySQL', 'REST API'],
  },
  {
    name: 'UPQuality Audit Mutu',
    type: 'AI-assisted Audit Platform',
    summary: 'Audit and quality-control application with AI assistant thinking applied to structured operational workflows.',
    stack: ['Laravel', 'AI UX', 'Dashboard', 'SQL'],
  },
  {
    name: 'Aurora Chat',
    type: 'Realtime Product',
    summary: 'Modern chat system with WebSocket/Socket.IO architecture and a Next.js frontend direction.',
    stack: ['Next.js', 'TypeScript', 'Socket.IO', 'REST'],
  },
  {
    name: 'Autonomous Trading AI',
    type: 'Data + Automation',
    summary: 'Research-to-live trading system with strategy pools, MT5 execution, live monitoring, and operator tooling.',
    stack: ['Python', 'MT5', 'Data Pipelines', 'Risk Systems'],
  },
]

const capabilities = [
  ['Full-stack Delivery', 'Laravel/PHP, JavaScript, React, Nuxt/Vue, Flutter, REST APIs, SQL, and pragmatic deployment work.'],
  ['Frontend Craft', 'Responsive interfaces, motion systems, dashboards, design systems, conversion-focused landing pages.'],
  ['Operational Systems', 'ERP, internal tools, audit workflows, admin dashboards, data models, and role-based product logic.'],
  ['AI & Automation', 'AI-assisted workflows, trading automation, data pipelines, agent-friendly documentation, and monitoring.'],
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-copy > *', { y: 42, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out', stagger: 0.11 })
      gsap.fromTo('.visual-card', { scale: 0.92, rotate: -4, opacity: 0 }, { scale: 1, rotate: 0, opacity: 1, duration: 1.2, ease: 'elastic.out(1, .7)', delay: 0.2 })
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.fromTo(el, { y: 54, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 84%' },
        })
      })
      gsap.to('.orbit-line', {
        rotate: 360,
        duration: 28,
        repeat: -1,
        ease: 'none',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Afu portfolio home">Afu<span>.</span></a>
        <div>
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section" id="top">
        <div className="grain" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={16} /> Surabaya-based senior full-stack engineer</p>
          <h1>Frontend polish, backend discipline, and product systems that survive real operations.</h1>
          <p className="lead">
            I build responsive web products, internal ERPs, dashboards, realtime apps, and AI-assisted workflows — with a strong eye for interface detail and the engineering habits to ship.
          </p>
          <div className="hero-actions">
            <a className="primary" href="mailto:hello@example.com?subject=Project%20inquiry%20for%20Afu">Start a project <ArrowUpRight size={18} /></a>
            <a className="secondary" href="https://github.com/Afumoons" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={18} /></a>
          </div>
          <dl className="hero-stats" aria-label="Professional snapshot">
            <div><dt>Stack</dt><dd>Laravel · React · Nuxt · Flutter</dd></div>
            <div><dt>Focus</dt><dd>ERP · Dashboards · AI workflows</dd></div>
            <div><dt>Base</dt><dd>Surabaya, Indonesia</dd></div>
          </dl>
        </div>

        <aside className="visual-card" aria-label="Profile placeholder and 3D portfolio artifact">
          <div className="portrait-placeholder">
            <span>Photo placeholder</span>
            <small>Replace with Afu portrait</small>
          </div>
          <div className="canvas-wrap"><Scene /></div>
          <div className="orbit-line" aria-hidden="true" />
          <p className="card-caption">Design-aware engineering for clients who need both sharp UI and dependable systems.</p>
        </aside>
      </section>

      <section className="marquee" aria-label="Core technologies">
        <span>Laravel</span><span>PHP</span><span>React</span><span>Nuxt</span><span>Vue</span><span>Flutter</span><span>REST APIs</span><span>MySQL</span><span>PostgreSQL</span><span>GSAP</span>
      </section>

      <section className="section intro-grid" data-reveal>
        <div>
          <p className="section-kicker">Professional profile</p>
          <h2>Senior full-stack engineer with a taste for polished interfaces and operational depth.</h2>
        </div>
        <p>
          Afu has delivered ERP/internal applications, marketing surfaces, audit systems, government-style Laravel portals, and realtime product experiments. The work combines full-stack pragmatism with a growing frontend/design edge: motion, responsiveness, conversion clarity, and maintainable code.
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

      <section className="section work-section" id="work">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">Selected work DNA</p>
          <h2>Projects shaped around business process, automation, and user-facing clarity.</h2>
        </div>
        <div className="work-list">
          {projects.map((project, index) => (
            <article className="work-card" data-reveal key={project.name}>
              <span className="work-number">0{index + 1}</span>
              <div>
                <p className="work-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
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
          <p><strong>Practical systems thinking.</strong> Admin panels, audit trails, roles, reporting, API boundaries, and maintainable workflows.</p>
        </div>
      </section>

      <section className="section contact" id="contact" data-reveal>
        <p className="section-kicker">Available for selected builds</p>
        <h2>Need a frontend that looks premium and a system that actually works?</h2>
        <p>Send a short brief. I can help with landing pages, ERP modules, dashboards, AI-assisted workflows, and full-stack product delivery.</p>
        <div className="contact-actions">
          <a className="primary" href="mailto:hello@example.com?subject=Project%20inquiry%20for%20Afu"><Mail size={18} /> Email placeholder</a>
          <a className="secondary" href="https://github.com/Afumoons" target="_blank" rel="noreferrer"><Rocket size={18} /> View GitHub</a>
        </div>
      </section>

      <footer>
        <p>© {year} Afu — Full-stack web engineer. Built with React, GSAP, and Three.js.</p>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  )
}

export default App
