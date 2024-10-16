import React, { useState } from 'react';
import '../index.css';

const questionsAndAnswers = [
  {
    question: "What is GMIS 2023?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
  },
  {
    question: "How can I register for the event?",
    answer: "You can register for the event by visiting our registration page and filling out the required information."
  },
  {
    question: "Is there a fee to attend?",
    answer: "Attendance is free, but registration is mandatory to secure your spot."
  },
  {
    question: "Will there be food and beverages provided?",
    answer: "Yes, food and beverages will be provided to all registered participants during the event."
  },
  {
    question: "Who can I contact for more information?",
    answer: "You can contact our support team via the contact form on our website for any inquiries."
  }
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-row justify-between mt-20 w-full max-w-5xl">
      {/* Left Column: Questions */}
      <div className="w-full pl-[6%] space-y-4"> {/* Increased width to 80% */}
        {questionsAndAnswers.map((qa, index) => {
          // Determine if the card is selected
          const isSelected = expandedIndex === index;
          return (
            <div
              key={index}
              className={`flex flex-col border-md p-7 transition-all duration-300 ease-in-out ${
                isSelected ? 'border-primary bg-primary bg-opacity-10' : 'border-black'
              }`} style={{ borderWidth: '1.4px' }}
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex justify-between items-center"> 
                <h3 className={`text-lg font-medium ${isSelected ? 'text-black' : 'text-black'}`}>
                  {qa.question}
                </h3>
                <span className={`relative text-xl ${isSelected ? 'text-primary' : 'text-gray-700'} transition-transform duration-300 ${isSelected ? 'rotate-180' : ''}`}>
                  {/* SVG Dropdown Icon */}
                  <svg className="w-6 h-6 ml-1 mt-1" fill="none" stroke="currentColor" viewBox="0 0 30 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </div>
              {isSelected && (
                <p className="mt-2 pt-[3%] pl-[50%] text-gray-700 transition-all duration-300">{qa.answer}</p>
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
