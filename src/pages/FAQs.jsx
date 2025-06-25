import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/A-pageheader';
import Footer from '../components/Footer';

const FAQs = () => {
    const faqCategories = {
        workflow: {
            title: "Project workflow",
            items: [
                { id: 1, question: "What is the first step in your AI project process?", answer: "Absolutely, we collaborate closely with clients at every stage to ensure alignment and transparency." },
                { id: 2, question: "How long does an AI project typically take?", answer: "Absolutely, we collaborate closely with clients at every stage to ensure alignment and transparency." },
                { id: 3, question: "Will I be involved throughout the process?", answer: "Absolutely, we collaborate closely with clients at every stage to ensure alignment and transparency." },
                { id: 4, question: "What is your approach to testing AI solutions?", answer: "Absolutely, we collaborate closely with clients at every stage to ensure alignment and transparency." },
                { id: 5, question: "Do you offer training on using the AI tools?", answer: "Absolutely, we collaborate closely with clients at every stage to ensure alignment and transparency." }
            ]
        },
        security: {
            title: "Data security",
            items: [
                { id: 6, question: "How do you ensure the security of our data?", answer: "Absolutely, we collaborate closely with clients at every stage to ensure alignment and transparency." },
                { id: 7, question: "Are your solutions compliant with data regulations?", answer: "Absolutely, we collaborate closely with clients at every stage to ensure alignment and transparency." },
                { id: 8, question: "Do you store our data?", answer: "Absolutely, we collaborate closely with clients at every stage to ensure alignment and transparency." },
                { id: 9, question: "What happens to our data after the project ends?", answer: "Absolutely, we collaborate closely with clients at every stage to ensure alignment and transparency." },
                { id: 10, question: "Can AI pose a data privacy risk?", answer: "Absolutely, we collaborate closely with clients at every stage to ensure alignment and transparency." }
            ]
        },
        technology: {
            title: "Technology stack",
            items: [
                { id: 11, question: "What AI technologies do you use?", answer: "Absolutely, we collaborate closely with clients at every stage to ensure alignment and transparency." },
                { id: 12, question: "Do you work with open-source frameworks?", answer: "Absolutely, we collaborate closely with clients at every stage to ensure alignment and transparency." },
                { id: 13, question: "Can your solutions integrate with existing systems?", answer: "Absolutely, we collaborate closely with clients at every stage to ensure alignment and transparency." },
                { id: 14, question: "How do you choose the right technology for a project?", answer: "Absolutely, we collaborate closely with clients at every stage to ensure alignment and transparency." },
                { id: 15, question: "Do you offer API-based AI solutions?", answer: "Absolutely, we collaborate closely with clients at every stage to ensure alignment and transparency." }
            ]
        },
        experience: {
            title: "Client experience",
            items: [
                { id: 16, question: "Who will manage my project?", answer: "Absolutely, we collaborate closely with clients at every stage to ensure alignment and transparency." },
                { id: 17, question: "What communication channels do you use?", answer: "Absolutely, we collaborate closely with clients at every stage to ensure alignment and transparency." },
                { id: 18, question: "How is client feedback incorporated?", answer: "Absolutely, we collaborate closely with clients at every stage to ensure alignment and transparency." },
                { id: 19, question: "What if I'm not satisfied with the results?", answer: "Absolutely, we collaborate closely with clients at every stage to ensure alignment and transparency." },
                { id: 20, question: "Do you provide case studies or references?", answer: "Absolutely, we collaborate closely with clients at every stage to ensure alignment and transparency." }
            ]
        }
    };

    return (
        <>
            <PageHeader title="Frequently asked" subtitle="question" breadcrumb={['home', 'FAQs']} />

            <div className="page-faqs">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="page-single-sidebar">
                                <div className="page-category-list wow fadeInUp">
                                    <ul>
                                        <li><a href="#faq_1">Project Workflow</a></li>
                                        <li><a href="#faq_2">Data Security</a></li>
                                        <li><a href="#faq_3">Technology Stack</a></li>
                                        <li><a href="#faq_4">Client Experience</a></li>
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
                        </div>

                        <div className="col-lg-8">
                            <div className="page-faqs-catagery">
                                {Object.entries(faqCategories).map(([key, category], index) => (
                                    <div key={key} className="page-single-faqs page-faq-accordion" id={`faq_${index + 1}`}>
                                        <div className="section-title">
                                            <h2 className="wow fadeInUp" data-cursor="-opaque">
                                                {category.title.split(' ').map((word, i) => 
                                                    i === category.title.split(' ').length - 1 ? 
                                                    <span key={i}>{word}</span> : 
                                                    word + ' '
                                                )}
                                            </h2>
                                        </div>

                                        <div className="faq-accordion" id={`accordion${index}`}>
                                            {category.items.map((item, itemIndex) => (
                                                <div key={item.id} className="accordion-item wow fadeInUp" data-wow-delay={`${itemIndex * 0.2}s`}>
                                                    <h2 className="accordion-header" id={`heading${item.id}`}>
                                                        <button 
                                                            className={`accordion-button ${itemIndex === 0 ? '' : 'collapsed'}`}
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#collapse${item.id}`}
                                                            aria-expanded={itemIndex === 0 ? "true" : "false"}
                                                            aria-controls={`collapse${item.id}`}
                                                        >
                                                            {item.question}
                                                        </button>
                                                    </h2>
                                                    <div 
                                                        id={`collapse${item.id}`}
                                                        className={`accordion-collapse collapse ${itemIndex === 0 ? 'show' : ''}`}
                                                        aria-labelledby={`heading${item.id}`}
                                                        data-bs-parent={`#accordion${index}`}
                                                    >
                                                        <div className="accordion-body">
                                                            <p>{item.answer}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default FAQs; 