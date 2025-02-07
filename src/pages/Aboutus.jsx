import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";

const AboutUs = () => {
    return (
        <div>
            <Header></Header>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl text-center"
                >
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Welcome to <span className="font-semibold text-orange-500">TravelEase</span>, your trusted travel partner.
                        We specialize in providing seamless and hassle-free vehicle bookings for your journeys.
                        Whether it's a business trip, a family vacation, or a solo adventure,
                        we ensure comfort, reliability, and affordability at every step.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mt-8 grid md:grid-cols-3 gap-6"
                >
                    {/* Card 1 */}
                    <div className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">🌍 Explore</h3>
                        <p className="text-gray-600">Discover new destinations with our wide range of travel options.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">🚗 Book</h3>
                        <p className="text-gray-600">Easily pre-book vehicles for a hassle-free travel experience.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">🛡️ Trust</h3>
                        <p className="text-gray-600">Reliable service with transparent pricing and secure payments.</p>
                    </div>
                </motion.div>

                {/* Call-to-Action Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <h2 className="text-2xl font-semibold text-gray-800">Ready for Your Next Adventure?</h2>
                    <p className="text-gray-600 mt-2">Book your ride with TravelEase and make your journey unforgettable!</p>
                    <a
                        href="/book"
                        className="mt-4 inline-block bg-orange-500 text-white text-lg font-medium px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
                    >
                        Book Now
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutUs;
