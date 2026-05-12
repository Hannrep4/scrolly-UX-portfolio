import Nav from '@/components/Nav/Nav'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Projects from '@/components/Projects/Projects'
import Footer from '@/components/Footer/Footer'
import { getAllProjects } from '@/lib/projects'

export default async function Home() {
  const projects = await getAllProjects()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects projects={projects} />
      </main>
      <Footer />
    </>
  )
}
