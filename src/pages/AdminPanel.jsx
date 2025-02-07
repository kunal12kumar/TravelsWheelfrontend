import React from "react";

import { motion } from "framer-motion";
import { FaCar, FaUser, FaClipboardList } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -200, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="w-64 bg-blue-900 text-white p-6"
      >
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          <li className="flex items-center gap-2 text-lg cursor-pointer hover:text-gray-300">
            <FaCar /> Manage Vehicles
          </li>
          <li className="flex items-center gap-2 text-lg cursor-pointer hover:text-gray-300">
            <FaClipboardList /> Manage Bookings
          </li>
          <li className="flex items-center gap-2 text-lg cursor-pointer hover:text-gray-300">
            <FaUser /> Manage Customers
          </li>
        </ul>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800"
        >
          Admin Dashboard
        </motion.h1>
        <p className="text-gray-600 mt-2">Manage vehicles, bookings, and customers efficiently.</p>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {/* Vehicles Card */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 bg-white shadow-lg rounded-2xl flex items-center gap-4 border border-gray-200"
          >
            <FaCar className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Vehicles</h3>
              <p className="text-gray-600">Manage all available vehicles.</p>
            </div>
          </motion.div>

          {/* Bookings Card */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 bg-white shadow-lg rounded-2xl flex items-center gap-4 border border-gray-200"
          >
            <FaClipboardList className="text-green-600 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Bookings</h3>
              <p className="text-gray-600">View and manage all bookings.</p>
            </div>
          </motion.div>

          {/* Customers Card */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.6 }}
            className="p-6 bg-white shadow-lg rounded-2xl flex items-center gap-4 border border-gray-200"
          >
            <FaUser className="text-red-600 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Customers</h3>
              <p className="text-gray-600">Manage registered customers.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
