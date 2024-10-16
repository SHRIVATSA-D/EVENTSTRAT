import React from 'react';
import '../index.css';

const KeyObjectives = () => {
  return (
    <div className="flex w-full py-[5%] px-[5%]">
      <div className="w-[40%] pr-[5%]">
        <h1 className="text-5xl font-jost font-medium text-black whitespace-nowrap">
          Key Objectives
        </h1>
      </div>
      <div className="w-[60%] flex flex-col space-y-[5%]">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="relative flex flex-col">
            <p className="self-start font-medium text-base text-gray-900 bg-white -mt-2"> {/* bg-white and padding to cover line */}
              Objective {index + 1}
            </p>
            {/* Line below the objective */}
            <div className="w-full border-t-2 border-black mt-3"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyObjectives;
