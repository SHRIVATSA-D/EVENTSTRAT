import React from 'react';
import '../styles/tailwind.css';
import { hero } from '../assets';

const About: React.FC<any> = ({data}) => {
  if (!data) return null;
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen overflow-visible mt-[15%]">
      {/* Left Section: Hero Image */}
      <div className="flex flex-col w-full md:w-[50%] p-6 md:p-10">
        <h1 className="text-5xl font-jost font-medium text-black leading-tight mb-4 text-center md:text-right">
          About
        </h1>
        <div className="relative w-full h-[300px] md:h-[400px]"> {/* Set a fixed height for the image container */}
          <img
            src={data?.data.banners.find((banner: any) => banner.category === "EVENT_ABOUT_BANNER_IMG")?.file || hero} // Dynamic image from API or default hero image
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
          />
        </div>
      </div>

      {/* Right Section: About Text */}
      <div className="flex font-greycliff-cf flex-col w-full pt-[4%] md:w-[50%] p-6 md:pl-[3%]">
        <p
          className="text-sm text-gray-600 mb-4"
          dangerouslySetInnerHTML={{
            __html: data?.data.event.description || "Join us in shaping the future of the global maritime industry. Engage with experts, learn about innovations, and network with professionals."
          }} // Dynamically rendering the HTML text from API
        />
      </div>
    </div>
  );
};

export default About;
