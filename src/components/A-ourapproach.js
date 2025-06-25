import React from "react";


const approachItems = [
  {
    icon: process.env.PUBLIC_URL + "/images/icon-mission.svg",
    title: "Our mission",
    description:
      "Our mission is to deliver cutting-edge AI solutions that empower businesses to automate, innovate, and grow. We aim to bridge the gap between technology.",
    delay: "0s",
  },
  {
    icon: process.env.PUBLIC_URL + "/images/icon-vision.svg",
    title: "Our vision",
    description:
      "Our vision is to deliver cutting-edge AI solutions that empower businesses to automate, innovate, and grow. We aim to bridge the gap between technology.",
    delay: "0.2s",
  },
  {
    icon: process.env.PUBLIC_URL + "/images/icon-goal.svg",
    title: "Our goal",
    description:
      "Our goal is to deliver cutting-edge AI solutions that empower businesses to automate, innovate, and grow. We aim to bridge the gap between technology.",
    delay: "0.4s",
  },
];

const OurApproach = () => {
  return (
    <div className="our-approach bg-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="approach-content">
              {/* Section Title */}
              <div className="section-title">
                <h3 className="wow fadeInUp">Our approach</h3>
                <h2
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-cursor="-opaque"
                >
                  Shaping Tomorrow with{" "}
                  <span>Intelligent AI solutions</span>
                </h2>
              </div>

              {/* Approach Image */}
              <div className="approach-image">
                <figure className="image-anime reveal">
                <img src={process.env.PUBLIC_URL + "/images/approach-image.jpg"} alt="About 7" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </figure>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="our-approach-list">
              {approachItems.map((item, index) => (
                <div
                  key={index}
                  className="mission-vision-item wow fadeInUp"
                  data-wow-delay={item.delay}
                >
                  <div className="icon-box">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <div className="mission-vision-item-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
