import React from 'react';
import '../index.css';
import { herophoto } from '../assets';
import styles from '../style';

const Hero = () => {
  return (  
    <div className="Section flex flex-col justify-center items-center h-screen w-full bg-black">
      <div className="BackgroundShadow2 absolute top-2/3 left-0 w-1/5 h-screen/2 opacity-70 bg-[#14105E] shadow-[0_0_150px_250px_#14105E] rounded-tl-5xl rounded-tr-5xl z-1 transform -translate-y-1/2"></div>
      <div className={'flex flex-row justify-between w-full'}>
        <div className={'TextContainer relative bottom-5 left-8 z-2 flex flex-col px-6 w-1/2'}>
          <h1 className="Heading1AllInOneEventManagementSoftware w-403 h-21 text-[#20DBD4] text-16.87 font-semibold font-Inter leading-17 mb-10 whitespace-nowrap">
            EXECUTE UNFORGETTABLE EVENTS SEAMLESSLY
          </h1>
          <div className="Heading2 font w-482 text-white text-5xl font-normal font-Inter leading-61.60 mb-10">
            World’s best AI Powered<br /> Event Management<br /> Platform
          </div>
          <p className="Summary w-583 text-white text-17.58 font-normal font-Inter leading-30.78 mb-10">
            Empowering your events with an all-in-one platform from building<br />stunning websites to seamless registrations, payments, networking,<br />and real-time support. We cover it all for unforgettable experiences
          </p>
          <div className="ButtonsContainer flex flex-row items-center justify-center gap-7 mr-32">
            <button className="button-primary w-44 h-10 pt-2 pb-2 pl-6 pr-6 bg-[#ED483E] justify-center items-center flex mb-5 transition-transform transform hover:scale-105 active:scale-95">
              <span className="text-white text-sm font-inter font-normal leading-4 uppercase whitespace-nowrap">Sign Up For Free</span>
            </button>
            <button className="button-secondary w-40 h-10 pt-2 pb-2 pl-6 pr-6 border-2 border-white justify-center items-center flex mr-20 mb-5 transition-transform transform hover:scale-105 active:scale-95">
              <span className="text-white text-sm font-inter font-normal leading-4 uppercase whitespace-nowrap">Request Demo</span>
            </button>
          </div>
        </div>
        <div className="BackgroundShadow absolute top-2/3 right-10 w-2/5 h-screen/3 opacity-70 bg-[#055562] shadow-[0_0_150px_250px_#055562] rounded-bl-5xl rounded-br-5xl z-3 transform -translate-y-1/2"></div>
        <div className="ImageContainer relative z-4 w-1/2 bottom-12 scale-[95%]">
          <img className="BannerIntroWebp w-full h-full object-cover" src={herophoto} alt="Banner Intro Webp" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
