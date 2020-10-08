import React from 'react';
import './App.css';
import Navbar from './Components/navbar/Navbar'
import Hero from './Components/hero/Hero'
import Brands from './Components/brands/Brands'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Brands />
    </div>
  );
}

export default App;
