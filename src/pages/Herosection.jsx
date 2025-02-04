import React from "react";
import roadside from "../assets/1920_roadtrip3-11.jpg"
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white px-8 py-12 md:px-20 md:py-16">
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full">
        <img
          src={roadside} // Replace with the actual image URL
          alt="Travel Bus"
          className="rounded-lg shadow-lg h-auto w-full"
        />
      </div>

      {/* Right Side - Content */}
      <div className="md:w-1/2 w-full mt-8 md:mt-0 md:pl-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-wide uppercase">
          Elevate Your Journeys With
        </h2>
        <p className="text-gray-700 mt-4 text-lg">
          At our tour and travels website, we are dedicated to providing you
          with exceptional transportation solutions for your local and
          out-of-station travel needs. Our fleet of reliable and comfortable
          vehicles ensures a smooth journey.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <Link to={'/bookingpage'}><button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all">
            Book Now
          </button></Link>
          <button className="border-2 border-gray-700 text-gray-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all">
            Inquire
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
