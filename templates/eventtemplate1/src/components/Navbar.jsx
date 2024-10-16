import React from 'react';
import '../index.css';
import { logo } from '../assets'; // Assuming you have a logo image

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md h-20">
      <div className="container mx-auto flex justify-between items-center h-full px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="EventStrat Logo" className="h-16" />
        </div>

        {/* Navigation Links */}
        <div className="flex-grow flex justify-center">
          <ul className="flex gap-10 text-black font-semibold text-lg">
            <li><a href="#" className="hover:text-primary transition duration-300">Home</a></li>
            <li><a href="#" className="hover:text-primary transition duration-300">About</a></li>
            <li><a href="#" className="hover:text-primary transition duration-300">Agenda</a></li>
            <li><a href="#" className="hover:text-primary transition duration-300">Conference</a></li>
            <li><a href="#" className="hover:text-primary transition duration-300">Exhibition</a></li>
            <li><a href="#" className="hover:text-primary transition duration-300 whitespace-nowrap">Contact Us</a></li>
            <li><a href="#" className="hover:text-primary transition duration-300">FAQs</a></li>
          </ul>
        </div>

        {/* Login Section - Integrated Link */}
        <div className="flex items-center">
          <a href="#" className="bg-primary text-white hover:bg-opacity-80 transition duration-300 rounded-lg px-5 py-2 text-lg font-semibold">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
