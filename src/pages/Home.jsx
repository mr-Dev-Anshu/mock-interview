import React from "react";
import Swiper from "../components/Swiper";
import { notifySuccess } from "../toaster/Toaster";
import { Toaster } from "react-hot-toast";

const Home = () => {

   const handleNotify = () => {
    notifySuccess()  ; 
   }
  return (
    <div className="h-fit">
      <Swiper />
      <button onClick={handleNotify} className="font-bold text-6xl outline p-2     ">click me fuckker </button>
      <Toaster/>
    </div>
  );
};

export default Home;
