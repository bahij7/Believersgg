import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

function Quote(props) {

  return (
    <div>

        <div className="quote">

            <div className="quote-icon">
             <FontAwesomeIcon icon={faQuoteRight} className='icon'/>
            </div>

            <div className="quote-text">
                {props.quote}
            </div>

            <div className="quote-info">
                <p className='author'>{props.author}</p>
                <p className='role'>{props.role}</p>
            </div>

        </div>
    </div>
  )
}

export default Quote