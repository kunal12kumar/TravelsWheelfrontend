import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <div className="bg-white">
            {/* CTA Section */}
            <div className="bg-orange-500 text-center py-12 text-white">
                <h2 className="text-2xl font-semibold tracking-widest uppercase">
                    Discover Our Exceptional Services
                </h2>
                <p className="mt-2 text-sm">Explore Our Wide Range of Transportation Options</p>
                <Link to={'/bookingpage'}><button className="mt-6 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg shadow-md">
                    Get Started
                </button></Link>
            </div>

            <div className="mb-6 text-black bg-gray-100  md:mb-0">

                <p className="mt-2 text-center text-xl">© 2025 TravelsWheel, Inc. All rights reserved.</p>
            </div>

            {/* Footer Section */}
            <footer className="px-6 py-12 bg-gray-100 text-gray-700">
                <div className="container mx-auto flex text-2xl md:flex-row justify-between items-center md:items-start">
                    {/* Logo */}


                   

                        {/* Company */}
                        <div className="mb-6 md:mb-0">
                            <h3 className="font-semibold text-gray-900">Company</h3>
                            <ul className="mt-2 space-y-1">
                                <li><a href="#" className="hover:underline">About Us</a></li>
                                <li><a href="#" className="hover:underline">Services</a></li>
                                <li><a href="#" className="hover:underline">ContactUs</a></li>
                                <li><a href="#" className="hover:underline">Reviews</a></li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="font-semibold text-gray-900">Connect</h3>
                            <ul className="mt-2 space-y-1">
                                <li><a href="#" className="hover:underline">Facebook</a></li>
                                <li><a href="#" className="hover:underline">Twitter</a></li>
                                <li><a href="#" className="hover:underline">Instagram</a></li>
                                <li><a href="#" className="hover:underline">YouTube</a></li>
                            </ul>
                        </div>
                    </div>
             
            </footer>
        </div>
    );
}
