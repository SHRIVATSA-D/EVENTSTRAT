import React, { useState } from 'react';
import { ScheduleData } from './ScheduleData';
import { clock } from '../assets';
import '../index.css'; // Assuming scheduleData is imported

const EventSchedule = () => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0); // Tracks the selected day
  const [visibleRange, setVisibleRange] = useState([0, 2]); // Show 3 tabs by default (Day 1, Day 2, Day 3)

  const numberOfDays = ScheduleData.length;
  const maxVisibleTabs = 3; // Only show 3 tabs at a time

  const handleNext = () => {
    if (currentDayIndex < visibleRange[1]) {
      setCurrentDayIndex((prevIndex) => Math.min(prevIndex + 1, numberOfDays - 1));
    } else if (visibleRange[1] < numberOfDays - 1) {
      const newStart = visibleRange[0] + maxVisibleTabs;
      const newEnd = Math.min(newStart + maxVisibleTabs - 1, numberOfDays - 1);

      setVisibleRange([newStart, newEnd]);
      setCurrentDayIndex(newStart); // Select the first day in the new set
    }
  };

  const handlePrevious = () => {
    if (currentDayIndex > visibleRange[0]) {
      setCurrentDayIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (visibleRange[0] > 0) {
      const newStart = Math.max(visibleRange[0] - maxVisibleTabs, 0);
      const newEnd = newStart + maxVisibleTabs - 1;
      setVisibleRange([newStart, newEnd]);
      setCurrentDayIndex(newEnd);
    }
  };

  return (
    
    <div className="relative pl-[5%] pr-[10%] pt-[10%]">
      {/* Translucent Background Squares */}
      <div className="absolute inset-0 z-[0]">
        {/* Dynamic positioning of squares based on the number of events */}
        <div
          className="bg-primary opacity-10 absolute w-[300px] h-[300px]"
          style={{
            top: '30%', // Adjust position based on the design
            left: '15%',
          }}
        />
        <div
          className="bg-primary opacity-10 absolute w-[300px] h-[300px]"
          style={{
            top: '50%', // Position under the second speaker
            right: '20%',
          }}
        />
        <div
          className="bg-primary opacity-10 absolute w-[300px] h-[300px]"
          style={{
            top: '70%', // Position below the third event schedule
            left: '20%',
          }}
        />
      </div>
      {/* Heading */}
      <div className="flex font-jost md:flex-row items-center text-[280%] font-medium w-full whitespace-nowrap mb-5">
        Event Schedule
        <div className="flex pl-[10%] pt-[5%] items-center space-x-40 whitespace-nowrap font-jost font- mb-10">
          {ScheduleData.slice(visibleRange[0], visibleRange[1] + 1).map((_, index) => {
            const dayNumber = visibleRange[0] + index + 1;
            return (
              <button
                key={dayNumber}
                onClick={() => setCurrentDayIndex(visibleRange[0] + index)}
                className={`px-[4%] py-[1%] text-lg rounded-full transition-all font-normal duration-300 
                  ${currentDayIndex === visibleRange[0] + index
                    ? 'border border-primary font-bold text-primary bg-transparent'
                    : 'bg-white font-bold hover:bg-gray-300'
                  }`}
              >
                Day {dayNumber}
              </button>
            );
          })}
        </div>
      </div>

       {/* Navigation Buttons */}
        <div className="flex justify-between mb-5">
          {/* <button 
            className={px-4 py-2 rounded-lg bg-primary text-white ${currentDayIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}}
            onClick={handlePrevious}
            disabled={currentDayIndex === 0} // Disable if on the first day
          >
            Previous
          </button>
          <button 
            className={px-4 py-2 rounded-lg bg-primary text-white ${visibleRange[1] >= numberOfDays - 1 ? 'opacity-50 cursor-not-allowed' : ''}}
            onClick={handleNext}
            disabled={visibleRange[1] >= numberOfDays - 1 && currentDayIndex === numberOfDays - 1}
          >
            Next
          </button> */}
        </div>

      {/* Second Div with Date, Event Schedule, and Speakers */}
      <div className="flex justify-between">
        {/* Date Component */}
        <div className="flex-1">
          <div className="rounded-lg bg-white mt-[10%]">
            <h1 className="text-primary text-5xl font-bold mb-[5%]">{ScheduleData[currentDayIndex].date}</h1>
            <p className="text-black text-sm">
              {ScheduleData[currentDayIndex].month} {ScheduleData[currentDayIndex].year},
            </p>
            <p className="text-gray-500">{ScheduleData[currentDayIndex].dayOfWeek}</p>
          </div>
        </div>

        {/* Event Schedule and Speakers Side by Side */}
        <div className="flex-1 ml-[10%] mt-[5%]">
          {ScheduleData[currentDayIndex]?.events?.length > 0 ? (
            ScheduleData[currentDayIndex].events.map((event, index) => (
              <div key={index} className="mb-12 rounded-md flex gap-1">
                {/* Event details */}
                <div className="flex-[4] -ml-[40%] w-[0%]"> {/* Give more space to the event details */}
                  <h3 className="text-lg font-greycliff-cf font-thin text-gray-400 mb-[5%] flex gap-3">
                    <img src={clock} alt="clock" className="w-5 h-5" />
                    {event.time}
                  </h3>
                  <h4 className="text-lg font-greycliff-cf font-light text-primary">{event.title}</h4>
                  <p className="text-sm text-gray-600 mb-[5%]">{event.description}</p>
                </div>

                {/* Speakers section */}
                <div className="flex-[2] ml-[30%] w-[30%]"> {/* Give less space to the speakers */}
                  <h2 className="text-gray-500 text-lg font-normal mb-[5%]">Speakers</h2>
                  {event.speakers?.length > 0 ? (
                    event.speakers.map((speaker, speakerIndex) => (
                      <p key={speakerIndex} className="text-sm text-primary mb-[2%]">
                        {speaker}
                      </p>
                    ))
                  ) : (
                    <p>No speakers listed for this event.</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No events scheduled for this day.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;
