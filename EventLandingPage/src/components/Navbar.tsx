// // src/components/Navbar.tsx
// import React from 'react';
// import '../styles/tailwind.css';
// import { logo as defaultLogo } from '../assets';
// import { useNavigate } from 'react-router-dom';
// // import { useThemeContext } from '../context/ThemeContext'; 


// const Navbar: React.FC<any> = ({ data }) => {
//   if (!data) return null;
//   const eventLogo = data?.data.banners?.find((banner: any) => banner.category === "EVENT_LOGO")?.file || defaultLogo;

//   console.log("Event Data:", data); // Log the event data to check its structure
//   console.log("Event Logo:", eventLogo);// Log the event logo URL
//   const registrationForms = data?.data.registerForms || {};

//   const navigate = useNavigate();

//   const handleSelectCohort = (cohort: string) => {
//     navigate(`/Register/${cohort}`);
//   };
//   return (
//     <nav className="w-full bg-white shadow-md h-20">
//       <div className="container mx-auto flex justify-between items-center h-full px-6">
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <img src={eventLogo} alt="Event Logo" className="h-16" />
//         </div>

//         {/* Navigation Links */}
//         <div className="flex-grow flex justify-center">
//           <ul className="flex gap-10 text-black font-semibold text-lg">
//             {/* Navigation Links */}
//             <li><a href="#" className="hover:text-secondary  transition duration-300">Home</a></li>
//             <li><a href="#" className="hover:text-secondary transition duration-300">About</a></li>
//             <li><a href="#" className="hover:text-secondary transition duration-300">Agenda</a></li>
//             <li><a href="#" className="hover:text-secondary transition duration-300">Conference</a></li>
//             <li><a href="#" className="hover:text-secondary transition duration-300">Exhibition</a></li>
//             <li><a href="#" className="hover:text-secondary transition duration-300 whitespace-nowrap">Contact Us</a></li>
//             <li><a href="#" className="hover:text-secondary transition duration-300">FAQs</a></li>
//           </ul>
//         </div>

//         {/* Login Section - Integrated Link */}
//         <div className="flex items-center">
//           <button className="dropbtn bg-secondary text-white hover:bg-opacity-80 transition duration-300 rounded-3xl px-5 py-2 text-lg font-semibold">
//             Register
//           </button>
//           <div className="dropdown-content absolute mt-2 bg-white shadow-lg rounded-md z-10">
//           {Object.keys(registrationForms).map((cohort: string) => (
//             <a key={cohort} className="block px-4 py-2 text-black hover:bg-gray-200" onClick={() => handleSelectCohort(cohort)}>
//               {cohort}
//             </a>
//           ))}
//         </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.tsx
import React, { useState } from 'react';
import '../styles/tailwind.css';
import { logo as defaultLogo } from '../assets';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC<any> = ({ data, setShowRegister }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility
  if (!data) return null;
  const eventLogo = data?.data.banners?.find((banner: any) => banner.category === "EVENT_LOGO")?.file || defaultLogo;
  const registerForms = data?.data.registerForms || {};
  console.log("Event Data:", data); // Log the event data to check its structure
  console.log("Event Logo:", eventLogo); // Log the event logo URL

  const navigate = useNavigate();

  const handleSelectCohort = (cohort: string) => {
    navigate(`/Register/${cohort}`);
  };

  // const toggleDropdown = () => {
  //   // Toggle dropdown visibility
  // };

  const handleRegisterClick = () => {
    setIsDropdownOpen(!isDropdownOpen); 
    setShowRegister(true); // Show the registration form
  };
  return (
    <nav className="w-full bg-white shadow-md h-20">
      <div className="container mx-auto flex justify-between items-center h-full px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={eventLogo} alt="Event Logo" className="h-16" />
        </div>

        {/* Navigation Links */}
        <div className="flex-grow flex justify-center">
          <ul className="flex gap-10 text-black font-semibold text-lg">
            {/* Navigation Links */}
            <li><a href="#" className="hover:text-secondary  transition duration-300">Home</a></li>
            <li><a href="#" className="hover:text-secondary transition duration-300">About</a></li>
            <li><a href="#" className="hover:text-secondary transition duration-300">Agenda</a></li>
            <li><a href="#" className="hover:text-secondary transition duration-300">Conference</a></li>
            <li><a href="#" className="hover:text-secondary transition duration-300">Exhibition</a></li>
            <li><a href="#" className="hover:text-secondary transition duration-300 whitespace-nowrap">Contact Us</a></li>
            <li><a href="#" className="hover:text-secondary transition duration-300">FAQs</a></li>
          </ul>
        </div>

        {/* Login Section - Integrated Link */}
        <div className="flex items-center relative">
          <button 
            className="dropbtn bg-secondary text-white hover:bg-opacity-80 transition duration-300 rounded-3xl px-5 py-2 text-lg font-semibold"
            onClick={handleRegisterClick} // Toggle dropdown on button click
          >
            Register
          </button>
          {isDropdownOpen && ( // Conditional rendering of dropdown
            <div className="absolute mt-[125%] w-48 bg-white rounded-md shadow-lg z-10">
              {Object.keys(registerForms).map((cohort: string) => (
                <a key={cohort} onClick={() => handleSelectCohort(cohort)} className="block px-4 py-2 text-black hover:bg-gray-200 ">
                  {cohort}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
