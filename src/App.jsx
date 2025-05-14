import React from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import BlurBlob from './BlurBlob'
import Experiance from './components/Experiance/Experiance'



const App = () => {
  return (
    <div className="relative bg-[#050414] overflow-hidden">
      {/* Decorative Background Effects */}
      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Main Content */}
      <div className="relative z-10 pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experiance />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
