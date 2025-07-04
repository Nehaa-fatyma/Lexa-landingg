import React from "react";

const accordionItems = [
  {
    id: 1,
    title: "Our Vision",
    icon: "images/icon-who-we-are-1.svg",
    body: `Lexa empowers SMEs and legal professionals with AI tools to simplify legal drafting, research, and compliance. Our goal is to make legal work fast, accurate, and accessible — without the need for a law degree.`,
    show: true,
    delay: "0s",
  },
  {
    id: 2,
    title: "What We Offer",
    icon: "images/icon-who-we-are-2.svg",
    body: `Lexa lets SMEs draft contracts with ease and helps lawyers work faster with AI-powered research, real-time collaboration, and smart legal tools — no complexity, just results.`,
    show: false,
    delay: "0.2s",
  },
  {
    id: 3,
    title: "Why Lexa",
    icon: "images/icon-who-we-are-3.svg",
    body: `Built specifically for the Middle East, Lexa understands regional laws, languages, and formatting. From clause suggestions to local legal references, we deliver accuracy, speed, and scale — all in one platform.`,
    show: false,
    delay: "0.4s",
  },
];

const counters = [
  { number: 150, symbol: "+", label: "Legal AI Projects" },
  { number: 20, symbol: "+", label: "Industries Served" },
  { number: 98, symbol: "%", label: "Client Satisfaction" },
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
                      className={`accordion-button ${!item.show ? "collapsed" : ""
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
                    className={`accordion-collapse collapse${item.show ? " show" : ""
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
                  Delivering AI-Powered Legal Solutions <span>with real impact</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  We’re a region-first legal-tech company building intelligent tools for SMEs and lawyers. 
                  From drafting contracts to analyzing case law, Lexa simplifies complex legal work using smart, 
                  localized AI.
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
