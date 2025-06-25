import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

import Preloader from '../components/A-preloader';
import APageHeader from '../components/A-pageheader';
import SPageservices from '../components/S-pageservices'; 
import SWorks from '../components/S-work';
import OurFeatures from '../components/A-features';
import Faqs from '../components/Faqs';
import ATestimonials from '../components/A-testimonials';
import Footer from '../components/Footer';

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
      <SPageservices/>
      <SWorks/>
      <OurFeatures/>
      <Faqs/>
      <ATestimonials/>
      <Footer/>
       </>
  );
};

export default About;
