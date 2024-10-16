import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';
import Navbar from '../components/Navbar';
import Home from '../features/Home';
import About from '../features/About';
import Overview from '../features/Overview';
import FAQ from '../components/FAQ';
import KeyObjectives from '../features/KeyObjectives';
import Footer from '../components/Footer';
import Speakers from '../components/Speakers';
// import EventSchedule from '../features/EventSchedule';
import Register from '../Pages/Register';

const LandingPage: React.FC = () => {
  const { pageId } = useParams<{ pageId: string }>(); // Extract pageId from the URL

  // State to hold the API response
  const [apiData, setApiData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
    const [showRegister, setShowRegister] = useState<boolean>(false);

  // Fetch API data before rendering
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token =
          'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJVU0VSIiwiU1VQRVJfQURNSU4iLCJBRE1JTiIsIk1PREVSQVRPUiJdLCJzdWIiOiJzaHViaGFtQHNwaWNldHJhZGUuY29tIiwiaWF0IjoxNzI5MDU0NjgxLCJleHAiOjE3MjkwNTgyODF9.3j2ZA2VVZHl85iEpwCgDGLWQQvJ6FDnA-HWNifhmf3Q';

        // Making an axios request using the pageId
        const response = await axios.get(
          `https://sit.spicetrade.io/api/event?id=${pageId}`, // Use pageId in the API call
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        // Save the API response to the state
        setApiData(response.data);
        console.log("setapidata", response.data);
      } catch (err) {
        setError('Failed to fetch data.');
      } finally {
        setLoading(false);
      }
    };

    if (pageId) { // Ensure that pageId is present before making the API call
      fetchData();
    }
  }, [pageId]); // Run this effect whenever pageId changes

  if (loading) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  if (error) {
    return <div>{error}</div>; // Display the error message
  }

  return (
    <div className="landing-page">
      <Navbar data={apiData} setShowRegister={setShowRegister} /> {/* Pass down setShowRegister to Navbar */}

      {/* Conditionally render the Register component */}
      {showRegister ? (
        <Register data={apiData} />
      ) : (
        <>
          <Home data={apiData} />
          <About data={apiData} />
          <Overview data={apiData} />
          <KeyObjectives data={apiData} />
          <Speakers data={apiData} />
          <FAQ data={apiData} />
        </>
      )}

      <Footer data={apiData} />
    </div>
  );
};

export default LandingPage;

