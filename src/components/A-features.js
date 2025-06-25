import React from "react";

// Import images (update paths according to your structure)
import iconFeature1 from "../images/icon-feature-1.svg";
import iconFeature2 from "../images/icon-feature-2.svg";
import featureImage from "../images/feature-image.png";
import featureCounterImg from "../images/feature-counter-img.png";

const OurFeatures = () => {
  return (
    <div className="our-features">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            {/* Section Title */}
            <div className="section-title">
              <h3 className="wow fadeInUp">Our feature</h3>
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Unlock efficiency through{" "}
                <span>intelligent AI features</span>
              </h2>
            </div>
          </div>

          <div className="col-lg-6">
            {/* Section Content and Button */}
            <div className="section-content-btn">
              <div
                className="section-title-content wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <p>
                  Explore our powerful AI-driven features designed to enhance
                  decision-making, and accelerate innovation across your
                  business.
                </p>
              </div>
              <div
                className="section-btn wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <a href="contact.html" className="btn-default">
                  contact us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Left Feature Box */}
          <div className="col-lg-4">
            <div className="feature-item-box">
              <div
                className="feature-item wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <h3>Advanced Machine Learning for Business Growth</h3>
                <ul>
                  <li>Automation</li>
                  <li>Security</li>
                  <li>Integration</li>
                  <li>Optimization</li>
                  <li>Scalability</li>
                </ul>
              </div>
              <div
                className="feature-content-box wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="icon-box">
                  <img src={iconFeature1} alt="Feature Icon 1" />
                </div>
                <div className="feature-content-title">
                  <h3>Advanced Machine Learning Model Development</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Feature Box with Image */}
          <div className="col-lg-4">
            <div
              className="feature-image-box wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="feature-image-content">
                <h3>AI-Driven Innovation & Competitive Advantage</h3>
                <ul>
                  <li>Edge AI for Smarter Devices</li>
                  <li>Secure and Ethical AI Practices</li>
                </ul>
              </div>
              <div className="feature-image">
                <figure>
                  <img src={featureImage} alt="Feature" />
                </figure>
              </div>
            </div>
          </div>

          {/* Right Feature Box */}
          <div className="col-lg-4">
            <div className="feature-item-box">
              <div
                className="feature-counter-box wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="icon-box">
                  <img src={iconFeature2} alt="Feature Icon 2" />
                </div>
                <div className="feature-counter-content">
                  <h2>
                    <span className="counter">200</span>+
                  </h2>
                  <p>AI Agency & Technology Project Complete</p>
                </div>
                <div className="feature-counter-image">
                  <img src={featureCounterImg} alt="Counter" />
                </div>
              </div>

              <div
                className="feature-item wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <h3>Transforming Industries Through Applied AI</h3>
                <ul>
                  <li>SmartBot</li>
                  <li>VisionAI</li>
                  <li>PredictPro</li>
                  <li>VoiceFlow</li>
                  <li>MarketMind</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
