import React from "react";

// Import images
import brandImage1 from "../images/brand-image-1.jpg";
import brandImage2 from "../images/brand-image-2.jpg";

const brandItems = [
  {
    image: brandImage1,
    title: "AI Solutions",
    description:
      "Lexa completely changed how we handle legal documents. I can now draft NDAs and contracts in minutes without hiring a lawyer. It saved us time, legal fees, and gave me peace of mind knowing everything is compliant with local laws.",
    delay: "0.4s",
  },
  {
    image: brandImage2,
    title: "Vision Pro",
    description:
      "As a regional law firm, Lexa helped us automate case research and improve turnaround time. The multi-jurisdiction support and AI-generated case summaries are incredibly accurate. It’s like having a junior associate that never sleeps",
    delay: "0.6s",
  },
];

const OurBrands = () => {
  return (
    <div className="our-brands bg-section">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title */}
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Smart brands</h3>
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Trusted by Legal Teams and Businesses <span>Across the Middle East</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {brandItems.map((item, index) => (
            <div className="col-md-6" key={index}>
              <div
                className="brand-item wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <figure className="image-anime">
                  <img src={item.image} alt={item.title} />
                </figure>
                <div className="brand-item-content">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBrands;
