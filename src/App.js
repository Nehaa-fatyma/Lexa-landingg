import React from "react";
import "./styles/vendor/bootstrap.min.css";
import "./styles/vendor/animate.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/vendor/magnific-popup.css";
import "./styles/vendor/mousecursor.css";
import "./styles/vendor/slicknav.min.css";
import "./styles/vendor/swiper-bundle.min.css";
import "./styles/vendor/custom.css";
import "./styles/index.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Swiper from 'swiper';
import $ from 'jquery';
import WOW from 'wowjs';
import gsap from 'gsap';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import ServicesDetails from "./pages/ServicesDetails";
import BlogSingle from './pages/BlogSingle';
import Projects from './pages/Projects';
import ProjectSingle from './pages/ProjectSingle';
import Team from './pages/Team';
import TeamSingle from './pages/TeamSingle';
import Testimonials from './pages/Testimonials';
import ImageGallery from './pages/ImageGallery';
import VideoGallery from './pages/VideoGallery';
import FAQs from './pages/FAQs';
import NotFound from './pages/NotFound';
import IndexImg from "./pages/IndexImage";
import IndexVideo from "./pages/IndexVideo";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index-image" element={<IndexImg/>} />
        <Route path="/index-video" element={<IndexVideo/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-single" element={<ServicesDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-single" element={<BlogSingle />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-single" element={<ProjectSingle />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-single" element={<TeamSingle />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/image-gallery" element={<ImageGallery />} />
        <Route path="/video-gallery" element={<VideoGallery />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;