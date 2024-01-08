import React, { useEffect } from 'react'
import Navbar from './components/Navbar'

function Home() {
useEffect(()=>{
    document.title ='Believers - Home'
}, [])
  return (
    <div>
        <Navbar/>
    </div>
  )
}

export default Home