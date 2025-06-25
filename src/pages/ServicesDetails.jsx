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
          <h3>Need help with AI?</h3>
          <ul>
            <li>
              <img src={`${process.env.PUBLIC_URL}/images/icon-phone-gradient.svg`} alt="" />
              <a href="tel:123456789">+123 456 789</a>
            </li>
            <li>
              <img src={`${process.env.PUBLIC_URL}/images/icon-mail-gradient.svg`} alt="" />
              <a href="mailto:info@domainname.com">info@domainname.com</a>
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
      title: "Customized AI Solutions",
      description: "We analyze your unique business needs to develop machine learning models and AI systems tailored specifically for your goals—ensuring maximum relevance, accuracy, and efficiency.",
      delay: "0.8s"
    },
    {
      icon: "icon-service-solution-2.svg",
      title: "End-to-End Support",
      description: "We analyze your unique business needs to develop machine learning models and AI systems tailored specifically for your goals—ensuring maximum relevance, accuracy, and efficiency.",
      delay: "1s"
    }
  ];

  const counters = [
    { count: "1,200", icon: "icon-solution-counter-1.svg" },
    { count: "10,000", icon: "icon-solution-counter-2.svg" }
  ];

  return (
    <div className="service-solution-box">
      <h2 className="wow fadeInUp" data-wow-delay="0.4s">What you'll get <span>with this service</span></h2>
      <p className="wow fadeInUp" data-wow-delay="0.6s">
        Our service is designed to provide you with everything you need to achieve meaningful results through AI-driven solutions. From in-depth consultation and tailored strategies to seamless implementation and ongoing support
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
                <li>Smart Deployment & Integration</li>
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
          Our service is designed to provide you with everything you need to achieve meaningful results through AI-driven solutions.
        </p>
        
        <div className="service-result-item wow fadeInUp" data-wow-delay="0.4s">
          <div className="icon-box">
            <img src={`${process.env.PUBLIC_URL}/images/icon-service-solution-2.svg`} alt="" />
          </div>
          <div className="service-result-item-content">
            <h3>End-to-End Support</h3>
            <p>We analyze your unique business needs to develop machine learning models and AI systems tailored</p>
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
        Our service is designed to provide you with everything you need to achieve meaningful results through AI-driven solutions. From in-depth consultation and tailored strategies to seamless implementation and ongoing support
      </p>
      
      <div className="service-tool-content-box">
        <div className="service-tool-content">
          <p className="wow fadeInUp" data-wow-delay="0.4s">
            Harnessing Advanced Machine Learning to Drive Sustainable Business Growth and Innovation, Empowering Data-Driven Decisions for Future Success
          </p>
          
          <div className="service-tool-counter-info">
            <div className="service-tool-counter">
              <h2><span className="counter">12</span></h2>
              <p>We have 5+ years of working experience.</p>
            </div>
            <div className="service-tool-info wow fadeInUp" data-wow-delay="0.6s">
              <p>Our approach focuses on delivering end-to-end AI solutions that optimize.</p>
              <ul>
                <li>Craft Innovative Solutions</li>
                <li>Develop Intelligent Solutions</li>
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

const ServicesDetails = () => {
  return (
    <>
      <PageHeader title="Machine" subtitle="learning" />
      
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
                    Unlock the full potential of your data with our advanced Machine Learning services. We design and deploy intelligent models that learn from your data, automate decision-making, and continuously improve outcomes. Whether it's predictive analytics, recommendation systems, or anomaly detection, our tailored solutions help businesses stay ahead in a rapidly evolving digital landscape.
                  </p>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Our team of ML experts collaborates closely with you to understand your specific goals and challenges. From data preprocessing and model training to deployment and ongoing optimization, we ensure a seamless and scalable integration of Machine Learning into your existing systems—driving smarter operations and measurable results.
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
