// src/features/DataFetcher.tsx
import React from 'react';
import useFetch from '../hooks/useFetch';
import DataDisplay from '../components/DataDisplay';

const DataFetcher: React.FC = () => {
  const { data, loading, error } = useFetch('http://localhost:5000/api/data');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Process the data as needed before passing it to the DataDisplay component
  const processedData = data; // Example: you can process data here

  return <DataDisplay data={processedData} />;
};

export default DataFetcher;
