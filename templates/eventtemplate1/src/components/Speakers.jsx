import React from 'react';
import '../index.css'; // Assuming you have some global styles
import { overviewimg } from '../assets'; // Use overviewimg for all squares

const Speakers = () => {
  return (
    <div className="flex w-full mt-[5%]"> {/* Flex container for grid and text */}
      {/* Left: Grid */}
      <div className="w-[65%] pl-[5%]"> {/* Set grid width to 60% */}
        <div className="grid grid-cols-2 gap-0"> {/* No gap between grid items */}
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <div key={number} className="relative w-full pt-[100%]"> {/* Maintain square aspect ratio */}
              
              {/* Translucent bg-primary for images 1, 4, and 5 */}
              { [1, 4, 5].includes(number) && (
                <div className="absolute inset-0 bg-primary bg-opacity-20 z-10"></div> // Translucent overlay
              )}

              {/* Image */}
              <img
                src={overviewimg}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
              />

              {/* Number overlay */}
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-20">
                <h1 className="text-white text-4xl font-bold">{number}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Text Components */}
      <div className="w-[35%] flex flex-col justify-start pt-[1%] pl-[3%] "> {/* Space for text, aligned right */}
        {/* Heading */}
        <h1 className="text-5xl font-medium text-black">Our Esteemed Speakers</h1>

        {/* Smaller Description */}
        <p className="text-sm text-gray-600 w-[70%] pr-[2%] mt-[12%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
        </p>

        {/* Button */}
        <button className="mt-[10%] w-[40%] bg-primary text-white py-2 px-6  rounded-full text-sm font-medium">
          See All Speakers
        </button>
      </div>
    </div>
  );
};

export default Speakers;
