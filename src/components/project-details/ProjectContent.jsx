import React from 'react';

const ProjectSolution = () => (
    <div className="project-solution-box">
        <h2 className="wow fadeInUp" data-wow-delay="0.4s">Inside strategy behind <span>solution</span></h2>
        <p className="wow fadeInUp" data-wow-delay="0.6s">Our service is designed to provide you with everything you need to achieve meaningful results through AI-driven solutions. From in-depth consultation and tailored strategies to seamless implementation and ongoing support</p>
        
        <div className="project-solution-image-content">
            <div className="project-solution-image">
                <figure className="image-anime reveal">
                    <img src={`${process.env.PUBLIC_URL}/images/project-solution-image.jpg`} alt="" />
                </figure>
            </div>
            
            <div className="project-solution-content wow fadeInUp" data-wow-delay="0.8s">
                <p>Unlock the full potential of your data with our advanced Machine Learning services. We design and deploy intelligent models that learn from your data, automate decision-making, and continuously improve outcomes. Whether it's predictive analytics.</p>
                
                <ul>
                    <li>Next-gen edge ai for smarter devices.</li>
                    <li>Scalable edge ai for connected device.</li>
                    <li>Secure edge ai for smart environment.</li>
                    <li>Adaptive edge ai for intelligent devices.</li>
                </ul>
            </div>
        </div>
    </div>
);

const ProjectPerformance = () => (
    <div className="project-performance-box">
        <h2 className="wow fadeInUp">Ongoing performance <span>monitoring</span></h2>
        <p className="wow fadeInUp" data-wow-delay="0.2s">We ensure your AI systems stay optimized and effective through continuous tracking, updates, and performance enhancements for lasting impact.</p>

        <div className="performance-step-list">
            <div className="performance-step-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="performance-step-no">
                    <h3>Step 01</h3>
                </div>
                <div className="performance-step-content">
                    <h3>Project challange</h3>
                    <p>We analyze your unique business needs to develop machine learning models and AI systems tailored</p>
                </div>
                <div className="icon-box">
                    <img src={`${process.env.PUBLIC_URL}/images/icon-service-6.svg`} alt="" />
                </div>
            </div>

            <div className="performance-step-item wow fadeInUp" data-wow-delay="0.6s">
                <div className="performance-step-no">
                    <h3>Step 02</h3>
                </div>
                <div className="performance-step-content">
                    <h3>Project solution</h3>
                    <p>We analyze your unique business needs to develop machine learning models and AI systems tailored</p>
                </div>
                <div className="icon-box">
                    <img src={`${process.env.PUBLIC_URL}/images/icon-service-3.svg`} alt="" />
                </div>
            </div>

            <div className="performance-step-item highlighted-box wow fadeInUp" data-wow-delay="0.8s">
                <div className="performance-step-no">
                    <h3>Step 03</h3>
                </div>
                <div className="performance-step-content">
                    <h3>Achieved Milestones</h3>
                    <p>We successfully reached key project goals within the planned timeline and scope. Each milestone marked measurable progress toward delivering a high-impact AI solution.</p>
                </div>
                <div className="icon-box">
                    <img src={`${process.env.PUBLIC_URL}/images/icon-service-8.svg`} alt="" />
                </div>
            </div>
        </div>
    </div>
);

const ProjectExperience = () => (
    <div className="project-experience-box">
        <h2 className="wow fadeInUp">What the client <span>experienced</span></h2>
        <p className="wow fadeInUp" data-wow-delay="0.2s">We ensure your AI systems stay optimized and effective through continuous tracking, updates, and performance enhancements for lasting impact.</p>
        
        <div className="project-experience-list wow fadeInUp" data-wow-delay="0.4s">
            <ul>
                <li>Revolutionizing devices with next-gen edge ai.</li>
                <li>Transforming everyday devices through advanced</li>
                <li>Smarter performance powered by edgetechnology</li>
                <li>Edge ai innovation driving future-ready solutions</li>
            </ul>
        </div>

        <p>Edge AI is redefining how devices operate by bringing intelligence closer to the source of data. It enables faster processing, enhanced privacy, and real-time decision-making without relying solely on the cloud. From smart homes to industrial automation, Edge AI is unlocking new possibilities. With tailored solutions, we help businesses stay ahead in a connected, intelligent world.</p>
    </div>
);

const faqs = [
    { id: '1', question: 'What industries can benefit from AI solutions?', answer: 'We monitor system performance in real-time, identifying and addressing any issues to ensure that your AI solution runs smoothly at all times.', expanded: false, delay: '0s' },
    { id: '2', question: 'How do you customize AI solutions for my needs?', answer: 'We monitor system performance in real-time, identifying and addressing any issues to ensure that your AI solution runs smoothly at all times.', expanded: true, delay: '0.2s' },
    { id: '3', question: 'What kind of support do you provide post-deployment?', answer: 'We monitor system performance in real-time, identifying and addressing any issues to ensure that your AI solution runs smoothly at all times.', expanded: false, delay: '0.4s' },
    { id: '4', question: 'How secure is the AI technology you use?', answer: 'We monitor system performance in real-time, identifying and addressing any issues to ensure that your AI solution runs smoothly at all times.', expanded: false, delay: '0.6s' },
    { id: '5', question: 'How long does it take to see results?', answer: 'We monitor system performance in real-time, identifying and addressing any issues to ensure that your AI solution runs smoothly at all times.', expanded: false, delay: '0.8s' },
]

const ProjectFAQs = () => (
    <div className="page-single-faqs">
        <div className="section-title">
            <h2 className="wow fadeInUp" data-cursor="-opaque">Frequently asked <span>question</span></h2>
        </div>

        <div className="faq-accordion" id="faqaccordion">
            {faqs.map(faq => (
                <div className="accordion-item wow fadeInUp" data-wow-delay={faq.delay} key={faq.id}>
                    <h2 className="accordion-header" id={`heading${faq.id}`}>
                        <button className={`accordion-button ${!faq.expanded ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${faq.id}`} aria-expanded={faq.expanded} aria-controls={`collapse${faq.id}`}>
                            {faq.question}
                        </button>
                    </h2>
                    <div id={`collapse${faq.id}`} className={`accordion-collapse collapse ${faq.expanded ? 'show' : ''}`} aria-labelledby={`heading${faq.id}`} data-bs-parent="#faqaccordion">
                        <div className="accordion-body">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const ProjectContent = () => {
    return (
        <div className="project-single-content">
            <div className="page-single-image">
                <figure className="image-anime reveal">
                    <img src={`${process.env.PUBLIC_URL}/images/project-2.jpg`} alt="" />
                </figure>
            </div>
            
            <div className="project-entry">
                <p className="wow fadeInUp">Unlock the full potential of your data with our advanced Machine Learning services. We design and deploy intelligent models that learn from your data, automate decision-making, and continuously improve outcomes. Whether it's predictive analytics, recommendation systems, or anomaly detection, our tailored solutions help businesses stay ahead in a rapidly evolving digital landscape.</p>
                <p className="wow fadeInUp" data-wow-delay="0.2s">Our team of ML experts collaborates closely with you to understand your specific goals and challenges. From data preprocessing and model training to deployment and ongoing optimization, we ensure a seamless and scalable integration of Machine Learning into your existing systems—driving smarter operations and measurable results.</p>
                
                <ProjectSolution />
                <ProjectPerformance />
                <ProjectExperience />
            </div>

            <ProjectFAQs />
        </div>
    );
};

export default ProjectContent; 