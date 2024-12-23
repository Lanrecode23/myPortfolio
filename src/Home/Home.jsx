import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import About from '../components/About'
import Techstack from '../components/Techstack'

function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Techstack/>
      <Footer/>
    </div>
  )
}

export default Home
