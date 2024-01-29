import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import trailler from '../images/trailer.mov'

function Second() {
  return (
    <div className='second'> 
        <video autoPlay playsInline loop muted>
        <source src={trailler} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <Link to='/Team'>Take a deep look into our squad <FontAwesomeIcon icon={faArrowUp} className='arrow' /></Link>
    </div>
  )
}

export default Second