import React from "react";

const services = [
  {
    title: "AI Development",
    icon: "images/icon-service-1.svg",
    description:
      "We are a forward-thinking AI agency specializing in cutting-edge artificial intelligence.",
    link: "service-single.html",
    delay: "0s",
  },
  {
    title: "Machine Learning",
    icon: "images/icon-service-2.svg",
    description:
      "We are a forward-thinking AI agency specializing in cutting-edge artificial intelligence.",
    link: "service-single.html",
    delay: "0.2s",
  },
  {
    title: "Predictive Analytics",
    icon: "images/icon-service-3.svg",
    description:
      "We are a forward-thinking AI agency specializing in cutting-edge artificial intelligence.",
    link: "service-single.html",
    delay: "0.4s",
  },
  {
    title: "Chatbot Solutions",
    icon: "images/icon-service-4.svg",
    description:
      "We are a forward-thinking AI agency specializing in cutting-edge artificial intelligence.",
    link: "service-single.html",
    delay: "0.6s",
  },
];

const Services = () => {
  return (
    <div className="our-services bg-section">
      <div className="container">
        {/* Section Header */}
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Our Services</h3>
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                AI-driven design services for future <span>innovations</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="service-item wow fadeInUp" data-wow-delay={service.delay}>
                <div className="icon-box">
                  <img src={service.icon} alt={service.title} />
                </div>
                <div className="service-item-content">
                  <h3>
                    <a href={service.link}>{service.title}</a>
                  </h3>
                  <p>{service.description}</p>
                </div>
                <div className="service-btn">
                  <a href={service.link} className="btn-default">
                    read more
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Footer Call-to-Action */}
          <div className="col-lg-12">
            <div
              className="section-footer-text wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <p>
                <span>Free</span> Let's make something great work together.{" "}
                <a href="contact.html">Get Free Quote</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
