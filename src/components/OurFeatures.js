import React from "react";

const Features = () => {
  return (
    <div className="our-features">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">Our feature</h3>
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Revolutionize legal drafting through smart, scalable & <span> Localized AI features</span>
              </h2>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="section-content-btn">
              <div
                className="section-title-content wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <p>
                Explore AI-powered legal drafting features built to boost accuracy, adapt to your region, 
                and scale with your business.
                </p>
              </div>
              <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                <a href="contact.html" className="btn-default">
                  contact us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Left Feature Block */}
          <div className="col-lg-4">
            <div className="feature-item-box">
              <div className="feature-item wow fadeInUp" data-wow-delay="0.2s">
                <h3>Key Productivity Features</h3>
                <ul>
                  <li>Ask AI Anywhere</li>
                  <li>PDF Export</li>
                  <li>MS Word Shortcuts</li>
                  <li>Spell & Grammar Check</li>
                  <li>Cloud Collaboration</li>
                  <li>OCR Reading</li>
                </ul>
              </div>
              <div
                className="feature-content-box wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="icon-box">
                  <img src="images/icon-feature-1.svg" alt="Feature Icon" />
                </div>
                <div className="feature-content-title">
                  <h3>Smart Legal Document Automation</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Center Feature with Image */}
          <div className="col-lg-4">
            <div className="feature-image-box wow fadeInUp" data-wow-delay="0.2s">
              <div className="feature-image-content">
                <h3>Localized for the Middle East</h3>
                <ul>
                  <li>Country-Based Drafting – KSA, UAE, Qatar, Pakistan & more</li>
                  <li>Dynamic Language Switching – Arabic, Urdu, English</li>
                  <li>Localized Citations – Region-specific laws & rulings</li>
                </ul>
              </div>
              <div className="feature-image">
                <figure>
                  <img src="images/feature-image.png" alt="Feature Visual" />
                </figure>
              </div>
            </div>
          </div>

          {/* Right Feature Block */}
          <div className="col-lg-4">
            <div className="feature-item-box">
              <div
                className="feature-counter-box wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="icon-box">
                  <img src="images/icon-feature-2.svg" alt="Counter Icon" />
                </div>
                <div className="feature-counter-content">
                  <h2>
                    <span className="counter">200</span>+
                  </h2>
                  <p>Legal AI Projects Deployed Across Regions</p>
                </div>
                <div className="feature-counter-image">
                  {/* <img
                    src="images/feature-counter-img.png"
                    alt="Feature Counter"
                  /> */}
                </div>
              </div>
              <div
                className="feature-item wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <h3>From Startup to Enterprise</h3>
                <ul>
                  <li>Template Reuse</li>
                  <li>Form-Based Drafting</li>
                  <li>Clause Suggestions</li>
                  <li>Case Law Insertion</li>
                  <li>Team Collaboration</li>
                  <li>Legal Automation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
