import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import Home from "./pages/Home";
import BookingConfirmation from "./pages/BookingConfirmation";
import BookingForm from "./pages/BookingForm";
import Signup from "./pages/UserSignup";


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
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={allrouter} />
  </React.StrictMode>
);