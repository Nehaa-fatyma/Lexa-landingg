import React from 'react';
import { Link } from 'react-router-dom';

const TeamMemberInfo = () => (
    <div className="team-member-info">
        <div className="section-title">
            <h3 className="wow fadeInUp">Marketing director</h3>
            <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">About <span>me</span></h2>
            <p className="wow fadeInUp" data-wow-delay="0.4s">Brooklyn Simmons is a results-driven Marketing Director with a passion for innovative strategies and data-backed decisions. With over 10 years of experience in brand positioning, digital campaigns, and audience engagement, she leads with a vision to connect technology with human-centered marketing. Brooklyn plays a vital role in shaping our AI agency's voice, ensuring every message resonates with purpose and impact.</p>
        </div>
        <div className="team-member-info-list wow fadeInUp" data-wow-delay="0.6s">
            <ul>
                <li><img src={`${process.env.PUBLIC_URL}/images/icon-location-gradient.svg`} alt="" />123 Lorem Street Suite 5B, Ipsum  UK</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/icon-mail-gradient.svg`} alt="" />support@domainname.com</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/icon-phone-gradient.svg`} alt="" />+(00) 123 4568 7452</li>
            </ul>
        </div>
        <div className="team-member-info-counters">
            <div className="member-info-counter-item">
                <h2><span className="counter">25</span>+</h2>
                <p>years of experience</p>
            </div>
            <div className="member-info-counter-item">
                <h2><span className="counter">100</span>+</h2>
                <p>Trusted by Brands</p>
            </div>
            <div className="member-info-counter-item">
                <h2><span className="counter">10</span>%</h2>
                <p>Industry Experience</p>
            </div>
            <div className="member-info-counter-item">
                <h2><span className="counter">50</span>k+</h2>
                <p>successfull projects</p>
            </div>
        </div>
    </div>
);

const skills = [
    { title: 'Digital Marketing Strategy', percent: '98%' },
    { title: 'Content Creation', percent: '68%' },
    { title: 'Brand Management', percent: '70%' },
    { title: 'Data-Driven Campaigns', percent: '80%' },
];

const TeamMemberSkills = () => (
    <div className="team-member-skills">
        <div className="section-title">
            <h2 className="wow fadeInUp" data-cursor="-opaque">My <span>skillset</span></h2>
        </div>
        <div className="member-skills-list">
            {skills.map((skill, index) => (
                <div className="skills-progress-bar" key={index}>
                    <div className="skillbar" data-percent={skill.percent}>
                        <div className="skill-data">
                            <div className="skill-title">{skill.title}</div>
                            <div className="skill-no">{skill.percent}</div>
                        </div>
                        <div className="skill-progress">
                            <div className="count-bar" style={{ width: skill.percent }}></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const experiences = [
    { year: '2022 - 2025', title: 'Excelent product design', delay: '0.2s' },
    { year: '2019 - 2022', title: 'Excelent seo expert', delay: '0.4s' },
    { year: '2015 - 2019', title: 'Excelent product development', delay: '0.6s' },
    { year: '2012 - 2015', title: 'Excelent backend developer', delay: '0.8s' },
];

const TeamMemberExperience = () => (
    <div className="team-member-experience">
        <div className="section-title">
            <h2 className="wow fadeInUp" data-cursor="-opaque">Personal <span>experience</span></h2>
        </div>
        <div className="team-member-experience-list">
            {experiences.map((exp, index) => (
                <div className="member-experience-item wow fadeInUp" data-wow-delay={exp.delay} key={index}>
                    <div className="member-experience-detail">
                        <div className="member-experience-year">
                            <div className="icon-box"><i className="fa-regular fa-calendar-days"></i></div>
                            <div className="member-experience-no"><p>{exp.year}</p></div>
                        </div>
                        <div className="member-experience-content"><h3>{exp.title}</h3></div>
                    </div>
                    <div className="member-experience-btn">
                        <Link to="#"><img src={`${process.env.PUBLIC_URL}/images/arrow-white.svg`} alt="" /></Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const TeamContactForm = () => (
    <div className="contact-form team-contact-form">
        <div className="section-title">
            <h2 className="wow fadeInUp" data-cursor="-opaque">Send us <span>a message</span></h2>
        </div>
        <form id="contactForm" action="#" method="POST" data-toggle="validator" className="wow fadeInUp" data-wow-delay="0.2s">
            <div className="row">
                <div className="form-group col-md-6 mb-4"><input type="text" name="fname" className="form-control" placeholder="First Name" required /></div>
                <div className="form-group col-md-6 mb-4"><input type="text" name="lname" className="form-control" placeholder="Last Name" required /></div>
                <div className="form-group col-md-6 mb-4"><input type="text" name="phone" className="form-control" placeholder="Phone No." required /></div>
                <div className="form-group col-md-6 mb-4"><input type="email" name ="email" className="form-control" placeholder="Email Address" required /></div>
                <div className="form-group col-md-12 mb-5"><textarea name="message" className="form-control" rows="4" placeholder="Write Message..."></textarea></div>
                <div className="col-lg-12"><button type="submit" className="btn-default"><span>submit now</span></button></div>
            </div>
        </form>
    </div>
);

const TeamSingleContent = () => {
    return (
        <div className="team-single-content">
            <TeamMemberInfo />
            <TeamMemberSkills />
            <TeamMemberExperience />
            <TeamContactForm />
        </div>
    );
};

export default TeamSingleContent; 