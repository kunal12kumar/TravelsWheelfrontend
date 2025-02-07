import { useState } from "react";
import axios from "axios";
import Header from "./Header";
import { ToastContainer, toast } from 'react-toastify';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();
    const API_BASE_URL = import.meta.env.VITE_API_URL
    try {
      const response = await axios.post(`${API_BASE_URL}/Rforgotresetpassword/forgotpassword`, { email });
      setMessage(response.data.message);
      toast.success(response.data.message)
    } catch (error) {
      setMessage("Error sending email.");
    }
  };

  return (
    <div>
      <Header></Header>
      <ToastContainer></ToastContainer>
      <div className="min-h-screen font-urbanist flex items-center  justify-center bg-gray-100">
        <div className="bg-white rounded-2xl p-8  shadow-lg w-96">
          <h2 className="text-2xl text-black font-bold mb-6">Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="w-full p-3 border-2 border-black text-black bg-[#f4f2f2] rounded mb-4"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="w-full bg-orange-500 text-white py-2 rounded">Send Reset Link</button>
          </form>
          {message && <p className="mt-4 text-green-600">{message}</p>}
        </div>
      </div>
    </div>
  );
}
