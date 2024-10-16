import React from 'react';
import './index.css';
import { herophoto } from '../assets';

const HeroSection = () => {
  return (
<div class="Section h-screen w-full bg-black pt-40">
 <div class="BackgroundShadow absolute top-3/4 right-0 w-1/2 h-screen/2 opacity-70 bg-[#055562] shadow-[0_0_150px_200px_#055562] rounded-289.20 z-1 transform -translate-y-1/2"></div> 
 <div class="BackgroundShadow2 absolute top-3/4 left-0 w-1/4 h-screen/2 opacity-70 bg-[#14105E] shadow-[0_0_150px_200px_#14105E] rounded-289.20 z-2 transform -translate-y-1/2"></div>
 <div class="Container relative w-1280 h-1047.25  flex flex-row items-center z-3">
  {/* <div class="gogo absolute top-100 left-1000 w-200 h-96.81 opacity-70 bg-[#055562] shadow-[0_0_150px_200px_#055562] rounded-289.20 z-1 mt-300"></div>
  <div class="gogo2 absolute top-100 left-1000 w-700 h-90.81 opacity-70 bg-[#14105E] shadow-[0_0_150px_200px_#14105E] rounded-289.20 z-2 mt-300"></div>   */}
    <div class="TextContainer flex flex-col items-start justify-center w-640 h-547.25">
      <h1 class="Heading1AllInOneEventManagementSoftware w-403 h-21 text-[#20DBD4] text-16.87 font-normal font-sans leading-17 mb-10 whitespace-nowrap">EXECUTE UNFORGETTABLE EVENTS SEAMLESSLY</h1>
      <div class="Heading2 w-482 text-white text-5xl font-light font-sans leading-61.60 mb-10">World’s best AI Powered<br/>Event Management<br/>Platform</div>
      <p class="Summary w-583 text-white text-17.58 font-normal font-sans leading-30.78 mb-10">Empowering your events with an all-in-one platform from building<br/>stunning websites to seamless registrations, payments, networking,<br/>and real-time support. We cover it all for unforgettable experiences.</p>
      <div class="ButtonsContainer flex flex-row items-center justify-center gap-4">
        <a class="Link w-253.36 h-50 py-14 px-32 bg-ED483E justify-center items-center flex mb-20" href="#">
          <span class="SignUpForFree w-159.56 h-21 text-center text-white text-17.58 font-normal font-sans uppercase leading-18">Sign Up For Free</span>
        </a>
        <a class="LinkDialog w-204.45 h-50 py-14 px-32 border-2 border-white justify-center items-center flex mb-20" href="#">
          <span class="RequestDemo top-10 w-140.65 h-21 text-white text-17.86 font-normal font-sans uppercase leading-18 whitespace-nowrap">Request Demo</span>
        </a>
      </div>
    </div>
    <div class="ImageContainer w-700 h-673.77 mr-150 ml-5 mt-10">
      <img class="BannerIntroWebp w-full h-full object-cover" src={herophoto} alt="Banner Intro Webp" />
    </div>
  </div>
</div>
  );
};

export default HeroSection;