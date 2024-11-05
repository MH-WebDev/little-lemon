"use client";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { SiTripadvisor } from "react-icons/si";
import logo from '../assets/img/logo-full.png';


export function Foot() {
  return (
    <footer>
      <div className="w-full rounded-b-[16px] bg-green shadow p-6 text-white">
        <div className="grid grid-cols-2 justify-between align-items">
          <div>
            <img src={logo} alt="Logo" width="100px" />
          </div>
          <div className="grid grid-cols-3 gap-8 paragraph py-6">
            <div>
              <h3 className="section-category pb-4">Navigation</h3>
              <p>Home</p>
              <p>About</p>
              <p>Menu</p>
              <p>Reservations</p>
              <p>Order Online</p>
              <p>Login</p>
            </div>
            <div>
              <h3 className="section-category pb-4">Contact Us</h3>
              <p>Address</p>
              <p>Phone No:</p>
              <p>Email:</p>
            </div>
            <div>
              <h3 className="section-category pb-4">Legal</h3>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
          <hr/>
          <div className="flex flex-row justify-between align-items pt-6 px-6">
            <div>
              <p>Martin Hussey 2024</p>
            </div>
            <div className="flex flex-row gap-8">
              <BsInstagram />
              <BsFacebook />
              <BsTwitter />
              <SiTripadvisor />
            </div>
          </div>
      </div>
    </footer>
  );
}
