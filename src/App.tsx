import AboutMe from "./Sections/aboutme"
import Contact from "./Sections/contact"
import HeroSection from "./Sections/herosection"
import Projects from "./Sections/projects"
import Skills from "./Sections/skills"
import TechStack from "./Sections/techstack"

function App() {

  return (
    <>
      <HeroSection />
      <AboutMe />
      <TechStack />
      <Skills />
      <Projects />
      <Contact />
      </>
  )
}

export default App
