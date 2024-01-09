import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Team from './components/Team';
import Contact from './components/Contact'
import Palmeiras from './components/Palmeiras';

function App() {
  return (
    <>
  
  <Router>
        <Routes>
          <Route element={<Home/>} path='/' exact/>
          <Route element={<Team/>} path='/Team'/>
          <Route element={<Contact/>} path='/Contact'/>
          <Route element={<Palmeiras/>} path='/Palmeiras'/>
        </Routes>
      </Router>
    </>
  )
}

export default App