import React from "react";

const services = [
  {
    title: "Smart Drafting (For SMEs)",
    icon: "images/icon-service-1.svg",
    description:
      "Easily create NDAs, contracts, and leases using guided legal forms. No legal knowledge required.",
    link: "service-single.html",
    delay: "0s",
  },
  {
    title: "AI Guidance (For SMEs)",
    icon: "images/icon-service-2.svg",
    description:
      "Lexa walks you through legal drafting step by step. Ideal for SMEs with no legal background.",
    link: "service-single.html",
    delay: "0.2s",
  },
  {
    title: "Auto Templates (For SMEs)",
    icon: "images/icon-service-3.svg",
    description:
      "Fill in your company info once—Lexa fills the rest. Save time on every legal document.",
    link: "service-single.html",
    delay: "0.4s",
  },
  {
    title: "Built-in Signing (For SMEs & Lawyers)",
    icon: "images/icon-service-4.svg",
    description:
      "Sign documents digitally with one click. Secure sharing with teams and clients..",
    link: "service-single.html",
    delay: "0.6s",
  },{
    title: "Legal Drafting (For Lawyers)",
    icon: "images/icon-service-1.svg",
    description:
      "Insert citations and clauses instantly using AI. Perfect for fast, accurate legal writing.",
    link: "service-single.html",
    delay: "0s",
  },
  {
    title: "Law Comparison (For Lawyers)",
    icon: "images/icon-service-2.svg",
    description:
      "Toggle between KSA, UAE, UK, US, and more. Get region-specific legal insights.",
    link: "service-single.html",
    delay: "0.2s",
  },
  {
    title: "Live Collaboration (For Lawyers)",
    icon: "images/icon-service-3.svg",
    description:
      "Draft and edit documents together in real-time. Use comments and version control easily.",
    link: "service-single.html",
    delay: "0.4s",
  },
  {
    title: "Case Analysis (For Lawyers)",
    icon: "images/icon-service-4.svg",
    description:
      "Upload judgments for AI summaries and mapping. Get keywords and arguments extracted.",
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
                AI-powered legal drafting and automation services tailored for modern law and<span> regional needs. </span>
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
