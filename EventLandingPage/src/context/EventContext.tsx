// src/context/EventContext.tsx
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
// import { ThemeContext } from './ThemeContext'; // Import ThemeContext

const EventContext = createContext<any>(null);

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // const { setTheme } = useContext(ThemeContext); // Access the ThemeContext
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (id: string) => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJVU0VSIiwiU1VQRVJfQURNSU4iLCJBRE1JTiIsIk1PREVSQVRPUiJdLCJzdWIiOiJzaHViaGFtQHNwaWNldHJhZGUuY29tIiwiaWF0IjoxNzI4NDkzNTY0LCJleHAiOjE3Mjg0OTcxNjR9.sYumZUqJ8RkqH14JsgsIY7yN6vw2EzXXM-I5kb7OflI';
    try {
      const response = await axios.get(`http://15.206.56.160:8000/api/event?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setData(response.data);
      // updateTheme(response.data.id); // Update theme based on the response ID
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  // const updateTheme = (id: string) => {
    // const newTheme = { primary: id === "8" ? 'white' : 'gray', secondary: id === "8" ? '#61B85A' : 'blue' };
    // setTheme(newTheme); // Update theme using the ThemeContext
  // };

  const getEventData = (id: string) => {
    setLoading(true);
    fetchData(id);
  };

  return (
    <EventContext.Provider value={{ data, loading, error, getEventData }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  return useContext(EventContext);
};
