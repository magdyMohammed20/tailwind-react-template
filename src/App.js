import React from 'react';
import './App.css';
import Navbar from './Components/navbar/Navbar'
import Hero from './Components/hero/Hero'
import Brands from './Components/brands/Brands'
import Webflow from './Components/webflow/Webflow'
import Pricing from './Components/pricing/Pricing'
import Questions from './Components/questions/Questions'
import Testmonials from './Components/testmonials/Testmonials'
import Start from './Components/start/Start'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Brands />
      <Webflow />
      <Pricing />
      <Questions />
      <Testmonials />
      <Start />
    </div>
  );
}

export default App;
