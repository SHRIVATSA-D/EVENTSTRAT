import React from 'react';
import '../index.css';
import {tradefairs, conferences, seminars, tradefairsbg, conferencesbg, seminarsbg, payment, techsupport} from '../assets/';

// function Solutions() {
//   return (
//     <div className="solutions-section bg-[#000000] h-screen">
//       <div className="container mx-auto p-4 pt-10">
//         <h2 className="heading text-center font-normal text-white mb-10 font-sans text-3xl">The simplest way to host all your events</h2>
//         <div className="event-types relative flex flex-wrap justify-center gap-4">
//           <div className="event-type w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 rounded-2xl shadow-2xl opacity-50 h-80 bg-gradient-to-tr from-[#4D0E4D] via-[#120C3C] to-[#460B1F] relative">
//             <center>
//               <h3 className="text-xl z-10 font-sans text-center text-white mt-2 mb-1 absolute">Trade Fairs</h3>
//               <p className="text-xs z-10 font-sans text-center leading-5 text-white mr-6 ml-6 mb-6 absolute">Connecting businesses and<br/> innovations under one roof.</p>
//               <img src={tradefairs} alt="Event Type 1" className="z-10 top-1/3 right-1 w-full h-44 scale-90 object-cover rounded-2xl absolute"/>
//             </center>
//             </div>
//             <div className="event-type w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 relative rounded-2xl shadow-2xl opacity-50 h-80 bg-[#42e8fd]">
//             <h3 className="text-xl relative z-3 font-sans text-center text-white mt-2 mb-1">Conferences</h3>
//             <p className="text-xs z-2 font-sans text-center leading-5 text-white mr-6 ml-6 mb-6">Fueling knowledge, innovation, and connections.</p>
//             <img src={conferences} alt="Event Type 2" className="wz-2 w-full h-44 scale-90 object-cover rounded-2xl" />
//             </div>
//             <div className="event-type w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 relative rounded-2xl shadow-2xl opacity-50 h-80 font-sans text-black bg-gradient-to-tr from-[#B0C9F8] via-[#F6AED1] to-[#F8D1D7]">
//             <h3 className="text-xl relative z-3 font-sans text-center text-black mt-2 mb-1">Seminars</h3>
//             <p className="text-xs z-2 font-sans text-center leading-5 text-black mr-6 ml-6 mb-6">Empowering minds and fostering growth.</p>
//             <img src={seminars} alt="Event Type 3" className="z-2 w-full h-44 scale-90 object-cover rounded-2xl" />
//             <div className="p-4">
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function Solutions() {
    return (
        <div className="solutions-section bg-[#000000] h-screen">
            <div className="container mx-auto p-4 pt-10">
                <h2 className="heading text-center font-normal text-white mb-10 font-sans text-3xl">
                    The simplest way to host all your events
                </h2>
                <div className="event-types relative flex flex-wrap justify-center gap-4">
                    
                    {/* Trade Fairs */}
                    <div 
                        className="event-type w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 rounded-2xl shadow-2xl h-80 relative"
                        style={{
                            backgroundImage: `linear-gradient(to top right, rgba(77, 14, 77, 0.9), rgba(18, 12, 60, 0.9), rgba(70, 11, 31, 0.9)), url(${tradefairsbg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'brightness(1.2)' // Adjust brightness here
                        }}
                    >
                            <h3 className="text-2xl font-light font-inter text-center text-white absolute top-[10%] left-1/2 transform -translate-x-1/2">
                                Trade Fairs
                            </h3>
                            <p className="text-sm font-light font-inter text-white absolute top-[21%] left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                                Connecting businesses and<br/> innovations under one roof.
                            </p>
                            <img src={tradefairs} alt="Event Type 1" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-5/6 h-36 object-cover rounded-2xl"/>
                    </div>

                    {/* Conferences */}
                    <div 
                        className="event-type w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 rounded-2xl shadow-2xl h-80 relative"
                        style={{
                            backgroundImage: `url(${conferencesbg})`, // Correct interpolation for background image
                            backgroundColor: 'rgba(66, 232, 253, 0.6)', // More transparent to make the image more visible
                            backgroundBlendMode: 'overlay', // Overlay the background color on top of the image
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'brightness(1.2)', // Increased brightness and contrast
                        }}
                    >
                        <center>
                            <h3 className="text-2xl font-light font-inter text-center text-white absolute top-[10%] left-1/2 transform -translate-x-1/2">
                                Conferences
                            </h3>
                            <p className="text-sm font-light font-inter text-white absolute top-[21%] left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                                Fueling knowledge, innovation, <br/>and connections.
                            </p>
                            <img src={conferences} alt="Event Type 2" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-5/6 h-36 object-cover rounded-2xl"/>
                        </center>
                    </div>

                    {/* Seminars */}
                    <div 
                        className="event-type w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 rounded-2xl shadow-2xl h-80 relative"
                        style={{
                            backgroundImage: `linear-gradient(to top right, rgba(176, 201, 248, 0.5), rgba(246, 174, 209, 0.5), rgba(248, 209, 215, 0.5)), url(${seminarsbg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'brightness(1.2)' // Adjust brightness here
                        }}
                    >
                        <center>
                            <h3 className="text-2xl font-normal font-inter text-center text-black absolute top-[10%] left-1/2 transform -translate-x-1/2">
                                Seminars
                            </h3>
                            <p className="text-sm font-normal font-inter text-black absolute top-[21%] left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                                Empowering minds and<br/> fostering growth.
                            </p>
                            <img src={seminars} alt="Event Type 3" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-5/6 h-36 object-cover rounded-2xl"/>
                        </center>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Solutions;
