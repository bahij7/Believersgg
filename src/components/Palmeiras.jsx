import React, { useEffect } from 'react'
import Navbar from './Navbar'

function Palmeiras() {
    useEffect(()=>{
document.title = 'Believersgg - Palmeiras'
    }, [])
  return (
    <div>
        <Navbar/>
        Palmeiras
    </div>
  )
}

export default Palmeiras