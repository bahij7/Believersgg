import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Second() {
  return (
    <div className='second'> 
        <iframe src="https://www.youtube.com/embed/Mr9T-943BnE" title="Nature Sounds: Rain Sounds One Hour for Sleeping, Sleep Aid for Everybody" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <Link to='/'>Take a look into our squad <FontAwesomeIcon icon={faArrowUp} className='arrow' /></Link>
    </div>
  )
}

export default Second