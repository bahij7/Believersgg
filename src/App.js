import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
  
  <Router>
        <Routes>
          <Route element={<Home/>} path='/Home' exact/>
          {/* <Route element={<Team/>} path='/Team'/>
          <Route element={<About/>} path='/About'/>
          <Route element={<Contact/>} path='/Contact'/> */}
        </Routes>
      </Router>
    </>
  )
}

export default App