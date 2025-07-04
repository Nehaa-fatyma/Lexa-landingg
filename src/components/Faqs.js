import React from "react";

const faqs = [
  {
    id: 1,
    question: "Who can use Lexa—lawyers or business owners?",
    answer:
      "Lexa is built for both. SMEs can draft legal documents without any prior legal knowledge, while lawyers can perform advanced legal research, multi-jurisdictional comparisons, and case law analysis.",
    delay: "0s",
    isOpen: false,
  },
  {
    id: 2,
    question: "Is Lexa adapted for laws in my country?",
    answer:
      "Yes. Lexa supports country-specific drafting for regions like KSA, UAE, Qatar, and Pakistan, offering localized legal templates, citations, and multilingual support in Arabic, Urdu, and English.",
    delay: "0.2s",
    isOpen: true,
  },
  {
    id: 3,
    question: "Do I need legal training to use Lexa?",
    answer:
      "Not at all. Lexa’s AI guides users step-by-step using smart forms and pre-filled templates. It’s designed so anyone—regardless of legal background—can create accurate, professional documents.",
    delay: "0.4s",
    isOpen: false,
  },
  {
    id: 4,
    question: "Can I collaborate with others on legal drafts?",
    answer:
      "Absolutely. Lexa allows real-time collaboration with internal teams or external clients. Commenting, version control, and secure sharing make teamwork seamless and secure.",
    delay: "0.6s",
    isOpen: false,
  },
  {
    id: 5,
    question: "What kind of support do you offer after setup?",
    answer:
      "We offer continuous support including onboarding, legal template updates, and AI optimization. Our team monitors system performance and ensures Lexa evolves with your needs.",
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
