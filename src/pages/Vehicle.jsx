import React from "react";
import kia from  "../assets/kia-carens.webp";
import tata from "../assets/Tata_tiago.jpg";
import electric from "../assets/electric car.png";
import car from "../assets/images.jpeg"
import { Link } from "react-router-dom";

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

const VehicleSelection = () => {
  return (
    <div className=" max-w-full   pb-6">
      <h2 className="text-4xl text-black flex justify-center font-bold  mb-10 my-20">Choose Your Vehicle</h2>
      <div className="grid grid-cols-1 w-[90%]  mx-auto md:grid-cols-3 gap-6">
        {vehicles.map((vehicle, index) => (
          <div key={index} className="  p-4 bg-gray-100 rounded-lg text-black shadow-lg">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-48 object-cover  rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-3">{vehicle.name}</h3>
            <p className="text-sm ">Capacity: {vehicle.capacity}</p>
            <p className="text-sm ">Amenities: {vehicle.amenities}</p>
            <p className="text-sm text-black font-bold mt-2">Price: {vehicle.price}</p>
            <Link to={'/bookingpage'}><button className="mt-4 bg-black text-white px-4 py-2 rounded-md">
              Select
            </button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleSelection;
