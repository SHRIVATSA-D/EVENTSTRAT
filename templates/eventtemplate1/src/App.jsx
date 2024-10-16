import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Overview from './components/Overview';  
import KeyObjectives from './components/KeyObj';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import  FAQ  from './components/FAQs';
import Footer from './components/Footer';
// import { apiData } from './services/api'; // Assuming you have a service for API calls

const App = () => {
  // const [eventData, setEventData] = useState(null); // State to hold the event data
  // const [loading, setLoading] = useState(true); // State to manage loading state
  // const [error, setError] = useState(null); // State to handle errors

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await apiData(); // Call your API function here
  //       setEventData(data); // Set the fetched data to state
  //     } catch (err) {
  //       console.error('Error fetching data:', err);
  //       setError(err); // Set error if API call fails
  //     } finally {
  //       setLoading(false); // Set loading to false regardless of success/failure
  //     }
  //   };

  //   fetchData(); // Fetch data when the component mounts
  // }, []); // Empty dependency array to run once on mount

  // // If loading, show a loading message
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // // If there's an error, show an error message
  // if (error) {
  //   return <div>Error fetching data: {error.message}</div>;
  // }

  // Pass the data as props to child components
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Overview />
      <KeyObjectives />
      <Speakers />
      <Schedule />
      <FAQ />
      <Footer/>
      {/* <Navbar />
      <Home eventData={eventData} />
      <About eventData={eventData} />
      <Overview eventData={eventData} />
      <KeyObjectives eventData={eventData} /> */}
      {/* <Speakers eventData={eventData} /> */}
    </div>
  );
};

export default App;
