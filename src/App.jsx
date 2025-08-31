import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import FlagLab from './pages/FlagLab';
import Phishing from './pages/Phishing';

import Navbar from './components/Navbar';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/flaglab" element={<FlagLab />}/>  
          <Route path="phishing" element={<Phishing />}/> 

      </Routes>
    </BrowserRouter>
  )
}

export default App;
