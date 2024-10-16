import React from 'react';

import '../styles/tailwind.css';
import {overviewimg, hero} from '../assets';

const Overview: React.FC<any> = ({data}) => {
  if (!data) return null;
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
        <div className="flex flex-col items-start pr-[5%] w-full md:w-[35%] mb-8 md:mb-0"> {/* Center content width and padding */}
          <p
            className="text-sm font-thin font-greycliff-cf text-gray-600 mb-4"
            dangerouslySetInnerHTML={{
              __html: data?.data.event?.sectorOverview || "The Indian maritime sector plays a pivotal role in the economic growth of India. With a vast coastline of more than 7,500 km, India is among the largest maritime countries in the world."
            }} // Rendering the first overview paragraph dynamically
          />
          {/* <p
            className="text-sm font-greycliff-cf text-gray-600 mb-4"
            dangerouslySetInnerHTML={{
              __html: data?.data.event?.overviewParagraph2 || "The summit will feature industry experts, panels, and networking opportunities. Together, we will explore innovative solutions and collaborative approaches to enhance maritime operations."
            }} // Rendering the second overview paragraph dynamically
          /> */}
          {/* <p
            className="text-sm font-greycliff-cf text-gray-600"
            dangerouslySetInnerHTML={{
              __html: data?.data.event?.overviewParagraph3 || "Our goal is to create a platform for dialogue and knowledge sharing, ensuring the sustainable growth of the maritime industry for years to come."
            }} // Rendering the third overview paragraph dynamically
          /> */}
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center w-full md:w-[30%]"> {/* Adjust width for the image */}
          <img
            src={data?.data.banners.find((banner: any) => banner.category === "OVERVIEW_IMAGE")?.file || overviewimg} // Dynamic image from API or fallback to default
            alt="Overview"
            className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105" // Make the image responsive and add effects
          />
        </div>
      </div>

      {/* Background Section Image */}
      <div className="relative mx-[5%] mb-[7%] w-80% h-[80%]"> {/* Set height for the hero image */}
        <img
          src={data?.data.banners.find((banner: any) => banner.category === "HERO_BANNER_IMG")?.file || hero} // Dynamic hero image from API or fallback to default
          alt="Section Image"
          className="w-full h-full object-cover rounded-t-lg" // Ensure the hero image covers its container
        />
      </div>
    </div>
  );
};

export default Overview;
