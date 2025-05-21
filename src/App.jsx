import React from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import EasiestView from './components/sections/EasiestView';
import UnlockGrowth from './components/sections/UnlockGrowth';
import PoweringGrowth from './components/sections/PoweringGrowth';
import Testimonial from './components/sections/Testimonial';
import Support from './components/sections/Support';
import ClickPay from './components/sections/ClickPay';
import Footer from './components/sections/Footer';

const App = () => {
  return (
    <>
      {/* <Navbar />
      <Hero /> */}
      <EasiestView />
      {/* <UnlockGrowth />
      <PoweringGrowth />
      <Testimonial /> */}
      <Support />
      <ClickPay />
      {/* <Footer /> */}
    </>
  );
};

export default App;
