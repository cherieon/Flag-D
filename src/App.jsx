import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Missions from './pages/Missions';
import Deepfake from './pages/Deepfake';

import Navbar from './components/Navbar';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/missions" element={<Missions />}/>  
          <Route path="deepfake" element={<Deepfake />}/> 

      </Routes>
    </BrowserRouter>
  )
}

export default App;
