import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Team from './components/Team';

function App() {
  return (
    <>
  
  <Router>
        <Routes>
          <Route element={<Home/>} path='/' exact/>
          <Route element={<Team/>} path='/Team'/>
        </Routes>
      </Router>
    </>
  )
}

export default App