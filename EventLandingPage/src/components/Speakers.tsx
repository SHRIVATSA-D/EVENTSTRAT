import React from 'react';
import '../styles/tailwind.css'; // Assuming you have some global styles
import { overviewimg } from '../assets'; // Use overviewimg for all squares

const Speakers: React.FC<any> = ({ data }) => {
  if (!data) return null;

  // Step 1: Gather all speakers from agendas
  const allSpeakers = data?.data?.agendas?.reduce((acc: any[], agenda: any) => {
    if (agenda.speakers) {
      return [...acc, ...agenda.speakers]; // Combine speakers from all agendas
    }
    return acc;
  }, []);

  if (!allSpeakers || allSpeakers.length === 0) {
    return <p className="text-xl font-jost text-black">No speakers available at this moment.</p>;
  }

  return (
    <div className="flex w-full mt-[5%]">
      {/* Left: Grid */}
      <div className="w-[65%] pl-[5%] overflow-y-auto max-h-[1000px]"> {/* Make grid scrollable */}
        <div className="grid grid-cols-2 gap-0">
          {allSpeakers.map((speaker: any, index: number) => {
            // Determine if the current image should have the translucent background
            // First image in odd rows (0, 2, 4, etc.), second image in even rows (1, 3, 5, etc.)
            const isTranslucentBg = (Math.floor(index / 2) % 2 === 0 && index % 2 === 0) || 
                                    (Math.floor(index / 2) % 2 !== 0 && index % 2 !== 0);

            return (
              <div key={speaker.id} className="relative w-full pt-[100%] bg-white group"> {/* Group for hover effect */}
                {/* Apply translucent background based on the pattern */}
                {isTranslucentBg && (
                  <div className="absolute inset-0 bg-secondary bg-opacity-10 z-10"></div> // Translucent overlay
                )}

                {/* Speaker Image */}
                <img
                  src={speaker.photo || overviewimg} // Use speaker photo or placeholder
                  alt={`${speaker.firstName} ${speaker.lastName}`}
                  className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-transform duration-300 transform"
                />

                {/* Speaker Name and Title Overlay - initially hidden, shows on hover */}
                <div className="absolute bottom-0 `left-0 w-full p-4 text-left transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-secondary to-transparent">
                  <h1 className="text-black text-xl font-bold">{speaker.firstName} {speaker.lastName}</h1>
                  <p className="text-white text-sm">{speaker.title} at {speaker.company}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: Text Components */}
      <div className="w-[35%] flex flex-col justify-start pt-[1%] pl-[3%]">
        {/* Heading */}
        <h1 className="text-5xl font-medium text-black">Our Esteemed Speakers</h1>

        {/* Smaller Description */}
        <p className="text-sm text-gray-600 w-[70%] pr-[2%] mt-[12%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
        </p>

        {/* Button */}
        <button className="mt-[10%] w-[40%] bg-secondary text-white py-2 px-6 rounded-full text-sm font-medium hover:bg-secondary transition duration-300 scale-110">
          See All Speakers
        </button>
      </div>
    </div>
  );
};

export default Speakers;
