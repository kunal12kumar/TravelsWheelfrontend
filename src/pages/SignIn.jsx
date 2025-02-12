import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import Header from "./Header";



// Here we are going to define for sign up page 



export default function SignIn() {

  // to udate the all data 
  const [userdata, setuserdata] = useState(
    {

      email: '',

      password: '',

    }
  );

  const navigate = useNavigate();

  // by this function we are updating our data by each later
  const updatedata = (event) => {
    let olddata = { ...userdata };
    let inputname = event.target.name;
    let inputvalue = event.target.value;
    olddata[inputname] = inputvalue;
    setuserdata(olddata);
    

  }




  //defining a function to save the information submitted by the user

  const handelSubmit = async (event) => {
    event.preventDefault();
    const API_BASE_URL = import.meta.env.VITE_API_URL






    // now checking the password 

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#*?&])[A-Za-z\d@$!%#*?&]{8,}$/;

    if (!passwordPattern.test(userdata.password)) {
      toast.error('Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }



    // now calling the api to send the otp and verifying the user to save into the database
    try {
      
      const response = await axios.post(`${API_BASE_URL}/Rsigninuser/usersignin`, {

        email: userdata.email,

        password: userdata.password,

      }, {

        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(response);

      if (response.status === 200) {
        const token = response.data.token
        localStorage.setItem("token", token);   //storing token in localStorage to use it latter
        console.log(token)
        toast.success(response.data.message);
        navigate('/', { state: { message: "Welcome To TechsageLabs" } })

      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Sign In Failed');
      console.log(error);
    }


    setuserdata({

      email: '',

      password: '',

    })





  }



  return (
    <div className="bg-[white] font-urbanist text-black">
      <Header></Header>
      <ToastContainer />
      <div className="flex font-poppins justify-center items-center sm:pt-20 min-h-screen ">
        {/* Animated Borders */}









        <form className="w-[85%]  rounded-lg sm:w-[50%] border-[2px] text-black " onSubmit={handelSubmit} >
          <div className="  rounded-lg p-8 z-10">
            <h2 className="text-2xl font-semibold  text-center mb-6">Log In</h2>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                Email Address
              </label>
              <input
                onChange={updatedata} name="email" value={userdata.email} required
                type="email"
                id="email"
                placeholder="mrkunalkr01@gmail.com"
                className="w-full px-4 py-2 border rounded-lg bg-[#eeeaea] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                onChange={updatedata} name="password" value={userdata.password} required
                type="password"
                id="Password"
                placeholder=" Password"
                autocomplete="new-password"
                className="w-full px-4 py-2 border rounded-lg  bg-[#eeeaea] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            {/* for otp */}
            <div className="flex w-[70%] justify-center mx-auto flex-row gap-2">


              <button className="w-40 py-2 bg-orange-500 text-white rounded-full font-semibold  transition">Submit</button>
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
              <Link to={'/signup'}><h className="text-red-500 font-medium hover:underline">
                Sign Up
              </h></Link>
            </p>
            <Link to={'/forgotpassword'}><p className="text-center text-sm text-black">Forgot Password ?</p></Link>
          </div>
        </form>

      </div>
    </div>

  );
};


