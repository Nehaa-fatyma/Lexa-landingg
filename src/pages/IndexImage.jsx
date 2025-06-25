import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/A-pageheader';
import Footer from '../components/Footer';
import APreloader from '../components/A-preloader';
import About from '../components/Aboutus';
import Services from '../components/Services';
import OurFeatures from '../components/OurFeatures';
import WhoWeAre from '../components/Whoarewe';
import OurProject from '../components/Ourproject';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import IHero from '../components/IHero';
import IFaqs from '../components/I-Faqs';
import IBlogs from '../components/I-Blogs';

const IndexImg = () => {
    return (
        <>
            {/* <APreloader/> */}
            <IHero/>
            <About/>
            <Services/>
            <OurFeatures/>
            <WhoWeAre/>
            <OurProject/>
            <HowItWorks/>
            <Testimonials/>
            <IFaqs/>     
            <IBlogs/>      
            <Footer />
        </>
    );
};

export default IndexImg; 