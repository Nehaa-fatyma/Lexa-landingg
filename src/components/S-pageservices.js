import React from "react";

const services = [
  {
    id: 1,
    title: "AI Development",
    image: "images/icon-service-1.svg",
    delay: "0s",
  },
  {
    id: 2,
    title: "Machine Learning",
    image: "images/icon-service-2.svg",
    delay: "0.2s",
  },
  {
    id: 3,
    title: "Predictive Analytics",
    image: "images/icon-service-3.svg",
    delay: "0.4s",
  },
  {
    id: 4,
    title: "Chatbot Solutions",
    image: "images/icon-service-4.svg",
    delay: "0.6s",
  },
  {
    id: 5,
    title: "Model Training",
    image: "images/icon-service-5.svg",
    delay: "0.8s",
  },
  {
    id: 6,
    title: "Data Annotation",
    image: "images/icon-service-6.svg",
    delay: "1s",
  },
  {
    id: 7,
    title: "Chatbot Integration",
    image: "images/icon-service-7.svg",
    delay: "1.2s",
  },
  {
    id: 8,
    title: "Predictive Analysis",
    image: "images/icon-service-8.svg",
    delay: "1.4s",
  },
];

const Services = () => {
  return (
    <div className="page-services">
      <div className="container">
        <div className="row">
          {services.map((service) => (
            <div className="col-lg-3 col-md-6" key={service.id}>
              <div
                className="service-item wow fadeInUp"
                data-wow-delay={service.delay}
              >
                <div className="icon-box">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-item-content">
                  <h3>
                    <a href="service-single.html">{service.title}</a>
                  </h3>
                  <p>
                    We are a forward-thinking AI agency specializing in cutting-edge artificial intelligence.
                  </p>
                </div>
                <div className="service-btn">
                  <a href="service-single.html" className="btn-default">
                    read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
