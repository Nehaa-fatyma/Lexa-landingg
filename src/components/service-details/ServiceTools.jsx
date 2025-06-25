import React from 'react';

const ServiceTools = () => {
  return (
    <div className="service-tools-box">
      <h2 className="wow fadeInUp">Tools technologies <span>we use</span></h2>
      <p className="wow fadeInUp" data-wow-delay="0.2s">
        Our service is designed to provide you with everything you need to achieve meaningful results through AI-driven solutions. From in-depth consultation and tailored strategies to seamless implementation and ongoing support
      </p>
      
      <div className="service-tool-content-box">
        <div className="service-tool-content">
          <p className="wow fadeInUp" data-wow-delay="0.4s">
            Harnessing Advanced Machine Learning to Drive Sustainable Business Growth and Innovation, Empowering Data-Driven Decisions for Future Success
          </p>
          
          <div className="service-tool-counter-info">
            <div className="service-tool-counter">
              <h2><span className="counter">12</span></h2>
              <p>We have 5+ years of working experience.</p>
            </div>
            <div className="service-tool-info wow fadeInUp" data-wow-delay="0.6s">
              <p>Our approach focuses on delivering end-to-end AI solutions that optimize.</p>
              <ul>
                <li>Craft Innovative Solutions</li>
                <li>Develop Intelligent Solutions</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="service-tool-image">
          <figure className="image-anime reveal">
            <img src={process.env.PUBLIC_URL + "/images/service-tool-image.jpg"} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ServiceTools; 