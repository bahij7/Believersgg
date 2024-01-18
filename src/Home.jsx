import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Second from './components/Second'
import Quotes from './components/Quotes'
import Ad from './components/Ad'

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
        <Quotes/>
    </div>
  )
}

export default Home