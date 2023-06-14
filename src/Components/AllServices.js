import React from "react";
import { ImMobile } from "react-icons/im";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { GiLaptop } from "react-icons/gi";
import { BsCart4 } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";
import { GiPublicSpeaker } from "react-icons/gi";

const AllServices = () => {
  return (
    <div className=" my-[3rem]">
      <div className="px-6 py-2 ">
        <h1 className="text-3xl text-black text-center font-medium">
          Our Web/Mobile App Development All Services
        </h1>
      </div>
      <div className="px-6 py-2 ">
        <p className="text-center">
          Experience India's Outsourcing Excellence. ENVY TECH Solution:
          Unleashing Innovation in Web/Mobile App Development & Design
          Services."
        </p>
      </div>
      {/* ======== ALL 1 to 3 services grid ========== */}
      <div className="grid lg:grid-cols-3 gap-2 grid-cols-1 px-6 my-4 text-center  cursor-pointer  ">
        {/* ==== 1 ====== */}
        <div className="bg-gray-200 p-8 rounded-md transition duration-300 transform hover:-translate-y-2 ">
          <div className="flex justify-center">
            <MdOutlineScreenSearchDesktop className="text-6xl" />
          </div>
          <h1 className="text-3xl font-bold my-2 ">Web Development</h1>
          <p className="text-lg my-4 ">
            Attract, Engage, and Succeed with our Expertly Crafted Professional
            Web Designs.
          </p>
          <button className="bg-[#427294]  hover:bg-[#162631] text-white px-2 py-1 rounded-md text-[1rem]">
            Learn More &darr;
          </button>
        </div>

        {/* ==== 2 ====== */}
        <div className="bg-gray-300 p-8 rounded-md transition duration-300 transform hover:-translate-y-2">
          <div className="flex justify-center">
            <GiLaptop className="text-6xl" />
          </div>
          <h1 className="text-3xl font-bold my-2 ">UI/UX Design</h1>
          <p className="text-lg my-4 ">
            Embracing Innovation: Our Developers Push the Boundaries of Coding
            with Creativity.
          </p>
          <button className="bg-[#427294]  hover:bg-[#162631] text-white px-2 py-1 rounded-md text-[1rem]">
            Learn More &darr;
          </button>
        </div>
        {/* ==== 3 ====== */}
        <div className="bg-gray-400 p-8 rounded-md transition duration-300 transform hover:-translate-y-2">
          <div className="flex justify-center">
            <ImMobile className="text-6xl" />
          </div>
          <h1 className="text-3xl font-bold my-2 ">Mobile Application</h1>
          <p className="text-lg my-4 ">
            Our Mobile Development Team Thrives on Innovation and Explores
            Cutting-Edge Technologies.
          </p>
          <button className="bg-[#427294]  hover:bg-[#162631] text-white px-2 py-1 rounded-md text-[1rem]">
            Learn More &darr;
          </button>
        </div>
      </div>

      {/* ======== 4 to 6 ======== */}
      {/* ======== 4 to 6 ======== */}

      <div className="grid lg:grid-cols-3 gap-2 grid-cols-1 px-6 my-4 text-center    ">
        {/* ==== 1 ====== */}
        <div className="bg-gray-200 p-8 rounded-md transition duration-300 transform hover:-translate-y-1 ">
          <div className="flex justify-center">
            <BsCart4 className="text-6xl" />
          </div>
          <h1 className="text-3xl font-bold my-2 ">Ecommerce Development</h1>
          <p className="text-lg my-4 ">
            Attract, Engage, and Succeed with our Expertly Crafted Professional
            Web Designs.
          </p>
          <button className="bg-[#427294]  hover:bg-[#162631] text-white px-2 py-1 rounded-md text-[1rem]">
            Learn More &darr;
          </button>
        </div>

        {/* ==== 2 ====== */}
        <div className="bg-gray-300 p-8 rounded-md transition duration-300 transform hover:-translate-y-1 ">
          <div className="flex justify-center">
            <GiPublicSpeaker className="text-6xl" />
          </div>
          <h1 className="text-3xl font-bold my-2 ">Digital Marketing</h1>
          <p className="text-lg my-4 ">
            Embracing Innovation: Our Developers Push the Boundaries of Coding
            with Creativity.
          </p>
          <button className="bg-[#427294]  hover:bg-[#162631] text-white px-2 py-1 rounded-md text-[1rem]">
            Learn More &darr;
          </button>
        </div>
        {/* ==== 3 ====== */}
        <div className="bg-gray-400 p-8 rounded-md transition duration-300 transform hover:-translate-y-1">
          <div className="flex justify-center">
            <TbReportSearch className="text-6xl" />
          </div>
          <h1 className="text-3xl font-bold my-2 ">
            Search Engine Optimization
          </h1>
          <p className="text-lg my-4 ">
            Our Mobile Development Team Thrives on Innovation and Explores
            Cutting-Edge Technologies.
          </p>
          <button className="bg-[#427294]  hover:bg-[#162631] text-white px-2 py-1 rounded-md text-[1rem]">
            Learn More &darr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
