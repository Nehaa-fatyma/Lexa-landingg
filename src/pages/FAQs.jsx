import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/A-pageheader';
import Footer from '../components/Footer';

const FAQs = () => {
    const faqCategories = {
        workflow: {
            title: "Project workflow",
            items: [
                { id: 1, question: "What is the first step in your legal AI onboarding process?", answer: "We begin with a discovery call to understand your legal workflows, jurisdictions, and document needs. From there, we customize Lexa’s features for your business or law firm." },
                { id: 2, question: "How long does implementation typically take?", answer: "Most Lexa clients can begin using core features within days. Full integration, including team training and template customization, typically takes 1–2 weeks." },
                { id: 3, question: "Will I be involved throughout the process?", answer: "Yes. We collaborate closely with you at every step—from drafting templates to testing real-time collaboration features—ensuring Lexa is aligned with your legal operations." },
                { id: 4, question: "How do you test your legal AI solutions?", answer: "Lexa is tested on jurisdiction-specific legal datasets and verified by legal professionals to ensure clause accuracy, citation relevance, and language precision." },
                { id: 5, question: "Do you offer training or onboarding support?", answer: "Absolutely. We provide guided onboarding, interactive walkthroughs, and dedicated support for both SMEs and legal teams to get started quickly and confidently." }
            ]
        },
        security: {
            title: "Data security",
            items: [
                { id: 6, question: "How do you ensure the security of our legal data?", answer: "All documents are encrypted in transit and at rest. Lexa uses secure, region-compliant cloud servers to protect your sensitive legal information." },
                { id: 7, question: "Are your systems compliant with regional data laws?", answer: "Yes. Lexa is built with GDPR, DIFC, and other Middle Eastern legal frameworks in mind, ensuring compliance with local data protection regulations." },
                { id: 8, question: "Do you store legal documents or client data long-term?", answer: "We store your documents securely for your access only. You retain full ownership, and we offer data deletion or export on request." },
                { id: 9, question: "What happens to our data after a contract ends?", answer: "We follow strict data retention policies. Upon project completion, all your data can be permanently deleted or transferred to your systems—based on your preference." },
                { id: 10, question: "Can AI pose any data privacy risks?", answer: "Lexa uses secure, non-public AI models designed specifically for legal tasks. No data is used to train public models, ensuring client confidentiality at all times." }
            ]
        },
        technology: {
            title: "Technology stack",
            items: [
                { id: 11, question: "What technologies power Lexa’s AI?", answer: "Lexa combines proprietary NLP models, OCR engines, and legal-specific machine learning tools tailored for regional law and language." },
                { id: 12, question: "Do you use open-source or proprietary frameworks?", answer: "We use a hybrid approach—leveraging reliable open-source technologies with proprietary legal intelligence layers for added security and specialization." },
                { id: 13, question: "Can Lexa integrate with our current systems?", answer: "Yes. Lexa offers API-based integrations for popular CRMs, contract tools, and internal platforms—enabling a seamless workflow with your existing tech stack." },
                { id: 14, question: "How do you decide which tech stack to use for each client?", answer: "We assess your document types, jurisdiction needs, and team size to configure the most effective combination of tools and integrations." },
                { id: 15, question: "Is Lexa available via API or SaaS model?", answer: "Lexa is available as a secure SaaS platform and can be integrated via APIs to support document import/export, signing, and internal automation." }
            ]
        },
        experience: {
            title: "Client experience",
            items: [
                { id: 16, question: "Who will manage my Lexa onboarding and support?", answer: "You’ll be assigned a dedicated onboarding manager and legal tech specialist to guide implementation, customization, and training." },
                { id: 17, question: "What communication channels do you use?", answer: "We stay in touch via email, Slack, WhatsApp, and scheduled video calls—whichever suits your team best." },
                { id: 18, question: "How do you handle client feedback and updates?", answer: "We collect feedback regularly through calls and surveys and release frequent updates to improve templates, AI behavior, and UX based on your inputs." },
                { id: 19, question: "What if I’m not satisfied with the platform?", answer: "Client satisfaction is our top priority. We offer flexible support, feature adjustments, and cancellation policies to ensure you get value at every step." },
                { id: 20, question: "Do you have references or legal case studies?", answer: "Yes, we provide case studies and testimonials from law firms and SMEs across the Middle East who’ve successfully used Lexa to transform their legal operations." }
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
                                        <h3>Need help?</h3>
                                        <ul>
                                            <li>
                                                <img src={`${process.env.PUBLIC_URL}/images/icon-mail-gradient.svg`} alt="" />
                                                <a href="mailto:contact@lexa.lawye">contact@lexa.lawyer</a>
                                            </li>
                                            <li>
                                                <img src={`${process.env.PUBLIC_URL}/images/icon-mail-gradient.svg`} alt="" />
                                                <a href="mailto:rabeet.ali@lexa.lawyer">rabeet.ali@lexa.lawyer</a>
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