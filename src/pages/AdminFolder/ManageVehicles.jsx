import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Header from "../Header";
import { toast } from "react-toastify";

const CarForm = () => {
    const [formData, setFormData] = useState({
        vechicleId: "",
        vechicle_name: "",
        vechicle_type: "",
        seating_capacity: "",
        Price_per_km: ""
    });

    const [images, setImages] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setImages(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        const API_BASE_URL = import.meta.env.VITE_API_URL;
        console.log(API_BASE_URL);
        
        const formDataToSend = new FormData();
        formDataToSend.append("vechicleId", formData.vechicleId);
        formDataToSend.append("vechicle_name", formData.vechicle_name);
        formDataToSend.append("vechicle_type", formData.vechicle_type);
        formDataToSend.append("seating_capacity", formData.seating_capacity);
        formDataToSend.append("Price_per_km", formData.Price_per_km);
        
        for (let i = 0; i < images.length; i++) {
            formDataToSend.append("images", images[i]);
        }

        try {
            const response = await axios.post(`${API_BASE_URL}/Rcardetails/managecardetails`, formDataToSend, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            console.log(response);

            if (response.status === 200) {
                toast.success(response.data.message);
                setFormData({
                    vechicleId: "",
                    vechicle_name: "",
                    vechicle_type: "",
                    seating_capacity: "",
                    Price_per_km: ""
                });
                setImages([]);
            }
            alert("Car details added successfully!");
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to add car details!");
        }
    };

    return (
        <div>
            <Header></Header>
            <motion.div
                className="max-w-lg mx-auto pt-20 p-6 text-black bg-white shadow-lg rounded-2xl"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 20 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold mb-5 text-black text-center">Add Car Details</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {Object.keys(formData).map((key) => (
                        <motion.div key={key} whileHover={{ scale: 1.05 }}>
                            <label className="block text-gray-700 font-medium capitalize">{key.replace('_', ' ')}</label>
                            <input
                                type={key === "seating_capacity" ? "number" : "text"}
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </motion.div>
                    ))}
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <label className="block text-gray-700 font-medium">Upload Images</label>
                        <input
                            type="file"
                            multiple
                            onChange={handleFileChange}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </motion.div>
                    <motion.button
                        type="submit"
                        className="w-full bg-orange-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Submit
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default CarForm;
