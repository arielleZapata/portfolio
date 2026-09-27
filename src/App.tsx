const experience = [
  { role: "Software Developer", company: "Haversack LLC", dates: "Mar 2026 — Present", mark: "01", copy: "Building full-stack product features with Django, React, and Google Cloud, turning requirements into maintainable workflows." },
  { role: "Adjunct Professor · Data Science", company: "Johnson & Wales University Online", dates: "2026 — Present", mark: "02", copy: "Teaching data science through practical analysis, clear explanations, and real-world problem solving." },
  { role: "Professional Tutor · Statistics", company: "Johnson & Wales University", dates: "2024 — Present", mark: "03", copy: "Making quantitative ideas approachable and helping students build confidence with statistics." },
  { role: "Animal Care & Control Officer", company: "City of Charlotte", dates: "Nov 2024 — Present", mark: "04", copy: "Working where public service, animal welfare, documentation, communication, and fast decisions meet." },
]

const projects = [
  { title: "TourneyHero", type: "SPORT × SOFTWARE", symbol: "TH", copy: "A tournament operating system for organizers, coaches, athletes, brackets, memberships, live area queues, and payments.", stack: ["Next.js 15", "TypeScript", "Express", "Prisma", "Socket.IO", "AWS"], className: "project-violet" },
  { title: "Bright Tails", type: "ANIMALS × PRODUCT", symbol: "BT", copy: "A training-business platform with CRM, pet profiles, lessons, rescue credits, packages, Stripe payments, messaging, and booking workflows.", stack: ["Next.js", "Supabase", "Stripe", "Tailwind"], className: "project-mint" },
  { title: "TKD Archive", type: "TAEKWONDO × DATA", symbol: "TKD", copy: "A searchable archive concept that transforms long taekwondo livestreams into athlete-level match clips and organized tournament collections.", stack: ["React", "Automation", "Video workflows", "Data"], className: "project-coral" },
]

const skills = ["Python", "R", "TypeScript", "JavaScript", "Java", "C / C++ / C#", "React", "Next.js", "Django", "Node + Express", "Supabase", "PostgreSQL", "MySQL", "MongoDB", "AWS", "Google Cloud", "Prisma", "Socket.IO", "Stripe", "R Shiny"]

function DnaArt() {
  return <div className="dna" aria-hidden="true">{Array.from({ length: 10 }).map((_, i) => <span key={i}><i /><b /><i /></span>)}</div>
}

function App() {
  return (
    <main>
      <div className="noise" />
      <header className="nav shell">
        <a className="brand" href="#top"><span>AZ</span></a>
        <nav><a href="#story">Story</a><a href="#work">Work</a><a href="#projects">Projects</a><a href="#education">Education</a></nav>
        <a className="navCta" href="mailto:zapataarielle@gmail.com">Say hello ↗</a>
      </header>

      <section id="top" className="hero shell">
        <div className="heroGlow glowOne" /><div className="heroGlow glowTwo" />
        <div className="heroCopy">
          <p className="kicker"><span className="pulse" /> SOFTWARE ENGINEER · BIOINFORMATICIAN · BUILDER</p>
          <h1><span>ARIELLE</span><span className="outline">ZAPATA</span></h1>
          <p className="heroStatement">I build at the intersection of <strong>code</strong>, <strong>science</strong>, <strong>animals</strong>, and <strong>competition</strong>.</p>
          <div className="heroLinks"><a href="#projects">Explore my work ↓</a><a href="https://github.com/arielleZapata" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/arielle-zapata/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        </div>
        <div className="heroVisual">
          <div className="orbit orbitOne"><span>PY</span><span>R</span><span>TS</span></div>
          <div className="portraitFrame"><img src="/src/assets/arielle-avatar.jpg" alt="Arielle Zapata" /><div className="portraitTag">CHARLOTTE, NC <b>●</b> AVAILABLE FOR SOFTWARE + BIOINFORMATICS</div></div>
          <DnaArt />
        </div>
      </section>

      <section className="ticker" aria-label="areas of expertise"><div>FULL-STACK DEVELOPMENT ✦ BIOINFORMATICS ✦ DATA SCIENCE ✦ CLOUD SYSTEMS ✦ PRODUCT BUILDING ✦ ANIMAL BEHAVIOR ✦ TAEKWONDO ✦ FULL-STACK DEVELOPMENT ✦ BIOINFORMATICS ✦</div></section>

      <section id="story" className="story shell section">
        <div className="sectionLabel"><span>001</span> THE THROUGH LINE</div>
        <div className="storyGrid">
          <h2>My résumé makes more sense when you zoom out.</h2>
          <div className="storyCopy">
            <p>I&apos;m a software engineer with a Master&apos;s in Bioinformatics, a data science educator, an animal-care professional, a dog trainer, and a taekwondo athlete.</p>
            <p>Those worlds look unrelated on paper. To me, they&apos;re all systems: observe the pattern, understand the behavior, find the friction, then build something better.</p>
            <div className="microFacts"><span>M.S. BIOINFORMATICS</span><span>B.A. COMPUTER SCIENCE</span><span>ENGLISH + SPANISH</span><span>UNC CHARLOTTE ALUM</span></div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects shell section">
        <div className="sectionLabel"><span>002</span> SELECTED BUILDS</div>
        <div className="sectionIntro"><h2>Ideas with a pulse.</h2><p>I gravitate toward products rooted in things I actually understand and care about.</p></div>
        <div className="projectGrid">{projects.map((p, index) => <article className={`projectCard ${p.className}`} key={p.title}>
          <div className="projectTop"><span>{p.type}</span><b>0{index + 1}</b></div>
          <div className="projectSymbol">{p.symbol}</div><h3>{p.title}</h3><p>{p.copy}</p>
          <div className="projectStack">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
        </article>)}</div>
      </section>

      <section id="work" className="experience shell section">
        <div className="sectionLabel"><span>003</span> EXPERIENCE</div>
        <div className="experienceHeader"><h2>Not one lane.<br/><em>One toolkit.</em></h2><p>Engineering, education, public service, and animal welfare have sharpened different parts of how I solve problems.</p></div>
        <div className="timeline">{experience.map(item => <article key={item.mark} className="timelineItem"><span className="timelineMark">{item.mark}</span><div><h3>{item.role}</h3><p className="company">{item.company}</p></div><p className="timelineCopy">{item.copy}</p><p className="dates">{item.dates}</p></article>)}</div>
      </section>

      <section className="lab section"><div className="shell labGrid"><div><div className="sectionLabel light"><span>004</span> THE LAB</div><h2>Tools I reach for.</h2><p>From sequence-shaped questions to production web apps, I like a stack that lets me move from idea to working system.</p></div><div className="skillCloud">{skills.map((s, i) => <span style={{'--i': i} as React.CSSProperties} key={s}>{s}</span>)}</div></div></section>

      <section id="education" className="education shell section">
        <div className="sectionLabel"><span>005</span> EDUCATION</div>
        <div className="degreeHero"><div className="uncc">CLT</div><div><p className="school">UNC CHARLOTTE</p><h2>Computer science,<br/>through a biological lens.</h2></div></div>
        <div className="degreeGrid"><article><span>2024</span><h3>Master of Science</h3><p>Bioinformatics</p></article><article><span>2023</span><h3>Bachelor of Arts</h3><p>Computer Science · Bioinformatics concentration</p></article></div>
      </section>

      <footer className="footer"><div className="shell footerInner"><p className="kicker"><span className="pulse" /> LET&apos;S BUILD SOMETHING USEFUL</p><h2>Code is better when it has a reason to exist.</h2><div className="footerLinks"><a href="mailto:zapataarielle@gmail.com">EMAIL ↗</a><a href="https://www.linkedin.com/in/arielle-zapata/" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="https://github.com/arielleZapata" target="_blank" rel="noreferrer">GITHUB ↗</a></div><p className="fineprint">Designed around the many worlds of Arielle Zapata · 2026</p></div></footer>
    </main>
  )
}

export default App
