import React from "react";

const steps = [
  {
    step: "Step 01",
    title: "Discovery & Consultation",
    image: "images/icon-work-step-1.svg",
    delay: "0s",
  },
  {
    step: "Step 02",
    title: "Strategy & Planning",
    image: "images/icon-work-step-2.svg",
    delay: "0.2s",
  },
  {
    step: "Step 03",
    title: "Model Development",
    image: "images/icon-work-step-3.svg",
    delay: "0.4s",
  },
  {
    step: "Step 04",
    title: "Outgoing Support",
    image: "images/icon-work-step-4.svg",
    delay: "0.6s",
  },
];

const listItems = [
  "Deployment & Integration",
  "Monitoring & Optimization",
  "Design Smart Solutions",
];

const HowItWorks = () => {
  return (
    <div className="how-it-work bg-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">How it work</h3>
              <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                Step-by-step approach to <span>AI innovation</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {steps.map((stepItem, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="work-step-item wow fadeInUp" data-wow-delay={stepItem.delay}>
                <div className="work-step-no">
                  <p>{stepItem.step}</p>
                </div>
                <div className="icon-box">
                  <img src={stepItem.image} alt={stepItem.title} />
                </div>
                <div className="work-step-content">
                  <h3>{stepItem.title}</h3>
                  <p>
                    We are a forward-thinking AI agency specializing in cutting-edge artificial intelligence.
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-12">
            <div className="how-it-work-list wow fadeInUp" data-wow-delay="0.8s">
              <ul>
                {listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
