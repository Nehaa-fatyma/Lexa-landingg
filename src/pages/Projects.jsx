import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const projectData = [
    {
        title: "Automated Legal Document Review",
        description: "Leverages AI and natural language processing to quickly analyze, classify, and extract key information from legal documents—saving time, reducing errors, and improving compliance.",
        image: "images/project-1.jpg",
        link: "/project-single",
        delay: "0s"
    },
    {
        title: "Real-Time Financial Risk Detection",
        description: "Leverages AI and natural language processing to quickly analyze, classify, and extract key information from legal documents—saving time, reducing errors, and improving compliance.",
        image: "images/project-2.jpg",
        link: "/project-single",
        delay: "0.2s"
    },
    {
        title: "Intelligent Document Analysis",
        description: "Leverages AI and natural language processing to quickly analyze, classify, and extract key information from legal documents—saving time, reducing errors, and improving compliance.",
        image: "images/project-3.jpg",
        link: "/project-single",
        delay: "0.4s"
    },
    {
        title: "AI-Powered Legal Review",
        description: "Leverages AI and natural language processing to quickly analyze, classify, and extract key information from legal documents—saving time, reducing errors, and improving compliance.",
        image: "images/project-4.jpg",
        link: "/project-single",
        delay: "0.6s"
    },
    {
        title: "Automated Contract Evaluation",
        description: "Leverages AI and natural language processing to quickly analyze, classify, and extract key information from legal documents—saving time, reducing errors, and improving compliance.",
        image: "images/project-5.jpg",
        link: "/project-single",
        delay: "0.8s"
    },
    {
        title: "Streamlined Legal Document",
        description: "Leverages AI and natural language processing to quickly analyze, classify, and extract key information from legal documents—saving time, reducing errors, and improving compliance.",
        image: "images/project-6.jpg",
        link: "/project-single",
        delay: "1s"
    },
];

const Projects = () => {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="page-header-box">
                                <h1 className="wow fadeInUp" data-cursor="-opaque">Our <span>projects</span></h1>
                                <nav className="wow fadeInUp" data-wow-delay="0.2s">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Our projects</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-project">
                <div className="container">
                    <div className="row">
                        {projectData.map((project, index) => (
                            <div className="col-md-6" key={index}>
                                <div className="project-item wow fadeInUp" data-wow-delay={project.delay}>
                                    <div className="project-item-content">
                                        <h3><Link to={project.link}>{project.title}</Link></h3>
                                        <p>{project.description}</p>
                                    </div>
                                    <div className="project-image">
                                        <Link to={project.link} data-cursor-text="View">
                                            <figure className="image-anime">
                                                <img src={`${process.env.PUBLIC_URL}/${project.image}`} alt="" />
                                            </figure>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Projects; 