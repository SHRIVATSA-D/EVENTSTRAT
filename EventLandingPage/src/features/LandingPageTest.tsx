// // src/pages/LandingPage.tsx
// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useEventContext } from '../context/EventContext';

// const LandingPage = () => {
//   const { slug, id } = useParams<{ slug: string; id: string }>();
//   const { data, loading, error, getEventData } = useEventContext();

//   useEffect(() => {
//     getEventData(id); // Fetch data when the component mounts or when ID changes
//   }, [id, getEventData]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h1>{data?.title}</h1>
//       <p>{data?.description}</p>
//       {/* Render more data as needed */}
//     </div>
//   );
// };

// export default LandingPage;
