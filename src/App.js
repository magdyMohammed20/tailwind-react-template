import React from 'react';
import './App.css';
import Navbar from './Components/navbar/Navbar'
import Hero from './Components/hero/Hero'
import Brands from './Components/brands/Brands'
import Webflow from './Components/webflow/Webflow'
import Pricing from './Components/pricing/Pricing'
import Questions from './Components/questions/Questions'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Brands />
      <Webflow />
      <Pricing />
      <Questions />
    </div>
  );
}

export default App;
