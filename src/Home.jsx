import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Second from './components/Second'
import Quotes from './components/Quotes'
import Ad from './components/Ad'
import Footer from './components/Footer'
import AboutSnippet from './components/AboutSnippet'

function Home() {
useEffect(()=>{
    document.title = 'Believers - a Moroccan esport team'
    window.scrollTo(0, 0);
}, [])
  return (
    <div>
      <div className="no"><p>Switch to Mobile or Tablet Screen</p></div>
        <Ad/>
        <Navbar/>
        <Intro/>
        <Second/>
        <AboutSnippet/>
        <Quotes/>
        <Footer/>
    </div>
  )
}

export default Home