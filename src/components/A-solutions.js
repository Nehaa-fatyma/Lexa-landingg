import React from "react";

// Import images
// import solutionImage from "../images/solution-image.jpg";
import iconSolution1 from "../images/icon-solution-1.svg";
import iconSolution2 from "../images/icon-solution-2.svg";

const OurSolutions = () => {
  return (
    <div className="our-solutions">
      <div className="container">
        <div className="row">
          {/* Left Column: Image */}
          <div className="col-lg-6">
            <div className="our-solution-image">
              <figure className="image-anime reveal">
                <img src={process.env.PUBLIC_URL + "/images/solution-image.jpg"} alt="Our Solution" />
              </figure>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="col-lg-6">
            <div className="our-solution-content">
              {/* Section Title */}
              <div className="section-title">
                <h3 className="wow fadeInUp">powered by ai</h3>
                <h2
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-cursor="-opaque"
                >
                  A collaborative approach to{" "}
                  <span>intelligent solutions</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  We believe that the most powerful AI solutions are born from
                  collaboration. By working closely with our clients, we align
                  cutting-edge technology.
                </p>
              </div>

              {/* Button */}
              <div
                className="solution-button wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <a href="contact.html" className="btn-default">
                  Learn more
                </a>
              </div>

              {/* Solution Items */}
              <div
                className="solution-item-list wow fadeInUp"
                data-wow-delay="0.8s"
              >
                {/* Solution Item 1 */}
                <div className="solution-item">
                  <div className="icon-box">
                    <img src={iconSolution1} alt="AI Development Icon" />
                  </div>
                  <div className="solution-item-content">
                    <h3>AI Development</h3>
                    <p>
                      We are a forward-thinking AI agency specializing in
                      cutting-edge artificial intelligence.
                    </p>
                  </div>
                </div>

                {/* Solution Item 2 */}
                <div className="solution-item">
                  <div className="icon-box">
                    <img src={iconSolution2} alt="Machine Learning Icon" />
                  </div>
                  <div className="solution-item-content">
                    <h3>Machine Learning</h3>
                    <p>
                      We are a forward-thinking AI agency specializing in
                      cutting-edge artificial intelligence.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Solution Items */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSolutions;
