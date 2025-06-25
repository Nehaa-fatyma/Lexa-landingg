import React from "react";
import { Link } from "react-router-dom";

const IHero = () => {
  return (
    <div className="hero hero-bg-image parallaxie">
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
                  We design intelligent, scalable AI solutions that empower businesses to innovate and adapt. Stay ahead, lead the change, and thrive in a rapidly evolving world.
                </p>
              </div>

              {/* Hero List */}
              <div className="hero-list wow fadeInUp" data-wow-delay="0.6s">
                <ul>
                  <li>Empowering the Future with Today's AI</li>
                  <li>The Future of AI, Now Within Reach</li>
                </ul>
              </div>

              {/* Hero Buttons */}
              <div className="hero-btn wow fadeInUp" data-wow-delay="0.8s">
                <Link to="/about" className="btn-default">Explore More</Link>
                <Link to="/contact" className="btn-default">Contact Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IHero;
