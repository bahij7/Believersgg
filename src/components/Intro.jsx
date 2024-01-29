import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import myImage from '../1.png'

function Intro() {
  

  return (
    <div className='intro'>
        <img src={myImage} alt="colorsPalette" />
        <h1>Because if we <span>Believe,</span> we <span>achieve.</span></h1>
        <Link to='/News'>Check our latest News <i><FontAwesomeIcon icon={faArrowUp} className='arrow' /></i></Link>
    </div>
  )
}

export default Intro