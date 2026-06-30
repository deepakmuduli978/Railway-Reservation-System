import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import BookTicket from './pages/BookTicket'
import Profile from './pages/Profile'
import MyBookings from './pages/MyBooking'
function App() {
 
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/book-ticket" element={<BookTicket />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/my-bookings' element={<MyBookings/>}/>

      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
