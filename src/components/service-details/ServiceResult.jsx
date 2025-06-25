import React from 'react';

const ServiceResult = () => {
  return (
    <div className="service-result-box">
      <div className="service-result-image">
        <figure className="image-anime reveal">
          <img src={process.env.PUBLIC_URL + "/images/service-result-image.jpg"} alt="" />
        </figure>
      </div>
      
      <div className="service-result-content">
        <h2 className="wow fadeInUp">Delivering results <span>that matter</span></h2>
        <p className="wow fadeInUp" data-wow-delay="0.2s">
          Our service is designed to provide you with everything you need to achieve meaningful results through AI-driven solutions.
        </p>
        
        <div className="service-result-item wow fadeInUp" data-wow-delay="0.4s">
          <div className="icon-box">
            <img src={process.env.PUBLIC_URL + "/images/icon-service-solution-2.svg"} alt="" />
          </div>
          <div className="service-result-item-content">
            <h3>End-to-End Support</h3>
            <p>We analyze your unique business needs to develop machine learning models and AI systems tailored</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceResult; 