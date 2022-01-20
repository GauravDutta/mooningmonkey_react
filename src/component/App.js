import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import NavbarMenu from './Navbar/NavbarMenu';
import Home from './pages/Home'
import BuyNow from './pages/BuyNow'
import TakToken from './pages/Token'
import LearnMore from './pages/LearnMore'
import Evolution from './pages/Evolution'
import Attributes from './pages/Attributes';
import Calculator from './pages/Calculator';
import Comics from './pages/Comics';
import Footer from './footer/Footer';

function App() {
  return (
  
    <div className=''>
       <NavbarMenu/>
       <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/buy_now" element={<BuyNow/>} />
    <Route path="/nft-utility-token-tak" element={<TakToken/>} />
    <Route path="/learn_more" element={<LearnMore/>} />
    <Route path="/attribute" element={<Attributes/>} />    
    <Route path="/nft-evolution" element={<Evolution/>} />
    <Route path="/learn_more" element={<LearnMore/>} />
    <Route path="/nft-calculator" element={<Calculator/>} />   
    <Route path="/comic-book" element={<Comics/>} />
    </Routes>
    <Footer />
    </div>
  )
}

export default App;
