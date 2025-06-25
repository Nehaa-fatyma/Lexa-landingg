import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/A-pageheader';
import Footer from '../components/Footer';

const teamMembers = [
    { name: 'Sarah Mitchell', role: 'co. founder', image: 'images/team-1.jpg', delay: '0s' },
    { name: 'Brooklyn Simmons', role: 'Marketing director', image: 'images/team-2.jpg', delay: '0.2s' },
    { name: 'Ralph Edwards', role: 'Lead AI Scientist', image: 'images/team-3.jpg', delay: '0.4s' },
    { name: 'Marvin Mckinney', role: 'Machine Learning Engineer', image: 'images/team-4.jpg', delay: '0.6s' },
    { name: 'Chloe Morgan', role: 'Computer Vision Engineer', image: 'images/team-5.jpg', delay: '0.8s' },
    { name: 'Daniel Carter', role: 'Full Stack Developer', image: 'images/team-6.jpg', delay: '1s' },
    { name: 'Emily Harper', role: 'Data Scientist', image: 'images/team-7.jpg', delay: '1.2s' },
    { name: 'James Hudson', role: 'DevOps', image: 'images/team-8.jpg', delay: '1.4s' }
];

const Team = () => {
    return (
        <>
            <PageHeader
                title="Our"
                subtitle="team"
                breadcrumbs={[
                    { name: "home", path: "/" },
                    { name: "Our team", active: true }
                ]}
            />

            <div className="page-team">
                <div className="container">
                    <div className="row">
                        {teamMembers.map((member, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <div className="team-item wow fadeInUp" data-wow-delay={member.delay}>
                                    <div className="team-image">
                                        <Link to="/team-single" className="image-anime" data-cursor-text="View">
                                            <figure>
                                                <img src={`${process.env.PUBLIC_URL}/${member.image}`} alt={member.name} />
                                            </figure>
                                        </Link>
                                    </div>
                                    <div className="team-body">
                                        <div className="team-content">
                                            <h3><Link to="/team-single">{member.name}</Link></h3>
                                            <p>{member.role}</p>
                                        </div>
                                        <div className="team-social-list">
                                            <ul>
                                                <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                                <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                                <li><Link to="#"><i className="fa-brands fa-pinterest-p"></i></Link></li>
                                            </ul>
                                        </div>
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

export default Team; 