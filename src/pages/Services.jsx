import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

import Preloader from '../components/A-preloader';
import APageHeader from '../components/A-pageheader';
import SPageservices from '../components/S-pageservices'; 
import SWorks from '../components/S-work';
import OurFeatures from '../components/OurFeatures';
import Faqs from '../components/Faqs';
import ATestimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';

const About = () => {
  const location = useLocation();

  useEffect(() => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      preloader.style.display = 'none';
    }
  }, [location]);

    return (
      <>
      <Preloader/>
      <APageHeader title="Our" subtitle="Services" />
      <Services/>
      <HowItWorks/>
      <OurFeatures/>
      <Faqs/>
      <ATestimonials/>
      <Footer/>
       </>
  );
};

export default About;
