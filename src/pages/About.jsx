import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

import APreloader from "../components/A-preloader"
import Navbar from '../components/Navbar';
import APageHeader from '../components/A-pageheader';
import AAbout from '../components/A-aboutus';
import AOurApproach from '../components/A-ourapproach';
import AFeatures from '../components/A-features';
import WhoWeAre from '../components/Whoarewe';
import ASolutions from '../components/A-solutions';
import AOurbrands from '../components/A-ourbrands';
import AOurteams from '../components/A-ourteams';
import Faqs from '../components/Faqs';
import Footer from '../components/Footer';
import Features from '../components/OurFeatures';
import Testimonials from '../components/Testimonials';

const About = () => {
    const location = useLocation();

    useEffect(() => {
        const preloader = document.querySelector('.preloader');
        if (window.$) {
            window.$('.dropdown-toggle').dropdown();
        }
        if (preloader) {
            preloader.style.display = 'none';
          }
    }, []);

    return (
      <>
      <APreloader/>
      <APageHeader title="About" subtitle="us" />
      <AAbout />
      <AOurApproach />
      <Features/>
      <WhoWeAre/>
      <ASolutions/>
      <AOurbrands/>
      <AOurteams/>
      <Faqs/>
      <Testimonials/>
      <Footer/>
       </>
  );
};

export default About;
