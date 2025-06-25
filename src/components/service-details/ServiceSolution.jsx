import React from 'react';

const ServiceSolution = () => {
  const solutions = [
    {
      icon: "icon-service-solution-1.svg",
      title: "Customized AI Solutions",
      description: "We analyze your unique business needs to develop machine learning models and AI systems tailored specifically for your goals—ensuring maximum relevance, accuracy, and efficiency.",
      delay: "0.8s"
    },
    {
      icon: "icon-service-solution-2.svg",
      title: "End-to-End Support",
      description: "We analyze your unique business needs to develop machine learning models and AI systems tailored specifically for your goals—ensuring maximum relevance, accuracy, and efficiency.",
      delay: "1s"
    }
  ];

  const counters = [
    { count: "1,200", icon: "icon-solution-counter-1.svg" },
    { count: "10,000", icon: "icon-solution-counter-2.svg" }
  ];

  return (
    <div className="service-solution-box">
      <h2 className="wow fadeInUp" data-wow-delay="0.4s">What you'll get <span>with this service</span></h2>
      <p className="wow fadeInUp" data-wow-delay="0.6s">
        Our service is designed to provide you with everything you need to achieve meaningful results through AI-driven solutions. From in-depth consultation and tailored strategies to seamless implementation and ongoing support
      </p>

      <div className="service-solution-list">
        {solutions.map((solution, index) => (
          <div key={index} className="service-solution-item wow fadeInUp" data-wow-delay={solution.delay}>
            <div className="icon-box">
              <img src={process.env.PUBLIC_URL + `/images/${solution.icon}`} alt="" />
            </div>
            <div className="service-solution-item-content">
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="service-solution-counters">
        {counters.map((counter, index) => (
          <div key={index} className="solution-counter-box">
            <div className="solution-counter-header">
              <div className="solution-counter-no">
                <h2><span className="counter">{counter.count}</span>+</h2>
              </div>
              <div className="icon-box">
                <img src={process.env.PUBLIC_URL + `/images/${counter.icon}`} alt="" />
              </div>
            </div>
            <div className="solution-counter-body">
              <ul>
                <li>Smart Deployment & Integration</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSolution; 