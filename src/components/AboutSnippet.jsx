import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faGlobe } from '@fortawesome/free-solid-svg-icons';

function AboutSnippet() {
  return (
    <div className='AboutSnippet'>

      <div className="first-snipp">
        <div className="first">Established in August 2020</div>
        <div className="second">Be</div>
      </div>

      <div className="second-snipp">Believers, formerly known as the Lords.</div>

      <div className="third-snipp">
        <div className="first"><Link to='/Team'>Know More About us<i><FontAwesomeIcon icon={faArrowUp} className='arrow' /></i></Link></div>
        <div className="second">⭐⭐⭐⭐</div>
      </div>
    </div>
  )
}

export default AboutSnippet