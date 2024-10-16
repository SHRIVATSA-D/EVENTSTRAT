import React, { useState} from 'react'; 
import '../styles/tailwind.css';

const FAQ: React.FC<any> = ({data}) => {
  if (!data) return null;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);


  const toggleAnswer = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-row justify-between mt-20 w-full max-w-5xl">
      {/* Left Column: Questions */}
      <div className="w-full pl-[6%] space-y-4"> {/* Increased width to 80% */}
        {data?.data.faq.map((faqItem: any, index: number) => {
          // Determine if the card is selected
          const isSelected = expandedIndex === index;
          return (
            <div
              key={faqItem.id}
              className={`flex flex-col border-md p-6 rounded-xl  shadow-xl transition-all duration-300 ease-in-out ${isSelected ? 'border-secondary bg-secondary bg-opacity-5 ' : 'border-black'}`}
              style={{ borderWidth: '1.4px' }}
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className={`text-lg font-medium ${isSelected ? 'text-black' : 'text-black'}`}>
                  {faqItem.question}
                </h3>
                <span className={`relative text-xl ${isSelected ? 'text-secondary' : 'text-gray-700'} transition-transform duration-300 ${isSelected ? 'rotate-180' : ''}`}>
                  {/* SVG Dropdown Icon */}
                  <svg className="w-6 h-6 ml-1 mt-1" fill="none" stroke="currentColor" viewBox="0 0 30 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </div>
              {isSelected && (
                <p className="mt-2 pt-[3%] pl-[50%] text-gray-700 transition-all duration-300">
                  {faqItem.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Right Column: Section Heading */}
      <div className="w-1/4 flex items-start justify-center mt-2 pl-[17%]"> {/* Adjusted width and padding */}
        <h2 className="text-5xl font-jost leading-[130%] font-medium text-black whitespace-nowrap">Frequently Asked<br />Questions</h2>
      </div>
    </div>
  );
};

export default FAQ;
