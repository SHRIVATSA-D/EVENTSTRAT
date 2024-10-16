import React from 'react';
import '../index.css';
import { feature1 } from '../assets';

const Solutions3 = () => {
  return (
    <div className="solutions-section h-screen">
    <div className="section flex flex-col flex-center bg-[#171515] h-screen w-screen z-0 relative">
      <div className="container w-full max-w-screen-xl mt-5 pl-[10%] mx-auto p-4 pt-6 relative z-10">
        <div className="text-[#6cf59c] text-sm font-light font-inter leading w-1/6 h-1/12">
          "Achieve more in less<br/> time with greater<br/> efficiency and ease."
        </div>
        <div className="top-1/2 flex gap-[10%] w-full">
          <div className="stack top-1/2 w-[35%] leading-[1000px]">
            <div className="text-white w-2/5 flex text-5xl font-light mt-4 mb-1 font-inter whitespace-nowrap">
              End-to-end
              <div className="bg-[#25ea69] rounded-full h-1/3 ml-2 p-4 justify-center items-center">
                <div className="flex flex-col justify-center gap-0.5">
                  <div className="bg-white h-1 w-3.5 rounded-full" />
                  <div className="bg-white h-1 w-3.5 ml-1 rounded-full" />
                  <div className="bg-white h-1 w-2 rounded-full" />
                </div>
              </div>
            </div>
            <h1 className="text-white flex text-5xl font-light font-inter leading-[62.50px]">
              event<br />management
            </h1>
          </div>
          <p className="text-white text-base font-light font-inter leading-[30.78px] pl-[10%]">
            Equip your team with everything they need to simplify<br />
            event planning—from setting the agenda and managing<br />
            sponsor proposals to answering attendee inquiries and<br />
            hosting seamless meetings on our platform.
          </p>
        </div>
      </div>
      <div className="BackgroundShadow3"></div>
      <div className="BackgroundShadow4"></div>
      <div className="flex justify-center absolute top-[50%] left-[50%] translate-x-[-50%] z-10">
          <img className="z-20 object-cover" src={feature1} alt="Feature 1" />
        </div>
      {/* White thin section at the bottom */}
      {/* Background shadows */}     
      </div>
      </div>  
  );
};

export default Solutions3;
