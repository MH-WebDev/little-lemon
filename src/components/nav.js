import Logo from "../assets/img/Logo.svg"
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const NavLinks = () => {
    return( 
        <>
            <NavLink to="/index" className="border-b border-green tablet:border-none">Home</NavLink>
            <NavLink to="/about" className="border-b border-green tablet:border-none">About</NavLink>
            <NavLink to="/menu" className="border-b border-green tablet:border-none">Menu</NavLink>
            <NavLink to="/booking" className="border-b border-green tablet:border-none">Reservation</NavLink>
            <NavLink to="/order" className="border-b border-green tablet:border-none">Order Online</NavLink>
            <NavLink to="/login" className=" border-green tablet:border-none">Login</NavLink>
        </>
    )
}

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return(
    <nav className="flex flex-row justify-between p-10 items-center relative">
        <img src={Logo} alt="Logo" />
        <div className="flex flex-row items-center justify-between">
            <div className="hidden tablet:flex gap-10">
                    <NavLinks />
            </div>
            <div className="tablet:hidden leading-3 ">
                <button onClick={toggleNav}><GiHamburgerMenu className="h-8 w-8"/></button>
            </div>
            {isOpen && (
                <div className="absolute left-0 right-0 top-28 z-10 flex flex-col gap-2 bg-white py-2 justify-center w-3/4 rounded-b-2xl text-center mx-auto">
                    <NavLinks />
                </div>
            )}
        </div>
    </nav>
    );
};