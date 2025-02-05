import React from "react";
import "./Pages.css"
import { Link } from "react-router-dom";

export default function Header() {

    return (

        <div className="navbar bg-orange-500 t shadow-sm fixed z-[5]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        class="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Link to={'/'}><li><a className="text-2xl"  >Home</a></li></Link>
                        <li>
                            <a  className="text-2xl"  >About Us</a>
                            {/* <ul className="p-2">
                                <li><a>About Us</a></li>
                                <li><a></a></li>
                            </ul> */}
                        </li>
                        <li><a className="text-2xl"  >Contact Us</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl sm:text-3xl">TravelsWheel</a>
            </div>
            <div className="navbar-center hidden  lg:flex ">
                <ul className="menu text-2xl gap-5 menu-horizontal px-1">
                    <Link to={'/'}><li><a>Home</a></li></Link>
                    <li>
                        {/* <details>
                            <summary className=" ">Services</summary>
                          
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details> */}
                        <a>Book Now</a>
                    </li>
                    <li><a>Contact Us</a></li>
                    <li><a>About Us</a></li>
                </ul>
            </div>
            <div className="navbar-end ">
                <a className="btn sm:mr-6 text-2xl bg-orange-500 ">Sign Up</a>
            </div>
        </div>
    )
}