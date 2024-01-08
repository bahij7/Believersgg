import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'

function Home() {
useEffect(()=>{
    document.title ='Believersgg - Home'
}, [])
  return (
    <div>
        <Navbar/>
        <Intro/>
    </div>
  )
}

export default Home