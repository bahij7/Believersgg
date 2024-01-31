import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from './components/Team';
import Contact from './components/Contact'
import News from './components/News';
import About from './components/About';
import { inject } from '@vercel/analytics';
 
inject();


function App() {

  return (
    <>

  <Router>
        <Routes>
          <Route element={<Home/>} path='/' exact/>
          <Route element={<Team/>} path='/Team'/>
          <Route element={<Contact/>} path='/Contact'/>
          <Route element={<News/>} path='/News'/>
          <Route element={<About/>} path='/About'/>
        </Routes>
      </Router>
    </>
  )
}

export default App