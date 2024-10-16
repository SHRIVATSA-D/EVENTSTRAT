import React from 'react';
import Navbar from './components/Navbar';
import styles from './style';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Solutions2 from './components/Solutions2';
import Solutions3 from './components/Solutions3';
// import Features from './components/Features';
// import Feature3 from './components/Feature3';
const App = () => {
  return (
  <div className='bg-black w-full overflow-visible'>
      <div className={`hello`}>
        <div className={`bye`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-black`}>
        <div className={`${styles.boxWidth}`}>
         <Hero />      
        </div>
      </div>
      <div className={`bg-black ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
         <Solutions />      
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
         <Solutions2 />      
        </div>
      </div>
      <div className={`bg-white flex ${styles.boxWidth}`}>
         <Solutions3 />      
        </div>
        {/* <div className={`bg-white flex ${styles.boxWidth}`}>
         <Features />      
        </div> */}
      </div>
  )
};
export default App;