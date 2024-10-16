import React from 'react';
import '../index.css';
import { overviewimg, hero } from '../assets'; // Adjust the path to your image asset

const Overview = () => {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row w-full min-h-screen items-start pt-[8%] px-[5%]"> {/* Center items and add padding */}
        {/* Left Section: Title */}
        <div className="flex flex-col w-full md:w-[30%] mb-8 md:mb-0"> {/* Adjust width for the title */}
          <h1 className="text-5xl font-jost font-medium text-black leading-tight">
            Overview
          </h1>
        </div>

        {/* Center Section: Information */}
        <div className="flex flex-col items-start w-full md:w-[40%] mb-8 md:mb-0"> {/* Center content width and padding */}
          <p className="text-sm font-thin font-greycliff-cf text-gray-600 mb-4">
            The Indian maritime sector plays a pivotal role in the economic growth of India. With a vast coastline of more than 7,500 km, India is among the largest maritime countries in the world.
          </p>
          <p className="text-sm font-greycliff-cf text-gray-600 mb-4">
            The summit will feature industry experts, panels, and networking opportunities. Together, we will explore innovative solutions and collaborative approaches to enhance maritime operations.
          </p>
          <p className="text-sm font-greycliff-cf text-gray-600">
            Our goal is to create a platform for dialogue and knowledge sharing, ensuring the sustainable growth of the maritime industry for years to come.
          </p>
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center w-full md:w-[30%]"> {/* Adjust width for the image */}
          <img
            src={overviewimg}
            alt="Overview"
            className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105" // Make the image responsive and add effects
          />
        </div>
      </div>

      {/* Background Section Image */}
      <div className="relative w-full h-[50vh]"> {/* Set height for the hero image */}
        <img
          src={hero}
          alt="Section Image"
          className="w-full h-full object-cover rounded-t-lg" // Ensure the hero image covers its container
        />
      </div>
    </div>
  );
};

export default Overview;
