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
    document.title ='Believersgg - Home'
}, [])
  return (
    <div>
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