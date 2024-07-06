import React from 'react';
import AboutUs from '../components/section/AboutUs';
import CardSec from '../components/section/CardSec';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import ContactSection from '../components/section/ContactSection';
import CustomersSection from '../components/section/CustomerSection';
import ServiceCardSec from '../components/section/ServiceCardSec';

// import { increment, decrement } from '../store/slices/counterSlice';
const Home = () => {
  
    
  return (
    <div>
      <ContactSection />
      <CardSec/>
      <ServiceCardSec />
      <CustomersSection />
      <AboutUs />
    </div>
  );
}

export default Home;