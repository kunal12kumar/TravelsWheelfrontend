import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import Home from "./pages/Home";
import BookingConfirmation from "./pages/BookingConfirmation";
import BookingForm from "./pages/BookingForm";
import Signup from "./pages/UserSignup";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ContactUs from "./pages/Conctactus";
import AboutUs from "./pages/Aboutus";
import AdminDashboard from "./pages/AdminFolder/AdminPanel";


const allrouter = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path:'/bookingconfirmation',
    element:<BookingConfirmation></BookingConfirmation>
  },
  {
    path:'/bookingpage',
    element:<BookingForm></BookingForm>
  },
  {
    path:'/signup',
    element:<Signup></Signup>
  },
  {
    path:'/login',
    element:<SignIn></SignIn>
  },
  {
    path:'/forgotpassword',
    element:<ForgotPassword></ForgotPassword>
  },
  {
    path:'resetpassword/:token',
    element:<ResetPassword></ResetPassword>
  },
  {
    path:'/contactus',
    element:<ContactUs></ContactUs>
  },
  {
    path:'/aboutus',
    element:<AboutUs></AboutUs>

  },
  {
    path:'/adminpanel',
    element:<AdminDashboard></AdminDashboard>
  },
  {
    
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={allrouter} />
  </React.StrictMode>
);