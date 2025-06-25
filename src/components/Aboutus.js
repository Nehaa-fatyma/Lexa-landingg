import React from "react";

const aboutImages = [
  process.env.PUBLIC_URL + "/images/about-image-1.jpg",
  process.env.PUBLIC_URL + "/images/about-image-2.jpg",
  process.env.PUBLIC_URL + "/images/about-image-3.jpg",
  process.env.PUBLIC_URL + "/images/about-image-4.jpg",
  process.env.PUBLIC_URL + "/images/about-image-5.jpg",
  process.env.PUBLIC_URL + "/images/about-image-6.jpg",
  process.env.PUBLIC_URL + "/images/about-image-7.jpg",
];

const About = () => (
  <div className="about-us">
    <div className="container">
      <div className="section-title section-title-center">
        <h3>About Us</h3>
        <h2>
          Driven by innovation, powered by AI we build intelligent solutions that transform industries, empower businesses, and shape the future.
        </h2>
      </div>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: '40px auto'
      }}>
        <div style={{ width: '216px', height: '178px', background: '#2a2a2a', borderRadius: '8px' }}>
          <img src={process.env.PUBLIC_URL + "/images/about-image-1.jpg"} alt="About 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ width: '296px', height: '244px', background: '#2a2a2a', borderRadius: '8px' }}>
          <img src={process.env.PUBLIC_URL + "/images/about-image-2.jpg"} alt="About 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ width: '360px', height: '320px', background: '#2a2a2a', borderRadius: '8px' }}>
          <img src={process.env.PUBLIC_URL + "/images/about-image-3.jpg"} alt="About 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ width: '216px', height: '178px', background: '#2a2a2a', borderRadius: '8px' }}>
          <img src={process.env.PUBLIC_URL + "/images/about-image-4.jpg"} alt="About 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ width: '216px', height: '178px', background: '#2a2a2a', borderRadius: '8px' }}>
          <img src={process.env.PUBLIC_URL + "/images/about-image-5.jpg"} alt="About 5" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ width: '360px', height: '280px', background: '#2a2a2a', borderRadius: '8px' }}>
          <img src={process.env.PUBLIC_URL + "/images/about-image-6.jpg"} alt="About 6" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ width: '296px', height: '208px', background: '#2a2a2a', borderRadius: '8px' }}>
          <img src={process.env.PUBLIC_URL + "/images/about-image-7.jpg"} alt="About 7" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
    <div className="col-lg-12">
      <div className="section-footer-text wow fadeInUp" data-wow-delay="0.4s">
        <p>
          Join Millions Worldwide and Experience the{" "}
          <a href="contact.html">Transformative Power of AI</a>
        </p>
      </div>
    </div>
  </div>
);

export default About;
