import React from "react";

const FaqSection = () => {
  return (
    <div className="our-faqs bg-section dark-section">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title */}
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">faq's</h3>
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Frequently asked questions on <span>AI services</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {/* FAQ Accordion */}
            <div className="faq-accordion" id="accordion">
              {faqItems.map((item, index) => (
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay={`${index * 0.2}s`}
                  key={index}
                >
                  <h2 className="accordion-header" id={`heading${index + 1}`}>
                    <button
                      className={`accordion-button ${
                        index !== 1 ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index + 1}`}
                      aria-expanded={index === 1 ? "true" : "false"}
                      aria-controls={`collapse${index + 1}`}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index + 1}`}
                    className={`accordion-collapse collapse ${
                      index === 1 ? "show" : ""
                    }`}
                    aria-labelledby={`heading${index + 1}`}
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* FAQ Accordion End */}
          </div>
        </div>
      </div>
    </div>
  );
};

const faqItems = [
  {
    question: "What industries can benefit from AI solutions?",
    answer:
      "We monitor system performance in real-time, identifying and addressing any issues to ensure that your AI solution runs smoothly at all times.",
  },
  {
    question: "How do you customize AI solutions for my needs?",
    answer:
      "We monitor system performance in real-time, identifying and addressing any issues to ensure that your AI solution runs smoothly at all times.",
  },
  {
    question: "What kind of support do you provide post-deployment?",
    answer:
      "We monitor system performance in real-time, identifying and addressing any issues to ensure that your AI solution runs smoothly at all times.",
  },
  {
    question: "How secure is the AI technology you use?",
    answer:
      "We monitor system performance in real-time, identifying and addressing any issues to ensure that your AI solution runs smoothly at all times.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "We monitor system performance in real-time, identifying and addressing any issues to ensure that your AI solution runs smoothly at all times.",
  },
];

export default FaqSection;
