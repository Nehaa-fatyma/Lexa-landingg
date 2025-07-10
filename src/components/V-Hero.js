import React from "react";

const HeroSection = () => {
  return (
    <div className="hero hero-bg-image hero-video">
      {/* Background Video */}
      <div className="hero-bg-video">
        <video autoPlay muted loop id="myvideo">
          {/* <source
            src="Desktop/backgroundtheme"
            type="video/mp4"
          /> */}
           <source src={`${process.env.PUBLIC_URL}/backgroundtheme1.mp4`} type="video/mp4" />
        </video>
      </div>

      {/* Hero Content */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero-content">
              {/* Section Title */}
              <div className="section-title">
                <h3 className="wow fadeInUp">Welcome to Lexa</h3>
                <h1
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-cursor="-opaque"
                >
                  Empowering Legal Innovation Through<span> Intelligent AI!</span>
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                We design intelligent, region-aware AI solutions that simplify legal drafting, enhance research, and 
                ensure compliance—so businesses and law firms can work faster, smarter, and with total confidence.
                </p>
              </div>

              {/* Hero Bullet List */}
              <div className="hero-list wow fadeInUp" data-wow-delay="0.6s">
                <ul>
                <li>Transform the future of legal work—today</li>
                  <li>Stay compliant</li>
                  <li>Lead with innovation</li>
                </ul>
              </div>

              {/* Buttons */}
              <div className="hero-btn wow fadeInUp" data-wow-delay="0.8s">
                <a href="about.html" className="btn-default">
                  explore more
                </a>
                <a href="contact.html" className="btn-default">
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
