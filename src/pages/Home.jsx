import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

import Hero from '../components/Hero';
import About from '../components/Aboutus';
import Services from '../components/Services';
import OurFeatures from '../components/OurFeatures';
import Whoarewe from '../components/Whoarewe';
import Ourproject from '../components/Ourproject';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Faqs from '../components/Faqs';
import Blog from '../components/Blogs';
import Footer from "../components/Footer";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      preloader.style.display = 'none';
    }
  }, [location]);

  
  return (
    <>
      <Hero />
      <About />
      <Services />
      <OurFeatures />
      <Whoarewe />
      <Ourproject />
      <HowItWorks />
      <Testimonials />
      <Faqs />
      <Blog />
      <Footer/>
    </>
  );
};

export default Home;
