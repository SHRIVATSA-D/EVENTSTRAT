import React from 'react';
import '../index.css';
import { hero } from '../assets'; // Adjust the path to your image asset

const BigImages = () => {
  return (
    <div className="w-full h-[50%] flex"> {/* Padding on all sides */}
      <img
        src={hero}
        alt="Section Image"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default BigImages;
