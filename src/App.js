import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/Nav';
import { Foot } from './components/footer'
import CallToAction from './components/CallToAction';

import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import BookingPage from './pages/BookingPage';
import Order from './pages/Order';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import ConfirmedBooking from './pages/ConfirmedBooking';


function App() {
  return (
    <>
      <div className="desktop:w-lg mx-auto pb-10">
        <BrowserRouter>
          <Nav />
          <CallToAction />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/order" element={<Order />} />
            <Route path="/login" element={<Login />} />
            <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Foot />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
