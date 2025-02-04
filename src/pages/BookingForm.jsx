import React, { useState } from "react";
import Header from "./Header";
import kia from "../assets/kia-carens.webp";
import tata from "../assets/Tata_tiago.jpg";
import electric from "../assets/electric car.png";
import { Link } from "react-router-dom";

const BookingForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        pickupLocation: "",
        dropoffLocation: "",
        date: "",
        time: "",
        vehicle: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };


    const vehicles = [
        {
            name: "KIA",
            capacity: "4 persons",
            amenities: "Air Conditioning, GPS, Bluetooth",
            price: "$50/day",
            image: kia, // Replace with your image path
        },
        {
            name: "TATA",
            capacity: "8 persons",
            amenities: "AC, GPS, Rear Camera",
            price: "$80/day",
            image: tata, // Replace with your image path
        },
        {
            name: "EV",
            capacity: "40 persons",
            amenities: "Reclining Seats, WiFi, TV",
            price: "$200/day",
            image: electric, // Replace with your image path
        },
    ];

    return (
        <div>
            <Header></Header>

            <div className="text-black text-center pt-28 font-black text-2xl">Choose Your Vechicle And Fill The Form To Book Your Journey</div>
            <div className="min-h-screen sm:flex  w-full pb-20 pt-10">
                <div className="sm:max-w-1/2 w-[90%] mx-auto h-auto text-black p-6 bg-gray-100  shadow-lg rounded-lg ">
                    <h2 className="text-xl font-semibold mb-4 text-center">Book a Vehicle</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                            className="w-full p-2 border rounded"
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full p-2 border rounded"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            required
                            className="w-full p-2 border rounded"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="pickupLocation"
                            placeholder="Pickup Location"
                            required
                            className="w-full p-2 border rounded"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="dropoffLocation"
                            placeholder="Drop-off Location"
                            required
                            className="w-full p-2 border rounded"
                            onChange={handleChange}
                        />
                        <input
                            type="date"
                            name="date"
                            required
                            className="w-full p-2 border rounded"
                            onChange={handleChange}
                        />
                        <input
                            type="time"
                            name="time"
                            placeholder="time"
                            required
                            className="w-full p-2 border rounded"
                            onChange={handleChange}
                        />

                        <select
                            name="vehicle"
                            required
                            className="w-full p-2 border rounded"
                            onChange={handleChange}
                        >
                            <option value="">Select a Vehicle</option>
                            <option value="Tesla Model S">Tesla Model S</option>
                            <option value="BMW X5">BMW X5</option>
                            <option value="Audi Q7">Audi Q7</option>
                            <option value="Mercedes GLE">Mercedes GLE</option>
                        </select>

                        <Link to={'/bookingpage'}><button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                            Submit Booking
                        </button></Link>
                    </form>
                </div>

                <div className=" sm:  min-h-screen mx-auto  pb-6">
                    {/* <h2 className="text-3xl text-black flex justify-center font-bold  mb-10 sm:pt-0 pt-20 ">Choose Your Vehicle</h2> */}
                    <div className="grid grid-cols-1 w-[100%]  mx-auto  gap-6">
                        {vehicles.map((vehicle, index) => (
                            <div key={index} className="  p-4 bg-gray-100 rounded-lg text-black shadow-lg">
                                <img
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    className="sm:w-[100%] w-full h-48 sm:h-44 object-cover  rounded-lg"
                                />
                                <h3 className="text-lg font-semibold mt-3">{vehicle.name}</h3>
                                <p className="text-sm ">Capacity: {vehicle.capacity}</p>
                                <p className="text-sm ">Amenities: {vehicle.amenities}</p>
                                <p className="text-sm text-black font-bold mt-2">Price: {vehicle.price}</p>
                                {/* <Link to={'/bookingconfirmation'}><button className="mt-4 bg-black text-white px-4 py-2 rounded-md">
                                    Select
                                </button></Link> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
