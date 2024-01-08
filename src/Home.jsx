import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Second from './components/Second'

function Home() {
useEffect(()=>{
    document.title ='Believersgg - Home'
}, [])
  return (
    <div>
        <Navbar/>
        <Intro/>
        <Second/>
    </div>
  )
}

export default Home