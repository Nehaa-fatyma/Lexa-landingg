import React from "react";

const workSteps = [
  {
    step: "Step 01",
    icon: "images/icon-work-step-1.svg",
    title: "Discovery & Consultation",
    description:
      "We are a forward-thinking AI agency specializing in cutting-edge artificial intelligence.",
    delay: "0s",
  },
  {
    step: "Step 02",
    icon: "images/icon-work-step-2.svg",
    title: "Strategy & Planning",
    description:
      "We are a forward-thinking AI agency specializing in cutting-edge artificial intelligence.",
    delay: "0.2s",
  },
  {
    step: "Step 03",
    icon: "images/icon-work-step-3.svg",
    title: "Model Development",
    description:
      "We are a forward-thinking AI agency specializing in cutting-edge artificial intelligence.",
    delay: "0.4s",
  },
  {
    step: "Step 04",
    icon: "images/icon-work-step-4.svg",
    title: "Outgoing Support",
    description:
      "We are a forward-thinking AI agency specializing in cutting-edge artificial intelligence.",
    delay: "0.6s",
  },
];

const extraSteps = [
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
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Step-by-step approach to <span>AI innovation</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {workSteps.map((step, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div
                className="work-step-item wow fadeInUp"
                data-wow-delay={step.delay}
              >
                <div className="work-step-no">
                  <p>{step.step}</p>
                </div>
                <div className="icon-box">
                  <img src={step.icon} alt={step.title} />
                </div>
                <div className="work-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-12">
            <div
              className="how-it-work-list wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <ul>
                {extraSteps.map((item, index) => (
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
