import React from 'react';
import '../index.css';
import { hero } from '../assets'; // Assuming you have the hero image

const About = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen overflow-visible mt-[15%]">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-[50%] p-6 md:p-10">
        <h1 className="text-5xl font-jost font-medium text-black leading-tight mb-4 text-center md:text-right">
          About
        </h1>
        <div className="relative w-full h-[300px] md:h-[400px]"> {/* Set a fixed height for the image container */}
          <img
            src={hero}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105" 
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex font-greycliff-cf flex-col w-full pt-[4%] md:w-[50%] p-6 md:pl-[3%]">
        <p className="text-sm text-gray-600 mb-4">
          Global Maritime India Summit (GMIS) 2023 is a flagship event aimed at propelling the
          Indian maritime economy by promoting global and regional partnerships and facilitating investments.
        </p>
        <p className="text-sm text-gray-600 mb-4">
          It is an annual meet of the Indian and international maritime community to address key industry 
          issues and exchange ideas to bring the sector forward. Driven by the Ministry of Ports, 
          Shipping and Waterways, GMIS 2023 brings together global maritime players, policy makers and
          regulators, key opinion leaders, and industry leaders through a series of engaging dialogues, 
          forums, and knowledge exchange platforms.It is an annual meet of the Indian and international maritime community to address key industry 
          issues and exchange ideas to bring the sector forward. Driven by the Ministry of Ports, 
          Shipping and Waterways, GMIS 2023 brings together global maritime players, policy makers and
          regulators, key opinion leaders, and industry leaders through a series of engaging dialogues, 
          forums, and knowledge exchange platforms.
        </p>
      </div>
    </div>
  );
};

export default About;
