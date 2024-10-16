import React from 'react';
import './index.css';
import {tradefairs, conferences, seminars, tradefairsbg, conferencesbg, seminarsbg, payment, techsupport} from '../assets/';

function Solutions() {
  return (
    <div className="solutions-section bg-[#000000] h-screen">
      <div className="container mx-auto p-4 pt-20">
        <h2 className="heading text-center font-normal text-white mb-10 font-sans text-2xl">The simplest way to host all your events</h2>
        <div className="event-types flex flex-wrap justify-center gap-8">
          <div className="event-type w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 font-sans text-white bg-gradient-to-r from-[#460B1F] via-[#120C3C] to-[#4D0E4D] rounded-2xl shadow-2xl opacity-50 h-80">
            <center>
              <h3 className="text-2xl font-sans text-center text-white mb-4">Trade Fairs</h3>
              <p className="text-lg font-sans text-center text-white mb-8">Connecting businesses and innovations under one roof.</p>
              <img src={tradefairs} alt="Event Type 1" className="w-full h-40 object-cover rounded-b-2xl" />
            </center>
          </div>
          <div className="event-type w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 bg-[#42e8fd] rounded-2xl shadow-2xl opacity-40 h-80">
            <h3 className="text-2xl font-sans text-center text-white mb-4">Conferences</h3>
            <p className="text-lg font-sans text-center text-white mb-8">Fueling knowledge, innovation, and connections.</p>
            <img src={conferences} alt="Event Type 2" className="w-full font-sans h-40 object-cover rounded-b-2xl" />
          </div>
          <div className="event-type w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 font-sans text-center text-black bg-[#ecb0f8] rounded-2xl shadow-2xl opacity-50 h-80">
          <h3 className="text-2xl font-sans text-center text-white mb-4">Seminars</h3>
          <p className="text-lg font-sans text-center text-white mb-8">Empowering minds and fostering growth.</p>
            <img src={seminars} alt="Event Type 3" className="w-80 h-40 object-cover rounded-b-2xl" />
            <div className="p-4">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;