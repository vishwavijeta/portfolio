import profile from './data/profile.json'
import skills from './data/skills.json'
import experience from './data/experience.json'
import education from './data/education.json'
import projects from './data/projects.json'

import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Section from './components/Section.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
]

function initials(name = '') {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('')
}

export default function App() {
  return (
    <div className="page">
      <Navbar
        brand={{ mark: initials(profile.name), name: profile.name }}
        links={navLinks}
      />

      <Header id="about" profile={profile} />

      <main className="container">
        <Section id="skills" title="Skills">
          <Skills skills={skills} />
        </Section>

        <Section id="experience" title="Company Experience">
          <Experience experience={experience} />
        </Section>

        <Section id="education" title="Education">
          <Education education={education} />
        </Section>

        <Section id="projects" title="Projects">
          <Projects projects={projects} />
        </Section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </footer>
    </div>
  )
}
