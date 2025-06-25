import React from 'react';

const ServiceFAQs = () => {
  const faqs = [
    {
      id: 1,
      question: "What industries can benefit from AI solutions?",
      answer: "We monitor system performance in real-time, identifying and addressing any issues to ensure that your AI solution runs smoothly at all times."
    },
    {
      id: 2,
      question: "How do you customize AI solutions for my needs?",
      answer: "We monitor system performance in real-time, identifying and addressing any issues to ensure that your AI solution runs smoothly at all times.",
      isOpen: true
    },
    {
      id: 3,
      question: "What kind of support do you provide post-deployment?",
      answer: "We monitor system performance in real-time, identifying and addressing any issues to ensure that your AI solution runs smoothly at all times."
    },
    {
      id: 4,
      question: "How secure is the AI technology you use?",
      answer: "We monitor system performance in real-time, identifying and addressing any issues to ensure that your AI solution runs smoothly at all times."
    },
    {
      id: 5,
      question: "How long does it take to see results?",
      answer: "We monitor system performance in real-time, identifying and addressing any issues to ensure that your AI solution runs smoothly at all times."
    }
  ];

  return (
    <div className="page-single-faqs">
      <div className="section-title">
        <h2 className="wow fadeInUp" data-cursor="-opaque">Frequently asked <span>question</span></h2>
      </div>
      <div className="faq-accordion" id="faqaccordion">
        {faqs.map((faq) => (
          <div key={faq.id} className="accordion-item wow fadeInUp" data-wow-delay={`${(faq.id - 1) * 0.2}s`}>
            <h2 className="accordion-header" id={`heading${faq.id}`}>
              <button 
                className={`accordion-button ${!faq.isOpen ? 'collapsed' : ''}`}
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
              className={`accordion-collapse collapse${faq.isOpen ? ' show' : ''}`}
              aria-labelledby={`heading${faq.id}`}
              data-bs-parent="#faqaccordion"
            >
              <div className="accordion-body">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFAQs; 