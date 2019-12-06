import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured/index';
import VunueNfo from './components/venueinfo/index';
import Pricing from './components/pricing/index';
import Highlights from './components/Hightlights/index';
import Location from './components/Location/index';

function App() {
  return (
    <div className="App" style={{ height:"1500px",background:'cornflowerblue'}}>
    <Header/>

    <Element name="featured">
      <Featured/>
    </Element>

    <Element name="venuenfo">
      <VunueNfo/>
    </Element>
    
    <Element name="highlights">
      <Highlights/>
    </Element>
    
    <Element name="pricing">
      <Pricing/>
    </Element>

    <Element name="location">
      <Location/>
    </Element>
    
    <Footer/>
  </div>
  );
}

export default App;
