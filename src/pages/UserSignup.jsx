import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import Header from "./Header";
import { Navigate, useNavigate } from "react-router-dom";


// Here we are going to define for sign up page 



export default function Signup() {

    // to udate the all data 
    const navigate=useNavigate()
    const [userdata, setuserdata] = useState(
        {
            username: '',
            email: '',
            mobileno: '',
            password: '',
            verifycode: ''
        }
    );

    // by this function we are updating our data by each later
    const updatedata = (event) => {
        let olddata = { ...userdata };
        let inputname = event.target.name;
        let inputvalue = event.target.value;
        olddata[inputname] = inputvalue;
        setuserdata(olddata);
       

    }

    // now checking for whether use is already verified or not 
    const [isotpsent, setisotpsent] = useState(false);


    //defining a function to save the information submitted by the user

    const handelSubmit = async (event) => {
        event.preventDefault();
        const API_BASE_URL = import.meta.env.VITE_API_URL
        console.log(API_BASE_URL);






        // now checking the password 

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#*?&])[A-Za-z\d@$!%#*?&]{8,}$/;

        if (!passwordPattern.test(userdata.password)) {
            toast.error('Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.');
            return;
        }

        if (!isotpsent) {

            // now calling the api to send the otp and verifying the user to save into the database
            try {
                const response = await axios.post(`${API_BASE_URL}/Rsignupuser/usersignup`, {
                    username: userdata.username,
                    email: userdata.email,
                    mobileno: userdata.mobileno,
                    password: userdata.password,
                    otp: userdata.otp
                });
               

                if (response.status === 200) {
                    toast.success(response.data.message);
                    setisotpsent(true);
                }
            } catch (error) {
                console.log(error)
                toast.error(error.response?.data?.message || 'Failed to send OTP');
                
            }
        }
        else {
            try {
                const response = await axios.post(`${API_BASE_URL}/Rverifycode/verifycode`, {
                    username: userdata.username,
                    email: userdata.email,
                    mobileno: userdata.mobileno,
                    password: userdata.password,
                    otp: userdata.otp
                });

                if (response.status === 200) {
                    toast.success(response.data.message);
                    // Clear the form or redirect as needed
                }

                setuserdata({
                    username: '',
                    email: '',
                    mobileno: '',
                    password: '',
                    otp: ''

                })

                setisotpsent(false)
                navigate('/log_in')

            } catch (error) {
                toast.error(error.response?.data?.message || 'Failed to verify OTP');
            }
        }





    }



    return (
        <div>
            <Header></Header>
            <div className="flex font-poppins w-full  justify-center font-urbanist text-black items-center min-h-screen bg-gray-100">
                <ToastContainer />
                <form className="sm:w-[45%] w-[90%]" onSubmit={handelSubmit}>
                    <div className="bg-white p-2  m-7 mt-32 h-[70%] rounded-lg shadow-lg ">
                        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Sign Up</h2>

                        <div className="mb-3">
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-600 mb-1">
                                Username
                            </label>
                            <input
                                onChange={updatedata} name="username" value={userdata.username} required

                                type="text"
                                id="Username"
                                placeholder="KUNAL KUMAR"
                                className="w-full px-4 py-2 border bg-[#eeeaea] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                                Email Address
                            </label>
                            <input
                                onChange={updatedata} name="email" value={userdata.email} required
                                type="email"
                                id="email"
                                placeholder="mrkunalkr01@gmail.com"
                                className="w-full px-4 py-2 border bg-[#eeeaea] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
                                Mobile No.
                            </label>
                            <input
                                onChange={updatedata} name="mobileno" value={userdata.mobileno} required
                                type="MobileNo"
                                id="MobileNo."
                                placeholder="Mobile No."
                                className="w-full px-4 py-2 border bg-[#eeeaea] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600 mb-1">
                                Password
                            </label>
                            <input
                                onChange={updatedata} name="password" value={userdata.password} required
                                type="password"
                                id="Password"
                                placeholder=" Password"
                                className="w-full px-4 py-2 border bg-[#eeeaea] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            />
                        </div>
                        {/* for otp */}
                        <div className="flex w-[70%] justify-center mx-auto flex-row gap-2">
                            {isotpsent && (<input onChange={updatedata} name="otp" value={userdata.otp} required className="w-[70%] h-[40px] rounded-lg border-[1px] placeholder:text-center hover:border-[2px] bg-[#eeeaea] hover:border-[#0F2F8C] text-center border-[#59023B] " type="text" placeholder="Enter Your Otp"></input>)}

                            <button className="w-[50%] h-[40px] mx-auto  bg-orange-500 rounded-lg border-[1px] placeholder:text-center hover:border-[2px] hover:border-[#0F2F8C] text-center text-red  border-[#59023B] ">{isotpsent ? 'verify' : 'Send'}</button>
                        </div>
                        {/* <button
                            
                            type="submit"
                            className="w-full flex justify-center items-center px-4 py-2 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-12" />
                            </svg>
                        </button> */}

                        <p className="text-center text-sm text-gray-500 mt-4">
                            Already have an account?{" "}
                            <Link to={'/login'}><h className="text-red-500 font-medium hover:underline">
                                Sign In
                            </h></Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};


