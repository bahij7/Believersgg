import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
  
  <Router>
        <Routes>
          <Route element={<Home/>} path='/' exact/>
        </Routes>
      </Router>
    </>
  )
}

export default App