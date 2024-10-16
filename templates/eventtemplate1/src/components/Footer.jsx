import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoMailOutline } from 'react-icons/io5';
import { logo, applestore, playstore } from '../assets';
import '../index.css'; // Importing icons from react-assets

const Footer = () => {
  return (
    <footer className="w-full mt-[12%] font-jost bg-primary text-black">
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-start justify-between pl-[5%] p-[8%] md:space-x-10">
  {/* Get In Touch Section */}
  <div className="md:w-[40%] mb-6 md:mb-0">
    <h2 className="text-5xl font-medium">Get in Touch!</h2>
  </div>

  {/* Address Section */}
  <div className="flex flex-col items-center md:items-center md:w-1/4 mb-6 md:mb-0">
    <HiOutlineLocationMarker className="text-3xl mb-2 text-white" />
    <h3 className="font-semibold">Address</h3>
    <p className="text-center md:text-center">
      123 Main St,<br />
      City, State, 12345
    </p>
  </div>

  {/* Phone Section */}
  <div className="flex flex-col items-center md:items-center md:w-1/4 mb-6 md:mb-0">
    <FiPhone className="text-3xl mb-2 text-white" />
    <h3 className="font-semibold">Phone</h3>
    <p className="text-center md:text-center">+1 (123) 456-7890</p>
  </div>

  {/* Email Section */}
  <div className="flex flex-col items-center md:items-center md:w-1/4 mb-6 md:mb-0">
    <IoMailOutline className="text-3xl mb-2 text-white" />
    <h3 className="font-semibold">Email</h3>
    <p className="text-center md:text-center">example@email.com</p>
  </div>
</div>


      {/* Second Section */}
      <div className="bg-[#ddf6d5] p-[8%] text-black flex flex-col md:flex-row justify-between items-start">
        {/* Left Column: Logo and Event Name */}
        <div className="flex flex-col items-center -pl-[15%] md:items-start mb-6 md:mb-0">
          <div className="mb-4">
            <img src={logo} alt="Event Logo" className="w-20 h-auto" />
          </div>
          <p className="text-xl font-semibold">Global Maritime <br/> India Summit 2024</p>
        </div>

        {/* Middle Column: Menu, Resources, Legal */}
        <div className="flex justify-between w-full md:w-[35%] space-x-4"> {/* Added space-x for even spacing */}
          {/* Menu */}
          <div className="flex flex-col space-y-2 text-sm">
            <h4 className="font-semibold  text-primary mb-2">Menu</h4>
            <p>About Us</p>
            <p>Agenda</p>
            <p>Conference</p>
            <p>Speakers</p>
            <p>Exhibitors</p>
          </div>

          {/* Resources */}
          <div className="flex flex-col space-y-2 text-sm">
            <h4 className="font-semibold text-primary mb-2">Resources</h4>
            <p>Why Attend</p>
            <p>Sponsors</p>
            <p>FAQs</p>
            <p>Media Gallery</p>
            <p>Press Release</p>
          </div>

          {/* Legal */}
          <div className="flex flex-col space-y-2 text-sm">
            <h4 className="font-semibold text-primary mb-2">Legal</h4>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
            <p>Contact</p>
          </div>
        </div>

        {/* Right Column: Get the App */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="font-semibold mb-4">Get the App</p>
          <div className="flex flex-col space-y-4 items-center md:items-start">
            <img src={applestore} alt="Apple Store" className="w-32 h-auto" />
            <img src={playstore} alt="Play Store" className="w-32 h-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
