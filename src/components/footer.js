"use client";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { SiTripadvisor } from "react-icons/si";
import logo from '../assets/img/logo-full.png';
import { NavLink } from "react-router-dom";


export function Foot() {
  return (
    <footer>
      <div className="w-full rounded-b-[16px] bg-green shadow p-6 text-white">
        <div className="flex flex-row justify-between align-middle px-6">
          <div className="my-auto hidden tablet:block">
            <img src={logo} alt="Logo" width="100px" />
          </div>
          <div className="grid grid-cols-3 text-center mx-auto tablet:text-left tablet:mx-0 tablet:grid-cols-3 gap-8 paragraph py-6">
            <div className="flex flex-col">
              <h3 className="section-category pb-4">Navigation</h3>
              <NavLink to="/index">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/menu">Menu</NavLink>
              <NavLink to="/booking">Reservation</NavLink>
              <NavLink to="/order">Order Online</NavLink>
              <NavLink to="/login">Login</NavLink>
            </div>
            <div>
              <h3 className="section-category pb-4">Contact Us</h3>
              <p>Address:</p>
              <p>Phone No:</p>
              <p>Email:</p>
            </div>
            <div className="flex flex-col">
              <h3 className="section-category pb-4">Legal</h3>
              <NavLink to="/about#privacy">Privacy Policy</NavLink>
              <NavLink to="/about#terms">Terms & Conditions</NavLink>
            </div>
          </div>
        </div>
          <hr/>
          <div className="flex flex-row justify-between align-items pt-6 px-6">
            <div>
              <p>Martin Hussey 2024</p>
            </div>
            <div className="flex flex-row gap-8">
              <a href="http://instagram.com" aria-label="instagram"><BsInstagram /></a>
              <a href="http://facebook.com" aria-label="facebook"><BsFacebook /></a>
              <a href="http://twitter.com" aria-label="twitter"><BsTwitter /></a>
              <a href="http://tripadvisor.com" aria-label="trip advisor"><SiTripadvisor /></a>
            </div>
          </div>
      </div>
    </footer>
  );
}
