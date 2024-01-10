import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


function Intro() {
  return (
    <div className='intro'>
        <img src='' alt="colorsPalette" />
        <h1>Because if we <span>Believe,</span> we <span>achieve.</span></h1>
        <Link to='/'>Check our latest news <i><FontAwesomeIcon icon={faArrowUp} className='arrow' /></i></Link>
    </div>
  )
}

export default Intro