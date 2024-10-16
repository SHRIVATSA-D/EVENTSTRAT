import React from 'react'; 
import '../styles/tailwind.css';
import { clock } from '../assets'; // Assuming you have a placeholder image

const Home: React.FC<any> = ({data}) => {
  if (!data) return null;

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  // Get start and end dates from data
  const startDate = data?.data.event.startDate; // Updated to include .event
  const endDate = data?.data.event.endDate;     // Updated to include .event

  return (
    <div className="">

    </div>
  );
};

export default Home;
