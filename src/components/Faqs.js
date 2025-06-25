import React from "react";

const faqs = [
  {
    id: 1,
    question: "What industries can benefit from AI solutions?",
    answer:
      "We monitor system performance in real-time, identifying and addressing any issues to ensure that your AI solution runs smoothly at all times.",
    delay: "0s",
    isOpen: false,
  },
  {
    id: 2,
    question: "How do you customize AI solutions for my needs?",
    answer:
      "We monitor system performance in real-time, identifying and addressing any issues to ensure that your AI solution runs smoothly at all times.",
    delay: "0.2s",
    isOpen: true,
  },
  {
    id: 3,
    question: "What kind of support do you provide post-deployment?",
    answer:
      "We monitor system performance in real-time, identifying and addressing any issues to ensure that your AI solution runs smoothly at all times.",
    delay: "0.4s",
    isOpen: false,
  },
  {
    id: 4,
    question: "How secure is the AI technology you use?",
    answer:
      "We monitor system performance in real-time, identifying and addressing any issues to ensure that your AI solution runs smoothly at all times.",
    delay: "0.6s",
    isOpen: false,
  },
  {
    id: 5,
    question: "How long does it take to see results?",
    answer:
      "We monitor system performance in real-time, identifying and addressing any issues to ensure that your AI solution runs smoothly at all times.",
    delay: "0.8s",
    isOpen: false,
  },
];

const Faqs = () => {
  return (
    <div className="our-faqs bg-section dark-section">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
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
            <div className="faq-accordion" id="accordion">
              {faqs.map((faq, index) => (
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay={faq.delay}
                  key={faq.id}
                >
                  <h2 className="accordion-header" id={`heading${faq.id}`}>
                    <button
                      className={`accordion-button ${
                        !faq.isOpen ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${faq.id}`}
                      aria-expanded={faq.isOpen ? "true" : "false"}
                      aria-controls={`collapse${faq.id}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${faq.id}`}
                    className={`accordion-collapse collapse${
                      faq.isOpen ? " show" : ""
                    }`}
                    aria-labelledby={`heading${faq.id}`}
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
