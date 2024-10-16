// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EventProvider } from './context/EventContext'; // Import the EventProvider
import { ThemeProvider } from './context/ThemeContext'; // Import the ThemeProvider
import LandingPage from './Pages/LandingPage';
// import EventTester from './components/EventTester';
import './styles/tailwind.css'; // Import the test component

const App: React.FC = () => {
  return (
    <EventProvider>
      <ThemeProvider>
         <Router>
          <Routes>
            <Route path="/elp/:pageName/:pageId" element={<LandingPage/>} />
          </Routes>
         </Router>
      </ThemeProvider>
    </EventProvider>
  );
};

export default App;