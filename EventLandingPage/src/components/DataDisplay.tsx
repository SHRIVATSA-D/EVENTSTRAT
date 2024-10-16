// src/components/DataDisplay.tsx
import React from 'react';

interface DataDisplayProps {
  data: any; // Replace 'any' with a specific type based on your data structure
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data }) => {
  return (
    <div className="mt-4">
      {/* Render the data in a meaningful way */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataDisplay;
