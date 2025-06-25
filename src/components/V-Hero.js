import React from "react";

const HeroSection = () => {
  return (
    <div className="hero hero-bg-image hero-video">
      {/* Background Video */}
      <div className="hero-bg-video">
        <video autoPlay muted loop id="myvideo">
          <source
            src="https://demo.awaikenthemes.com/assets/videos/nextmind-v2-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero Content */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero-content">
              {/* Section Title */}
              <div className="section-title">
                <h3 className="wow fadeInUp">Welcome to nextmind</h3>
                <h1
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-cursor="-opaque"
                >
                  Designing smarter tomorrows with <span>AI today!</span>
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  We design intelligent, scalable AI solutions that empower
                  businesses to innovate and adapt. Stay ahead, lead the
                  change, and thrive in a rapidly evolving world.
                </p>
              </div>

              {/* Hero Bullet List */}
              <div className="hero-list wow fadeInUp" data-wow-delay="0.6s">
                <ul>
                  <li>Empowering the Future with Today's AI</li>
                  <li>The Future of AI, Now Within Reach</li>
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
