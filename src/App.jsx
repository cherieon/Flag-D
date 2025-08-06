import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Missions from './pages/Missions';


import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/missions" element={<Missions />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
