import React, { useEffect } from 'react'
import Navbar from './Navbar'

function Palmeiras() {
    useEffect(()=>{
      document.title = 'Believersgg - Palmeiras';
      window.scrollTo(0, 0);
    }, [])
  return (
    <div>
        <Navbar/>
        Palmeiras
    </div>
  )
}

export default Palmeiras