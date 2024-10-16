import React from 'react';
import '../index.css';
import {websitebuilder, networking, registration, orangeline, youreventname, schedule, payment, techsupport} from '../assets';

const Features = () => {
  return (
<div className="section w-[1280px] h-[1657.98px] overflow-visible relative" style={{ backgroundColor: 'white' }}>
  <div className="admin-panel overflow-visible w-[117.67px] h-6 left-[90px] top-[75.08px] absolute text-[#173fbd] text-base font-normal font-['Inter'] leading-normal">Admin Panel</div>
  <div className="heading overflow-visible w-[360px] h-[92.05px] left-[90px] top-[87.08px] absolute">
    <div className="website-builder w-[293.42px] h-[92.05px] left-0 top-0 absolute text-[#18191f] text-[40px] font-normal font-['Inter'] leading-[46px]">Website Builder</div>
    <img className="image w-[45px] h-[45px] left-[279.59px] top-[47.05px] absolute" src={orangeline}/>
  </div>
  <div className="container w-[438px] h-[153.83px] left-[51px] top-[118.08px] absolute" />
  <img className="image w-[654px] h-[467px] left-[620px] top-[56.08px] absolute" src={websitebuilder} />
  <img className="omni-channel w-[500px] h-[388px] left-[90px] top-[666.08px] absolute" src={registration} />
  <img className="omni-channel w-[230px] h-[63.30px] left-[-15px] top-[784.61px] absolute" src={youreventname} />
  <img className="omni-channel w-[184px] h-[153.78px] left-[425.50px] top-[958.44px] absolute" src={schedule} />
  <div className="effortless-flow w-[141.40px] h-6 left-[694px] top-[662.71px] absolute text-[#173fbd] text-base font-normal font-['Inter'] leading-normal">Effortless Flow</div>
  <div className="heading w-[360px] left-[690px] top-[675.08px] absolute">
    <div className="registration w-[295.37px] h-[92.04px] text-[#18191f] text-[40px] font-normal font-['Inter'] leading-[46px]">Registration</div>
    <img className="image w-[45px] h-[45px]" src={orangeline} />
  </div>
  <div className="container w-[438px] left-[690px] top-[813.75px] absolute">
    <div className="registration-feature w-[438px] text-black text-lg font-normal font-['Inter'] leading-[30.78px]">Our Website Builder feature allows you to easily create stunning, customizable event websites without any coding knowledge. Choose from a variety of modern, mobile-friendly templates and personalize them with your branding, content, and images. With integrated tools for registration, payments, and event updates, our platform simplifies the process of building and managing a professional event website in minutes</div>
  </div>
  <div className="seamless-connections w-[161.47px] h-6 left-[90px] top-[1208.35px] absolute text-[#173fbd] text-base font-normal font-['Inter'] leading-normal">Seamless Connections</div>
  <div className="heading w-[360px] left-[90px] top-[1232.08px] absolute">
    <div className="networking w-[318.65px] h-[92.04px] left-0 top-0 absolute text-[#18191f] text-[40px] font-normal font-['Inter'] leading-[46px]">Networking</div>
    <img className="image w-[45px] h-[45px] left-[243.84px] top-[47.04px] absolute" src={orangeline} />
  </div>
  <div className="container left-[90px] top-[1401.08px] absolute">
    <div className="networking-feature w-[464px] text-black text-lg font-normal font-['Inter'] leading-[30.78px]">Our Registration feature streamlines the entire sign-up process, making it easy for attendees, Exhibitors and Sponsors to register for events in just a few clicks. With customizable registration forms, secure payment integration, and real-time attendee tracking, event organizers can manage participant data effortlessly. This ensures a smooth experience for both the organizer and the attendees, from sign-up to check-in.</div>
  </div>
  <img className="holistic-audience w-[616px] h-[409px] left-[590px] top-[1197.08px] absolute" src={networking} />
  <div className="website-builder-feature w-[453px] left-[90px] top-[195.08px] absolute text-black text-lg font-normal font-['Inter'] leading-[30.78px]">Our Networking feature fosters meaningful connections with tools like calendar invites, real-time chat, and virtual meeting capabilities. Attendees can schedule and join meetings, engage in live chats, and coordinate their networking activities directly from the platform. This ensures a streamlined and interactive experience, enhancing relationship-building and engagement during the event.</div>
</div>
  );
};

export default Features;