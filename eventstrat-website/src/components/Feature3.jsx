import React from 'react';
// import './index.css';
import {payment, techsupport} from '../assets';

const Feature3 = () => {
  return (
    <div className="Section w-[1280px] h-[1020.59px] relative" style={{ backgroundColor: 'white' }}>
    <div className="Container w-[421px] left-[690px] top-[58px] absolute justify-center items-center inline-flex">
    <div className="HelpSupport w-[440px] h-[138px] left-[190px] top-[214px] text-[#18191f] text-[40px] font-normal font-['Inter'] leading-[46px]">Help & Support
  <div className="Text w-[521px] text-black text-lg font-normal font-['Inter'] leading-[30.80px]">Our Help and Support feature ensures attendees and organizers receive real-time assistance throughout the event. With integrated support options like live chat, ticketing systems, and detailed FAQs, users can quickly resolve any issues or get answers to their questions. This proactive support approach guarantees a smooth event experience, from planning to execution.<br/><br/><br/><br/><br/><br/><br/></div>
</div>
    </div>
    <div className="Payments w-[436.20px] h-[138px] left-[114px] top-[416px] absolute text-[#18191f] text-[40px] font-normal font-['Inter'] leading-[46px]">Payments</div>
    <div className="Container w-[438px] h-[184.59px] left-[690px] top-[777px] absolute" />
    <img className="Gettyimages13209338751 w-[447px] h-[412px] left-[797px] top-[647px] absolute rounded-[15px]" src={techsupport} />
    <div className="text2 w-[539px] h-[175px] left-[114px] top-[577px] absolute text-black text-lg font-normal font-['Inter'] leading-[30.78px]">Our Payments feature offers seamless and secure transaction processing, allowing attendees to easily purchase tickets, register for events. With support for multiple payment gateways, flexible pricing options, and automatic invoicing, event organizers can track payments and manage financials effortlessly. This ensures a smooth, hassle-free payment experience for both organizers and attendees.</div>
    <img className="Screenshot20240925At90301Pm1 w-[534px] h-[360px] left-[64.63px] top-[60.15px] absolute" src={payment}/>
    </div>
  );
};

export default Feature3;