import React from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { FaGamepad } from "react-icons/fa6";
import { PiBagSimpleFill } from "react-icons/pi";

function Leads() {
  return (
    <div>
      <div className=" py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="grid gap-4 row-gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="bg-white rounded-lg flex flex-col justify-between p-4 border">
            <div>
              <h1 className="text-[18px] font-semibold text-black mb-2 ">
                Cleaners at Tesla
              </h1>
              <div className="flex flex-wrap text-[#53575A] items-center">
                <CiUser className="text-[16px] " />
                <h1 className="text-[14px] pl-2 font-normal">
                  Creative Solutions, Inc.
                </h1>
              </div>
              <div className="flex flex-wrap text-[#53575A] items-center">
                <CiLocationOn className="text-[16px] " />
                <h1 className="text-[14px] pl-2 font-normal">
                  Royal Dome Kashire - Agona
                </h1>
              </div>
              <div className="flex flex-wrap text-[#53575A] items-center">
                <CiCalendar className="text-[16px] " />
                <h1 className="text-[14px] pl-2 font-normal">10.11.2023</h1>
              </div>
              <div className="flex text-[#53575A] py-2 items-center">
                <FaGamepad className="text-[16px] " />
                <hr className=" w-full"></hr>
              </div>
              <div className="flex text-[#53575A] items-center">
                <p>Description summary goes here so user’s understand.</p>
              </div>
              <button className="inline-flex cursor-pointer my-2 items-center justify-center rounded-md bg-[#4187ED] px-3 py-2 text-xs font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent">
                View and Apply
                <PiBagSimpleFill className="ml-2"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leads;
