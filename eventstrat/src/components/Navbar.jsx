import React from 'react';
import '../index.css';

const Navbar = () => {
  return (
    <nav className='w-full bg-black flex py-6 pb-12 justify-between items-center navbar'>
      <div className="navbar-brand flex items-center">
        <span className="text-white font-inter text-lg ml-12 pr-12 line-height-tight">event<br/><b>strat.ai</b></span>
      </div>
      <ul className="navbar-nav list-none mr-20 p-0 flex">
        <li className="nav-item">
          <a href="#" className="text-white hover:text-gray-300 flex items-center">
            Features
            <svg className="w-4 h-4 ml-1 mt-1" fill="none" stroke="currentColor" viewBox="0 0 30 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="text-white hover:text-gray-300 flex items-center">
            Solutions
            <svg className="w-4 h-4 ml-1 mt-1" fill="none" stroke="currentColor" viewBox="0 0 30 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="text-white hover:text-gray-300 flex items-center">
            Pricing
            </a>
        </li> 
        <li className="nav-item">
          <a href="#" className="text-white hover:text-gray-300 flex items-center">
            About
            </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;