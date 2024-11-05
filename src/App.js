import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/nav';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Booking from './pages/Booking';
import Order from './pages/Order';
import Login from './pages/Login';
import NoPage from './pages/NoPage';

import { Foot } from './components/footer.tsx'

function App() {
  return (
    <>
      <div className="desktop:w-lg mx-auto">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/order" element={<Order />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <p className="section-title">Hello</p>
          <Foot />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
