import React from 'react';
import './index.css';
import {feature1} from '../assets'

const Feature1 = () => {
  return (
<div className="section relative bg-[#171515] h-[1000px] z-1">
  <div className="container mt-10 ml-20 mx-auto p-4 pt-6">

  <div className="flex justify-between gap-40 mt-10">
  <h2 className="text-[#6cf59c] text-base font-normal font-sans leading h-[80.78px]">
    Achieve more in less<br/> time with greater<br/> efficiency and ease.
  </h2>
  <p className="text-white text-lg font-normal font-sans leading-[30.78px] mr-60 mt-10">
    Equip your team with everything they need to simplify<br/>event planning—from setting the agenda and managing<br/>sponsor proposals to answering attendee inquiries and<br/>
    hosting seamless meetings on our platform.
  </p>
</div>
    <div className="flex items-center gap-4 ">
      <h1 className="text-white text-6xl font-normal font-sans leading-[75px]">End-to-end</h1>
      <div className="bg-[#25ea69] rounded-full p-4 flex justify-center items-center">
        <div className="flex flex-col gap-2">
          <div className="bg-white h-1.5 w-4 rounded-full" />  
          <div className="bg-white h-1.5 w-5 rounded-full" />
          <div className="bg-white h-1.5 w-1 rounded-full" />
        </div>
      </div>
    </div>
    <h1 className="text-white text-6xl font-normal font-sans leading-[75px] mb-10">event<br/>management</h1>
    <div className="flex justify-center mb-12">
    <img className="w-50 h-50 mb-150 mr-20 z-2 object-cover" src={feature1} alt="Feature 1"/>
    </div>
    <div class="BackgroundShadow3"></div> 
    <div class="BackgroundShadow4"></div>
  </div>
  <div className="absolute bottom-0 left-0 w-full">
  </div>
</div>
  );
};

export default Feature1;