import React from 'react'; 
import '../styles/tailwind.css';
import { location, calendar, hero } from '../assets'; // Assuming you have a placeholder image

const Home: React.FC<any> = ({data}) => {
  if (!data) return null;

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  // Get start and end dates from data
  const startDate = data?.data.event.startDate; // Updated to include .event
  const endDate = data?.data.event.endDate;     // Updated to include .event

  return (
    <div className="relative flex flex-col w-full min-h-screen overflow-visible bg-gray-50">
      {/* Welcome Section */}
      <div className="relative w-[100%] h-auto mt-[10%] pl-[30%] flex flex-row items-start">
        <h1 className="text-5xl mt-[5%] font-jost font-medium text-black leading-tight" style={{ height: '68px' }}>
          Welcome to
          <br />
          {data?.data.event.name || "Global Maritime India Summit 2023"} {/* Default title if not provided */}
        </h1>

      </div>

      {/* Hero Image and Location/Date Section */}
      <div className="relative mt-[5%] mx-auto w-[70%] ml-[30%]">
        <img
          src={data?.data.banners.find((banner: any) => banner.category === "EVENT_HERO_BANNER_IMG")?.file || hero} // Use dynamic image or placeholder
          alt="Hero"
          className="relative z-20 w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
        />
        {/* Overlay Section for Location and Date */}
        <div className="absolute z-10 -bottom-16 pl-[5%] flex flex-col right-[96%] w-1/2 bg-secondary bg-opacity-30 p-[5%] rounded-lg shadow-lg">
          {/* Location Information */}
          <div className="flex pr-[12%] items-center mb-10">
            <img
              src={location}
              alt="Location Icon"
              className="w-8 h-8 mr-2"
            />
            <h2 className="text-xl font-jost font-medium text-black leading-tight">
              {data?.data.event.address || "BKC BKC Ground, BKC, Mumbai"} {/* Default location if not provided */}
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
              {startDate && endDate 
                ? `${formatDate(startDate)} - ${formatDate(endDate)}`
                : "12th Feb 2024 - 18th Feb 2024" // Default date if not provided
              }
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
