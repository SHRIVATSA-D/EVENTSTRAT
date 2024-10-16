import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar w-full bg-black p-4 sticky top-0 flex justify-between items-center">
      <div className="navbar-brand flex items-center ">
        <span className="text-white text-lg ml-20 ">event<br/><b>strat.ai</b></span>
      </div>
      <ul className="navbar-nav list-none m-0 p-0 flex">
        <li className="mr-5">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
        </li>
        <li className="mr-5">
          <a href="#" className="text-white hover:text-gray-300">Features</a>
        </li>
        <li className="mr-5">
          <a href="#" className="text-white hover:text-gray-300">Solutions</a>
        </li>
        <li className="mr-5">
          <a href="#" className="text-white hover:text-gray-300">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;