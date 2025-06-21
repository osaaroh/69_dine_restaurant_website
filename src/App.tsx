import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Booking from './pages/Booking'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
     <BrowserRouter>
      {/*
        Routes should define the top-level paths that correspond
        to your main application views (Home, Booking, etc.)
      */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        {/* You can add a 404 route if needed */}
        <Route path="*" element={<div><h1>404 - Not Found</h1></div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
