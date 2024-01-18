import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Second() {
  return (
    <div className='second'> 
      <iframe width="670" height="377" src="https://www.youtube.com/embed/Kf_YuFrHDTs" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <Link to='/Team'>Take a deep look into our squad <FontAwesomeIcon icon={faArrowUp} className='arrow' /></Link>
    </div>
  )
}

export default Second