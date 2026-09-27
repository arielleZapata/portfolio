const experience = [
  {
    role: "Software Developer (Contract)",
    company: "Haversack LLC",
    dates: "Mar 2026 – Present",
    bullets: [
      "Build and maintain full-stack features with Django, React, and Google Cloud.",
      "Translate product requirements into reliable, maintainable user-facing workflows."
    ]
  },
  {
    role: "Adjunct Professor, Data Science",
    company: "Johnson & Wales University Online",
    dates: "2026 – Present",
    bullets: [
      "Teach data science concepts and support students with practical analytical workflows."
    ]
  },
  {
    role: "Professional Tutor, Statistics",
    company: "Johnson & Wales University",
    dates: "2024 – Present",
    bullets: [
      "Lead statistics support sessions and explain quantitative concepts to diverse learners."
    ]
  },
  {
    role: "Animal Care & Control Officer",
    company: "City of Charlotte",
    dates: "Nov 2024 – Present",
    bullets: [
      "Work in a high-accountability public-service environment requiring documentation, communication, and rapid decision-making."
    ]
  }
]

const projects = [
  {
    title: "TourneyHero",
    summary: "Tournament-management platform for organizers, coaches, athletes, memberships, brackets, live area queues, and payments.",
    stack: "Next.js 15 · TypeScript · Express · Prisma · MySQL · Socket.IO · AWS · Vercel"
  },
  {
    title: "Bright Tails Platform",
    summary: "Client CRM and booking platform for pet-training services, including pet profiles, lessons, packages, rescue credits, Stripe payments, messaging, and calendar workflows.",
    stack: "Next.js · Supabase · Stripe · Google Calendar · Tailwind"
  },
  {
    title: "TKD Archive",
    summary: "Video archive concept for organizing taekwondo livestreams into searchable, athlete-level match clips and tournament playlists.",
    stack: "React / Next.js · Data workflows · Video automation"
  }
]

const skills = [
  "Python", "R", "Java", "JavaScript", "TypeScript", "C/C++", "C#",
  "React", "Next.js", "Node.js", "Express", "Django", "Tailwind", "Ant Design",
  "Prisma", "PostgreSQL", "MySQL", "MongoDB", "Supabase",
  "AWS", "Google Cloud", "Git", "GitHub", "Socket.IO", "Stripe", "R Shiny"
]

function App() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top">AZ</a>
        <nav>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </nav>
      </header>

      <section id="top" className="hero shell">
        <div className="heroCopy">
          <p className="eyebrow">SOFTWARE ENGINEER · BIOINFORMATICS</p>
          <h1>Arielle Zapata</h1>
          <p className="lede">
            Full-stack developer and bioinformatics graduate building practical software across web platforms,
            data workflows, scientific computing, and cloud systems.
          </p>
          <div className="actions">
            <a className="button primary" href="https://www.linkedin.com/in/arielle-zapata/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="button" href="https://github.com/arielleZapata" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div className="quickFacts">
            <span>Charlotte, NC</span>
            <span>English + Spanish</span>
            <span>Open to software & bioinformatics roles</span>
          </div>
        </div>
        <img className="portrait" src="/src/assets/arielle-avatar.jpg" alt="Arielle Zapata" />
      </section>

      <section className="shell section">
        <div className="sectionHeading">
          <p className="eyebrow">PROFILE</p>
          <h2>Engineer with a scientific backbone.</h2>
        </div>
        <p className="profileText">
          I hold a Master&apos;s in Bioinformatics and a Bachelor&apos;s in Computer Science from UNC Charlotte.
          My work spans full-stack product development, data analysis, scientific computing, teaching, and
          operational problem-solving. I enjoy taking complicated workflows and turning them into software people
          can actually use.
        </p>
      </section>

      <section id="experience" className="shell section">
        <div className="sectionHeading">
          <p className="eyebrow">EXPERIENCE</p>
          <h2>Recent work</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timelineItem" key={item.role + item.company}>
              <div>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
              </div>
              <div>
                <p className="dates">{item.dates}</p>
                <ul>
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="shell section">
        <div className="sectionHeading">
          <p className="eyebrow">SELECTED PROJECTS</p>
          <h2>Things I build</h2>
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <p className="stack">{project.stack}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section">
        <div className="sectionHeading">
          <p className="eyebrow">TOOLKIT</p>
          <h2>Core technologies</h2>
        </div>
        <div className="skillCloud">
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <section id="education" className="shell section education">
        <div className="sectionHeading">
          <p className="eyebrow">EDUCATION</p>
          <h2>UNC Charlotte</h2>
        </div>
        <div className="degreeGrid">
          <article>
            <h3>Master of Science, Bioinformatics</h3>
            <p>University of North Carolina at Charlotte</p>
            <p className="dates">Completed May 2024</p>
          </article>
          <article>
            <h3>Bachelor of Arts, Computer Science</h3>
            <p>Bioinformatics concentration · UNC Charlotte</p>
            <p className="dates">Completed May 2023</p>
          </article>
        </div>
      </section>

      <footer className="shell footer">
        <div>
          <p className="eyebrow">LET&apos;S CONNECT</p>
          <h2>Interested in working together?</h2>
        </div>
        <div className="footerLinks">
          <a href="mailto:zapataarielle@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/arielle-zapata/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/arielleZapata" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </footer>
    </main>
  )
}

export default App
