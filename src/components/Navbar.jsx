import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (

    <div className="navbar-container">
        <div className="navbar">
            <div className="logo">Be</div>

            <div className="others">

                <div className="mode">
                <i><FontAwesomeIcon icon={faSun} /></i>
                </div>
                <div className="links">
                    <i><FontAwesomeIcon icon={faBarsStaggered} /></i>
                </div>

            </div>
        </div>
    </div>

  )
}

export default Navbar