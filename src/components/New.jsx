import React from 'react'
import myImage from '../1.png'

function New(props) {
  return (
    <div>
        <div className="new-card">
            <div className="new-head">
                <div className="new-type">{props.type}</div>
                <div><img src={myImage}/></div>
            </div>

            <div className="new-body">
                <p>{props.topic}</p>
            </div>

            <div className="new-foot">
                <div className="new-date">{props.date}</div>
                <div className="new-link">{props.link}</div>
            </div>
        </div>
    </div>
  )
}

export default New