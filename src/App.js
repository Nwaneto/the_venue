import React from 'react';
import './resources/styles.css';

import Header from './components/header-footer/Header';

import Feature from './components/featured';
import VenueINFO from './components/venueINFO';
import Highlight from './components/Highlights';


function App() {
  return (
    <div className="App" style={{height:"1500px", background:'cornflowerblue'}}>
      <Header />
      <Feature/>
      <VenueINFO/>
      <Highlight/>
    </div>
  );
}

export default App;
