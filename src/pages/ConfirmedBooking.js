import logo from "../assets/img/Logo.svg";
import React from "react";
import { NavLink } from 'react-router-dom';

export default function ConfirmedBooking() {

  return (
    <div>
      <div className="">
        <img src={logo} alt="Little Lemon Logo" width="200px" className="mx-auto pt-6" />
        <div className="space-y-6 py-10">
          <h2 className="text-center sub-title py-6">Booking request received!</h2>
          <p className="paragraph text-center w-3/4 mx-auto">
            Thank you for making a booking request at Little Lemon! You will soon receive an email to confirm your reservation details.
          </p>
        </div>
        <NavLink to="/index" className="block bg-yellow rounded-lg px-24 py-2 my-6 w-1/4 mx-auto section-category drop-shadow-md hover:scale-110 duration-300 ease-in-out text-center">Home</NavLink>
      </div>
    </div>
  );
}