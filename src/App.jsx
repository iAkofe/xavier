import React from 'react';
import { Navbar, Hero, Slider, Collection, Cta, Newsletter, Footer } from './components';

const App = () => (
    <div className="App">
      <div className='xavier__app'>
        <Navbar />
        <Hero />
      </div>

      <div className='xavier__app-container'>
          <Slider />
          <Collection />
          <Cta />
          <Newsletter />
          <Footer />
      </div>
    </div>
  );

export default App;
