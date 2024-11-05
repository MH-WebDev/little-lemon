import Logo from "../assets/img/Logo.svg"
import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return(
    <nav className="flex flex-row justify-between py-10 items-center">
        <img src={Logo} alt="Logo" />
        <ul className="list-none flex flex-row justify-between gap-10">
            <li><NavLink to="/index">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/booking">Reservation</NavLink></li>
            <li><NavLink to="/order">Order Online</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
        </ul>
    </nav>
    );
};