import React from 'react';
// Import your EventContext
import '../styles/tailwind.css';

const KeyObjectives:React.FC<any> = ({data}) => {
  if (!data) return null;
  const parseKeyObjectives = (htmlString: string) => {
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(htmlString, 'text/html');
    return Array.from(htmlDocument.querySelectorAll('p')).map((p) => p.innerText);
  };

  // Extract key objectives from data
  const keyObjectivesHTML = data?.data.event.keyObjectives; // Adjust this if the structure is different
  const keyObjectives = keyObjectivesHTML ? parseKeyObjectives(keyObjectivesHTML) : [];

  return (
    <div className="flex w-full py-[5%] px-[5%]">
      <div className="w-[40%] pr-[5%]">
        <h1 className="text-5xl font-jost font-medium text-black whitespace-nowrap">
          Key Objectives
        </h1>
      </div>
      <div className="w-[60%] flex flex-col space-y-[5%]">
        {keyObjectives.length > 0 ? (
          keyObjectives.map((objective, index) => (
            <div key={index} className="relative flex flex-col">
              <p className="self-start font-medium text-base text-gray-900 bg-white -mt-2">
                {objective}
              </p>
              <div className="w-full border-t-2 border-black mt-3"></div>
            </div>
          ))
        ) : (
          <p>Loading Key Objectives...</p>
        )}
      </div>
    </div>
  );
};

export default KeyObjectives;
