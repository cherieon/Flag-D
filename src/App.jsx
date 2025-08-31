import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import FlagLab from './pages/FlagLab';
import PhishingHook from './pages/Phishing/PhishingHook';
import PhishingLesson from './pages/Phishing/PhishingLesson';
import PhishingActivity from './pages/Phishing/PhishingActivity';

import Navbar from './components/Navbar';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/flaglab" element={<FlagLab />}/>  
          <Route path="phishinghook" element={<PhishingHook />}/> 
          <Route path="phishinglesson" element={<PhishingLesson />}/> 
          <Route path="phishingactivity" element={<PhishingActivity/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
