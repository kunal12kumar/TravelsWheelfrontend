import React, { useState, useEffect } from "react";
import Header from "./Header";
import kia from  "../assets/kia-carens.webp";

const BookingConfirmation = () => {
    const [vehicle, setVehicle] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null);

    useEffect(() => {
        // Simulating fetching data from a database
        const fetchVehicleData = async () => {
            const data = {
                make: "Tesla",
                model: "Model S",
                features: "Autopilot, Electric, 5 seats",
                image: kia,
                rentalPrice: 200,
                taxesAndFees: 50,
            };
            setVehicle(data);
        };

        fetchVehicleData();
    }, []);

    if (!vehicle) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <div>
            <Header></Header>
            <div className="min-h-screen py-24  bg-gray-100">
                

                <div className="max-w-3xl mx-auto  bg-white text-black p-6   rounded-lg shadow-md">
                    <div className="flex sm:gap-20  py-4  rounded-lg shadow-md  bg-gray-300">
                        <img
                            src={vehicle.image}
                            alt="Selected Vehicle"
                            className="w-48 h-32 mx-4 rounded-lg object-cover"
                        />
                        <div>
                            <h2 className="text-xl font-semibold">Selected Vehicle</h2>
                            <p><strong>Make:</strong> {vehicle.make}</p>
                            <p><strong>Model:</strong> {vehicle.model}</p>
                            <p><strong>Features:</strong> {vehicle.features}</p>
                        </div>
                    </div>

                    <div className="mt-6  py-4  rounded-lg shadow-md  bg-gray-300 px-4">
                        <h3 className="text-lg font-semibold">Booking Details</h3>
                        <p><strong>Date:</strong> 15th November 2023</p>
                        <p><strong>Time:</strong> 10:00 AM</p>
                    </div>

                    <div className="mt-6  pt-4 border-t-[2px] py-4  rounded-lg shadow-md  bg-gray-300 px-4">
                        <h3 className="text-lg font-semibold">Cost Summary</h3>
                        <div className="flex justify-between">
                            <p>Vehicle Rental:</p>
                            <p>${vehicle.rentalPrice}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Taxes & Fees:</p>
                            <p>${vehicle.taxesAndFees}</p>
                        </div>
                        <div className="flex justify-between font-bold mt-2">
                            <p>Total:</p>
                            <p>${vehicle.rentalPrice + vehicle.taxesAndFees}</p>
                        </div>
                    </div>

                    

                    <button className="mt-6 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                        Confirm Booking
                    </button>
                </div>

            </div>
        </div>
    );
};

export default BookingConfirmation;