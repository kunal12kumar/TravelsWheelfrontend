import React, { useEffect, useState } from "react";
import kia from "../assets/kia-carens.webp";
import tata from "../assets/Tata_tiago.jpg";
import electric from "../assets/electric car.png";
import car from "../assets/images.jpeg"
import { Link } from "react-router-dom";

export default function Landingpage() {

    const images = [electric, tata];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        // This contains the image part and Book Now part
        <div className="relative ">

            <div className=" absolute z-[2] inset-0 text-white  sm:min-h-screen py-28 pt-36  pb-8  flex items-center justify-center">
                <div className="text-center  ">
                    <h1 className="sm:text-[126px] text-4xl  flex ml-8 sm:ml-0 md:text-6xl font-lato mb-4  font-[900]  ">
                        <h1 className="mt-6 font-urbanist ">Book Your First Ride </h1>
                        
                    </h1>

                    <p className="text-[18px] md:text-[18px] sm font-urbanist ml-8 sm:ml-0 mt-6">
                        Enjoy Your Ride With our amazing Service 
                    </p>
                    {/* button for contact to our sevices */}

                    <Link
                        to={'/bookingpage'}
                        
                    ><button className=" rounded-full mt-12 text-white h-[50px] px-4 sm:w-[45%] text-[20px]  font-outfit font-bold bg-orange-500 hover:bg-blue-600 hover:scale-105">Book Your First Ride</button></Link>

                </div>
            </div>

            <div className="flex  sm:min-h-screen justify-center bg-cover bg-contain items-center w-screen  brightness-[0.5]">
                <img src={images[index]} alt="Alternating" className="w-full sm:h-screen h-[400px] transition-opacity duration-500" />

               
            </div>
          
        </div>


    )
}