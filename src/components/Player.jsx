import React from 'react'

function Player(props) {
  return (
    <div className='player-card'>
        <div className="player-image"><img src={props.img}/></div>
        <div className="player-info">
          <p>{props.aka}</p>
          <p>{props.name}</p>
        </div>
    </div>
  )
}

export default Player