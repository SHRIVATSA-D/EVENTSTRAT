import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/Herosection';
import Solutions from './components/Solutions';
import Solutions2 from './components/solutions2';
import Feature1 from './components/Feature1';
import Feature2 from './components/Feature2';
import Feature3 from './components/Feature3';
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Solutions />
      <Solutions2 />
      <Feature1 />
      <Feature2 />
      <Feature3 />
    </div>
  )
}

export default App