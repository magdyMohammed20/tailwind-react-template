import React from 'react';
import './App.css';
import Navbar from './Components/navbar/Navbar'
import Hero from './Components/hero/Hero'
import Brands from './Components/brands/Brands'
import Webflow from './Components/webflow/Webflow'
import Pricing from './Components/pricing/Pricing'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Brands />
      <Webflow />
      <Pricing />
    </div>
  );
}

export default App;
