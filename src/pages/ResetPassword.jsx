import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import { toast, ToastContainer } from "react-toastify";

export default function ResetPassword() {
  const { token } = useParams();
const navigate=useNavigate()
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_BASE_URL = import.meta.env.VITE_API_URL
    try {
      const response = await axios.post(`${API_BASE_URL}/Rforgotresetpassword/resetpassword/${token}`, { password });
      setMessage(response.data.message);
      console.log(response.data.message)
      toast.success(response.data.message)
      // navigate('/login')
    } catch (error) {
      setMessage("Error resetting password.");
    }
  };

  return (
    <div>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl text-black font-bold mb-6">Reset Password</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              className="w-full p-3  bg-white border-2 border-black rounded mb-4"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full bg-orange-500 text-white py-2 rounded">Reset Password</button>
          </form>
          {message && <p className="mt-4 text-green-600">{message}</p>}
        </div>
      </div>
    </div>
  );
}
