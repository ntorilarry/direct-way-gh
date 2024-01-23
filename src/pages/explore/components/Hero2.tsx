import React from "react";
import SearchJob from "./SearchJob";
import Bghero from "../../../assets/images/herobg.webp";

function Hero2() {
  return (
    <div>
      <div className="relative  bg-white">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full object-center"
            src={Bghero}
            alt=""
          />
        </div>

        <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>

        <div className="relative px-4 h-[100vh] flex items-center justify-center mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-lg mx-auto text-center xl:max-w-4xl">
            <h1 className="mt-16 text-4xl font-normal text-white sm:text-5xl ">
              "DirectWayz GH: Where Professionals Thrive and Projects Soar!"
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-base font-normal text-gray-300">
              "Connecting Talent, Unlocking Opportunities: Empowering Careers
              Together!"
            </p>
            <SearchJob />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
