import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/A-pageheader';
import Footer from '../components/Footer';
import OurFeatures from '../components/OurFeatures';
import HowItWorks from '../components/HowItWorks';

const testimonialsData = [
    {
        quote: "Working with was a game-changer for our business. They took the time understand our unique challenges & solutions that boosted our efficiency & the team was knowledgeable, responsive & incredibly easy to work with.!",
        author: "Sophia Reynolds",
        role: "co. founder",
        image: "images/testimonial-image-1.jpg",
        delay: "0s"
    },
    {
        quote: "Working with was a game-changer for our business. They took the time understand our unique challenges & solutions that boosted our efficiency & the team was knowledgeable, responsive & incredibly easy to work with.!",
        author: "Jacob Jones",
        role: "Marketing director",
        image: "images/testimonial-image-2.jpg",
        delay: "0.2s"
    },
    {
        quote: "Working with was a game-changer for our business. They took the time understand our unique challenges & solutions that boosted our efficiency & the team was knowledgeable, responsive & incredibly easy to work with.!",
        author: "Olivia Bennett",
        role: "Lead AI Scientist",
        image: "images/testimonial-image-3.jpg",
        delay: "0.4s"
    },
    {
        quote: "Working with was a game-changer for our business. They took the time understand our unique challenges & solutions that boosted our efficiency & the team was knowledgeable, responsive & incredibly easy to work with.!",
        author: "Liam Mitchell",
        role: "Machine Learning Engineer",
        image: "images/testimonial-image-4.jpg",
        delay: "0.6s"
    },
    {
        quote: "Working with was a game-changer for our business. They took the time understand our unique challenges & solutions that boosted our efficiency & the team was knowledgeable, responsive & incredibly easy to work with.!",
        author: "Ethan Parker",
        role: "Data Scientist",
        image: "images/testimonial-image-5.jpg",
        delay: "0.8s"
    },
    {
        quote: "Working with was a game-changer for our business. They took the time understand our unique challenges & solutions that boosted our efficiency & the team was knowledgeable, responsive & incredibly easy to work with.!",
        author: "Ava Thompson",
        role: "Full Stack Developer",
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