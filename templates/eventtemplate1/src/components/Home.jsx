import React from 'react';
import '../index.css';
import { hero, location, calendar } from '../assets';

const Home = ({ eventData }) => {
  return (
    <div className="relative flex flex-col w-full min-h-screen overflow-visible bg-gray-50">
      {/* Welcome Section */}
      <div className="relative w-[100%] h-auto mt-[10%] pl-[30%] flex flex-row items-start">
  <h1 className="text-5xl mt-[5%] font-jost font-bold text-black leading-tight" style={{ height: '68px' }}>
    Welcome to
    <br />
    Global Maritime India Summit 2023
  </h1>
  <p className="w-[50%] mt-[5%] pr-[5%] text-sm text-gray-700 leading-relaxed" style={{ marginBottom: '68px' }}>
    Join us in shaping the future of the global maritime industry.
    Engage with experts, learn about innovations, and network with professionals.
    Engage with experts, learn about innovations, and network with professionals.
    Engage with experts, learn about innovations, and network with professionals.
  </p>
</div>

      {/* Hero Image and Location/Date Section */}
      <div className="relative mx-auto w-[70%] ml-[30%]">
        <img
          src={hero}
          alt="Hero"
          className="relative z-20 w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
        />
        {/* Overlay Section for Location and Date */}
        <div className="absolute z-10 -bottom-16 pl-[5%] flex flex-col right-[96%] w-1/2 bg-primary bg-opacity-30 p-[5%] rounded-lg shadow-lg">
          {/* Location Information */}
          <div className="flex pr-[12%] items-center mb-10">
            <img
              src={location}
              alt="Location Icon"
              className="w-8 h-8 mr-2"
            />
            <h2 className="text-xl font-jost font-medium text-black leading-tight">
              MMRDA Ground, BKC, Mumbai
            </h2>
          </div>

          {/* Date Information */}
          <div className="flex items-center">
            <img
              src={calendar}
              alt="Calendar Icon"
              className="w-8 h-8 mr-2"
            />
            <h2 className="text-xl font-jost font-medium text-black leading-tight">
              12th Feb 2024 - 18th Feb 2024
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
