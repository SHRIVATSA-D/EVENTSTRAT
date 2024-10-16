// src/components/EventTester.tsx
import React, { useEffect } from 'react';
import { useEventContext } from '../context/EventContext';

const EventTester: React.FC = () => {
  const { data, getEventData } = useEventContext();

  useEffect(() => {
    const eventId = "8"; // Replace with a valid event ID
    getEventData(eventId); // Fetch event data
  }, [getEventData]);

  return (
    <div>
      <h1>Event Data:</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre> // Display fetched data
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EventTester;
