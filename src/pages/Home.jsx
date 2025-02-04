import React  from "react";
import Header from "./Header";
import Landingpage from "./Landingpage";
import VehicleSelection from "./Vehicle";
import HeroSection from "./Herosection";
import Footer from "./Footer";
import VisionMissionValues from "./Vision";

export default function Home(){

    return (
        <div className="w-full h-full  bg-white inset-x-0">
            <Header></Header>
            <Landingpage></Landingpage>
            <HeroSection></HeroSection>
            <VehicleSelection></VehicleSelection>
            <VisionMissionValues></VisionMissionValues>
            <Footer></Footer>
        </div>
    )
}