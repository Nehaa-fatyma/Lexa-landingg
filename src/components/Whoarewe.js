import React from "react";

const accordionItems = [
  {
    id: 1,
    title: "Driven by Data, Inspired by Impact",
    icon: "images/icon-who-we-are-1.svg",
    body: `We design intelligent systems that learn from data and automate complex processes—enhancing efficiency, accuracy, and scalability across industries. Our expert team leverages cutting-edge machine learning models.`,
    show: true,
    delay: "0s",
  },
  {
    id: 2,
    title: "Experts in Machine Learning & Automation",
    icon: "images/icon-who-we-are-2.svg",
    body: `We design intelligent systems that learn from data and automate complex processes—enhancing efficiency, accuracy, and scalability across industries. Our expert team leverages cutting-edge machine learning models.`,
    show: false,
    delay: "0.2s",
  },
  {
    id: 3,
    title: "Cutting-Edge Research & Development",
    icon: "images/icon-who-we-are-3.svg",
    body: `We design intelligent systems that learn from data and automate complex processes—enhancing efficiency, accuracy, and scalability across industries. Our expert team leverages cutting-edge machine learning models.`,
    show: false,
    delay: "0.4s",
  },
];

const counters = [
  { number: 150, symbol: "+", label: "AI Projects Delivered" },
  { number: 20, symbol: "+", label: "Industries Served" },
  { number: 98, symbol: "%", label: "Client Satisfied Rate" },
];

const WhoWeAre = () => {
  return (
    <div className="who-we-are bg-section dark-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Accordion */}
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="who-we-are-accordion" id="whoaccordion">
              {accordionItems.map((item, index) => (
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay={item.delay}
                  key={item.id}
                >
                  <h2 className="accordion-header" id={`whoheading${item.id}`}>
                    <button
                      className={`accordion-button ${
                        !item.show ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#whocollapse${item.id}`}
                      aria-expanded={item.show ? "true" : "false"}
                      aria-controls={`whocollapse${item.id}`}
                    >
                      <img src={item.icon} alt="" /> {item.title}
                    </button>
                  </h2>
                  <div
                    id={`whocollapse${item.id}`}
                    className={`accordion-collapse collapse${
                      item.show ? " show" : ""
                    }`}
                    aria-labelledby={`whoheading${item.id}`}
                    data-bs-parent="#whoaccordion"
                  >
                    <div className="accordion-body">
                      <p>{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Content + Counters */}
          <div className="col-lg-6 order-lg-2 order-1">
            <div className="who-we-are-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">Who We Are</h3>
                <h2
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-cursor="-opaque"
                >
                  Expert deliver AI solution <span>with real impact</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  We are a forward-thinking AI agency specializing in
                  cutting-edge artificial intelligence and machine learning
                  solutions. Whether you're a startup or a global enterprise,
                  our mission is simple: build AI-powered tools that solve
                  real-world problems.
                </p>
              </div>

              <div className="who-we-are-counters">
                {counters.map((counter, index) => (
                  <div className="who-we-counter-item" key={index}>
                    <h2>
                      <span className="counter">{counter.number}</span>
                      {counter.symbol}
                    </h2>
                    <p>{counter.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
