import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Skills from '@/components/Skills'
import  Highlights  from '@/components/Highlights'

export default function Home() {
  return (
    <>
      <Hero />
      <Skills/>
      <Projects />
      <About />
      <Highlights/>
      <Contact />
    </>
  )
}
