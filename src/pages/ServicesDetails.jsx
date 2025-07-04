import React from 'react';
import PageHeader from '../components/A-pageheader';
import Footer from '../components/Footer';

// Import images
import satisfyClient1 from '../images/satisfy-client-img-1.jpg';
import satisfyClient2 from '../images/satisfy-client-img-2.jpg';
import satisfyClient3 from '../images/satisfy-client-img-3.jpg';
import iconPhoneGradient from '../images/icon-phone-gradient.svg';
import iconMailGradient from '../images/icon-mail-gradient.svg';
import iconServiceSolution1 from '../images/icon-service-solution-1.svg';
import iconServiceSolution2 from '../images/icon-service-solution-2.svg';
import iconSolutionCounter1 from '../images/icon-solution-counter-1.svg';
import iconSolutionCounter2 from '../images/icon-solution-counter-2.svg';
import serviceResultImage from '../images/service-result-image.jpg';
import serviceToolImage from '../images/service-tool-image.jpg';
import serviceSingleImg from '../images/service-single-img.jpg';

const ServiceSidebar = () => {
  const serviceCategories = [
    "AI-Powered Legal Drafting",
    "Multilingual Legal Automation",
    "Smart Contract Generation",
    "Legal Research & Case Analysis",
    "Region-Specific Compliance Tools"
  ];

  return (
    <div className="page-single-sidebar">
      <div className="page-category-list wow fadeInUp">
        <h3>Service category</h3>
        <ul>
          {serviceCategories.map((category, index) => (
            <li key={index}><a href="#">{category}</a></li>
          ))}
        </ul>
      </div>
      
      <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
        <div className="satisfy-client-box">
          <div className="satisfy-client-images">
            {[1, 2, 3].map((num) => (
              <div key={num} className="satisfy-client-image">
                <figure className="image-anime">
                  <img src={`${process.env.PUBLIC_URL}/images/satisfy-client-img-${num}.jpg`} alt="" />
                </figure>
              </div>
            ))}
          </div>
          <div className="satisfy-client-content">
            <p><span>5.5k+</span> Satisfice Client in the world</p>
          </div>
        </div>

        <div className="sidebar-cta-contact">
          <h3>Need help ?</h3>
          <ul>
            <li>
              <img src={`${process.env.PUBLIC_URL}/images/icon-mail-gradient.svg`} alt="" />
              <a href="mailto:info@domainname.com">contact@lexa.lawyer</a>
            </li>
            <li>
              <img src={`${process.env.PUBLIC_URL}/images/icon-mail-gradient.svg`} alt="" />
              <a href="mailto:info@domainname.com">rabeet.ali@lexa.lawyer</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ServiceSolution = () => {
  const solutions = [
    {
      icon: "icon-service-solution-1.svg",
      title: "Smart Legal Drafting Tools",
      description: "We provide intuitive, AI-powered drafting features that let you create NDAs, contracts, and legal documents quickly—no legal background required. Everything is optimized for your region and legal language.",
      delay: "0.8s"
    },
    {
      icon: "icon-service-solution-2.svg",
      title: "Ongoing Support & Updates",
      description: "We continuously update Lexa with new templates, smarter AI suggestions, and region-specific legal data — ensuring you always stay current, compliant, and productive.",
      delay: "1s"
    }
  ];

  const counters = [
    { count: "1,200", icon: "icon-solution-counter-1.svg" },
    { count: "10,000", icon: "icon-solution-counter-2.svg" }
  ];

  return (
    <div className="service-solution-box">
      <h2 className="wow fadeInUp" data-wow-delay="0.4s">What you'll get <span>with Lexa</span></h2>
      <p className="wow fadeInUp" data-wow-delay="0.6s">
      Our platform is designed to deliver everything you need to simplify and accelerate legal work—through smart, localized, AI-driven solutions. From tailored onboarding to advanced drafting tools and continuous support, Lexa empowers you every step of the way.
      </p>

      <div className="service-solution-list">
        {solutions.map((solution, index) => (
          <div key={index} className="service-solution-item wow fadeInUp" data-wow-delay={solution.delay}>
            <div className="icon-box">
              <img src={`${process.env.PUBLIC_URL}/images/${solution.icon}`} alt="" />
            </div>
            <div className="service-solution-item-content">
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="service-solution-counters">
        {counters.map((counter, index) => (
          <div key={index} className="solution-counter-box">
            <div className="solution-counter-header">
              <div className="solution-counter-no">
                <h2><span className="counter">{counter.count}</span>+</h2>
              </div>
              <div className="icon-box">
                <img src={`${process.env.PUBLIC_URL}/images/${counter.icon}`} alt="" />
              </div>
            </div>
            <div className="solution-counter-body">
              <ul>
                <li>Documents Auto-Drafted</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ServiceResult = () => {
  return (
    <div className="service-result-box">
      <div className="service-result-image">
        <figure className="image-anime reveal">
          <img src={`${process.env.PUBLIC_URL}/images/service-result-image.jpg`} alt="" />
        </figure>
      </div>
      
      <div className="service-result-content">
        <h2 className="wow fadeInUp">Delivering results <span>that matter</span></h2>
        <p className="wow fadeInUp" data-wow-delay="0.2s">
        Lexa is built to simplify legal drafting, streamline workflows, and help you stay compliant—without the legal complexity.
        </p>
        
        <div className="service-result-item wow fadeInUp" data-wow-delay="0.4s">
          <div className="icon-box">
            <img src={`${process.env.PUBLIC_URL}/images/icon-service-solution-2.svg`} alt="" />
          </div>
          <div className="service-result-item-content">
            <h3>End-to-End Legal AI Support</h3>
            <p>From onboarding to document automation, Lexa is designed around your legal workflow. We help you draft smarter, collaborate faster, and stay legally accurate across regions and languages.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceTools = () => {
  return (
    <div className="service-tools-box">
      <h2 className="wow fadeInUp">Tools technologies <span>we use</span></h2>
      <p className="wow fadeInUp" data-wow-delay="0.2s">
      Lexa is powered by advanced AI, built specifically for the legal world. Our platform combines natural language processing, machine learning, and legal domain expertise to deliver faster, smarter, and regionally accurate drafting and research tools.
      </p>
      
      <div className="service-tool-content-box">
        <div className="service-tool-content">
          <p className="wow fadeInUp" data-wow-delay="0.4s">
          We support businesses and law firms from consultation to deployment — ensuring smooth integration with your workflows and full legal compliance.
          </p>
          
          <div className="service-tool-counter-info">
            <div className="service-tool-counter">
              <h2><span className="counter">12</span></h2>
              <p>We have 5+ years of working experience.</p>
            </div>
            <div className="service-tool-info wow fadeInUp" data-wow-delay="0.6s">
              <p>We support businesses and law firms from consultation to deployment—ensuring smooth integration with your workflows and full legal compliance.</p>
              <ul>
                <li>Automate Legal Drafting</li>
                <li>Empower Smart Legal Teams</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="service-tool-image">
          <figure className="image-anime reveal">
            <img src={`${process.env.PUBLIC_URL}/images/service-tool-image.jpg`} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

const ServiceFAQs = () => {
  const faqs = [
    {
      id: 1,
      question: "What types of businesses can benefit from Lexa?",
      answer: "Lexa is built for both SMEs and law firms. Whether you're managing contracts or conducting complex legal research, our AI tools streamline your legal processes—no matter your size or sector."
    },
    {
      id: 2,
      question: "How does Lexa adapt to different legal systems?",
      answer: "Lexa supports region-specific legal drafting and citations across KSA, UAE, Pakistan, Qatar, and more. Our AI adjusts to your selected jurisdiction and language, ensuring local legal compliance.",
      isOpen: true
    },
    {
      id: 3,
      question: "What kind of support do you offer after deployment?",
      answer: "We offer complete onboarding, continuous updates, template improvements, and responsive support. Our team ensures Lexa evolves with your legal needs over time."
    },
    {
      id: 4,
      question: "How secure is my legal data on Lexa?",
      answer: "Lexa prioritizes data privacy and security. All documents and user data are encrypted and stored on secure servers, following regional compliance and best practices.."
    },
    {
      id: 5,
      question: "When can I expect to see results with Lexa?",
      answer: "Most users experience a productivity boost immediately—drafting time drops from hours to minutes. ROI grows over time as Lexa learns from your inputs and usage."
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

const ServicesDetails = () => {
  return (
    <>
      <PageHeader title="Service" subtitle="Details" />
      
      <div className="page-service-single">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-4">
              <ServiceSidebar />
            </div>

            {/* Main Content */}
            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img src={`${process.env.PUBLIC_URL}/images/service-single-img.jpg`} alt="" />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">
                  Unlock the full potential of legal automation with our AI-driven solutions.
                  Lexa transforms how businesses and legal professionals draft, review, and collaborate on documents by combining advanced machine learning with deep legal intelligence. From clause suggestions to multilingual drafting and jurisdiction-aware research, our tools streamline legal workflows and reduce manual effort.
                  </p>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Our team works closely with law firms and SMEs to understand their region-specific needs. From model training on legal data to deployment and optimization, we deliver seamless integration into your daily operations—helping you draft faster, stay compliant, and make smarter legal decisions with confidence.
                  </p>

                  <ServiceSolution />
                  <ServiceResult />
                  <ServiceTools />
                </div>

                <ServiceFAQs />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServicesDetails;
