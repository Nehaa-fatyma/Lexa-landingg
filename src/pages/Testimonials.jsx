import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/A-pageheader';
import Footer from '../components/Footer';
import OurFeatures from '../components/OurFeatures';
import HowItWorks from '../components/HowItWorks';

const testimonialsData = [
    {
        quote:"Lexa has completely changed how we handle contracts. I used to spend hours drafting NDAs—now it's done in minutes, and I’m confident everything’s legally sound.",
        author: "Sophia Reynolds",
        role: "SME Owner - Dubai UAE",
        image: "images/testimonial-image-1.jpg",
        delay: "0s"
    },
    {
        quote: "The clause-level AI suggestions and citation features are spot-on. It’s like having a junior associate that works 24/7, without missing regional legal details",
        author: "Jacob Jones",
        role: "Legal Associate",
        image: "images/testimonial-image-2.jpg",
        delay: "0.2s"
    },
    {
        quote: "As someone with no legal background, Lexa makes it incredibly easy to draft employment contracts and compliance docs. It’s intuitive, fast, and accurate.",
        author: "Olivia Bennett",
        role: "Startup Founder",
        image: "images/testimonial-image-3.jpg",
        delay: "0.4s"
    },
    {
        quote: "Lexa’s multi-jurisdiction support allows our firm to toggle between Gulf countries with ease. It cuts down research time and improves consistency across cases.",
        author: "Liam Mitchell",
        role: "Senior Partner-Law firm",
        image: "images/testimonial-image-4.jpg",
        delay: "0.6s"
    },
    {
        quote: "We use Lexa for internal compliance and vendor contracts. The real-time collaboration and e-signing tools save us from endless email chains and delays.",
        author: "Ethan Parker",
        role: "In-House Counsel – E-commerce Company",
        image: "images/testimonial-image-5.jpg",
        delay: "0.8s"
    },
    {
        quote: "Lexa is redefining legal operations in the region. It’s a must-have for firms and SMEs looking to automate routine legal work without compromising accuracy.",
        author: "Ava Thompson",
        role: "Legal Tech Consultant",
        image: "images/testimonial-image-6.jpg",
        delay: "1s"
    }
];

const TestimonialItem = ({ testimonial }) => (
    <div className="col-lg-6">
        <div className="testimonial-item wow fadeInUp" data-wow-delay={testimonial.delay}>
            <div className="testimonial-slider-content">
                <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => <i className="fa-solid fa-star" key={i}></i>)}
                </div>
                <div className="testimonial-content">
                    <p>{testimonial.quote}</p>
                </div>
                <div className="author-content">
                    <h3>{testimonial.author}</h3>
                    <p>{testimonial.role}</p>
                </div>
            </div>
            <div className="testimonial-slider-image">
                <figure className="image-anime">
                    <img src={`${process.env.PUBLIC_URL}/${testimonial.image}`} alt={testimonial.author} />
                </figure>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    return (
        <>
            <PageHeader
                title="Our"
                subtitle="testimonials"
                breadcrumbs={[
                    { name: "home", path: "/" },
                    { name: "Our testimonials", active: true }
                ]}
            />
            <div className="page-testimonials">
                <div className="container">
                    <div className="row">
                        {testimonialsData.map((testimonial, index) => (
                            <TestimonialItem key={index} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </div>
            <HowItWorks />
            <OurFeatures/>
            <Footer />
        </>
    );
};

export default Testimonials; 