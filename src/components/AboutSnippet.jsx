import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faGlobe } from '@fortawesome/free-solid-svg-icons';
import myImage from '../logo.png'


function AboutSnippet() {
  return (
    <div className='AboutSnippet'>

      <div className="about-container">
        <div className="first-section"><img src={myImage} alt='BELIEVERS LOGO'/></div>
        <div className="second-section">
          <p>Established in August 2020, Believers, formerly known as the Lords, started out in CPZERO. We persevered through challenges and now proudly stand as a force within the KO LEGENDS.</p>
          <Link to='/About'>Know More About us <FontAwesomeIcon icon={faArrowUp} className='arrow' /></Link>
        </div>
      </div>
    </div>
  )
}

export default AboutSnippet