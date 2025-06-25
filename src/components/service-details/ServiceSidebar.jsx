import React from 'react';
import { Link } from 'react-router-dom';

const ServiceSidebar = () => {
  const serviceCategories = [
    "AI Development",
    "Machine Learning",
    "Predictive Analytics",
    "Chatbot Solutions",
    "Model Training"
  ];

  return (
    <div className="page-single-sidebar">
      <div className="page-category-list wow fadeInUp">
        <h3>Service category</h3>
        <ul>
          {serviceCategories.map((category, index) => (
            <li key={index}><Link to="#">{category}</Link></li>
          ))}
        </ul>
      </div>
      
      <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
        <div className="satisfy-client-box">
          <div className="satisfy-client-images">
            {[1, 2, 3].map((num) => (
              <div key={num} className="satisfy-client-image">
                <figure className="image-anime">
                  <img src={process.env.PUBLIC_URL + `/images/satisfy-client-img-${num}.jpg`} alt="" />
                </figure>
              </div>
            ))}
          </div>
          <div className="satisfy-client-content">
            <p><span>5.5k+</span> Satisfice Client in the world</p>
          </div>
        </div>

        <div className="sidebar-cta-contact">
          <h3>Need help with AI?</h3>
          <ul>
            <li>
              <img src={process.env.PUBLIC_URL + "/images/icon-phone-gradient.svg"} alt="" />
              <a href="tel:123456789">+123 456 789</a>
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/images/icon-mail-gradient.svg"} alt="" />
              <a href="mailto:info@domainname.com">info@domainname.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar; 