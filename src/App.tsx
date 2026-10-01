import { MotionConfig } from 'motion/react'
import About from './components/About'
import Contact from './components/Contact'
import CornerMarks from './components/CornerMarks'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import { DockerLabel, GitLabel, PacketLabel, ResourcesLabel } from './components/Labels'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import ScrollProgress from './components/ScrollProgress'
import Skills from './components/Skills'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Navbar />
      <CornerMarks />
      <main>
        <Hero />
        <ResourcesLabel />
        <About />
        <DockerLabel />
        <Projects />
        <Skills />
        <GitLabel />
        <Experience />
        <PacketLabel />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
