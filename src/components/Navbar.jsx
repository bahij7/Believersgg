import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faSun, faXmark } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = ()=>{
    setMenuOpen(!isMenuOpen)
  }

  const closeMenu = ()=>{
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (

    <div className="navbar-container">
        <div className="navbar">
            <div className="logo"><Link to="/">Be</Link></div>

            <div className="others">

                <div className="mode">
                <i><FontAwesomeIcon icon={faSun} /></i>
                </div>
                <div className="menu" onClick={toggleMenu}>
                    <i><FontAwesomeIcon icon={faBarsStaggered} /></i>
                </div>

            </div>
        </div>

{isMenuOpen && (
  <>
    <div className="bg"></div>
  <div className="links">
    <i onClick={closeMenu}><FontAwesomeIcon icon={faXmark} /></i>
      <Link to="/">Team</Link>
      <Link to="/">Palmeiras</Link>
      <Link to="/">About us</Link>
      <Link to="/">Contact</Link>
  </div>
  </>
)}


    </div>

  )
}

export default Navbar