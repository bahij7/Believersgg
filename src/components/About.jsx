import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import myImage from '../1.png'
import ffc from '../images/ffc.jpg'
import ffc2 from '../images/ffc-info.jpg'
import ffc3 from '../images/ffc-info2.jpg'
import ffcsq from '../images/ffc-squad.jpg'
import be2 from '../images/screen.jpg'
import be from '../images/Screenshot (79).png'
import ingame from '../images/ingame.jpg'

function Abouts() {
  useEffect(()=>{
    document.title = 'Believersgg - About us';
    window.scrollTo(0, 0);
  })
  return (
    <div>
      <div className="no"><p>Switch to Mobile or Tablet Screen</p></div>
      <Navbar/>
      <div className="about">

      <div className="about-head">
          <img src={myImage} alt="colorsPalette" />
          <h1>Discover <span>Believers' </span>: More Than Just a <span>Team</span></h1>
        </div>

       <div className="about-body">

        <p><span>Believers</span>, formerly known as <span>CPLORDS</span> and <span>TheLORDS</span>, founded by <span>MAGO</span> in <span>August 2020</span> with a dedicated mission in the FreeFire esports realm. ✨</p>
          <img src={be} alt='Booyah Screen'/>
          <img src={be2} alt='Booyah Screen'/>

        <p>We've had some <span>great moments</span> so far, bagging <span>4 league titles </span>in 3 different clans and hitting the <span>top 190 in FFCUP 2021 Serie Juin</span>, among other wins..🏆</p>
          <img src={ffc} alt='FFC Screen'/>
          <img src={ffc2} alt='Booyah Screen'/>
          <img src={ffc3} alt='Booyah Screen'/>
          <img src={ffcsq} alt='Booyah Screen'/>

        <p><span>Believers</span> has been part of some awesome clans like <span>CPZERO, 45KILLERS, KNOCKOUT, ROYALITY,  REAL MADRID, KO LEGENDS, ALQAEDA, PUNISHERS, ONE TEAM, RDV,</span> and <span>YOUR ESPORTS</span>. Being in these clans has added to our journey and given us lots of different experiences. 🎮🔥</p>
          <img src={ingame} alt='Be Squad'/>
        <p>What makes us <span>special</span> is that we're all about creating a <span>positive gaming space.</span> Keep an eye out for more exciting moments with Believers! 😍</p>
        
       </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Abouts