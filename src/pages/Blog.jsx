import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

import APreloader from "../components/A-preloader"
import Navbar from '../components/Navbar';
import APageHeader from '../components/A-pageheader';
import BOurblog from '../components/B-ourblog';
import Footer from '../components/Footer';


const Blog = () => {
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
      <APageHeader title="Our" subtitle="Blog" />
      <BOurblog/>
      <Footer/>
       </>
  );
};

export default Blog;
