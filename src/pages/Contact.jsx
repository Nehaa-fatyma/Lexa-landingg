import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import APreloader from "../components/A-preloader";
import APageHeader from '../components/A-pageheader';
import Footer from '../components/Footer';
import BContact from '../components/B-contact';

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      preloader.style.display = 'none';
    }
  }, [location]);

  return (
    <>
      <APreloader/>
      <APageHeader title="Contact" subtitle="us" />
      <BContact/>
      <Footer/>
    </>
  );
};

export default Contact;
