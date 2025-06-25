import React from 'react';

const TeamSingleSidebar = () => {
    return (
        <div className="page-single-sidebar">
            <div className="team-single-image">
                <figure className="image-anime reveal">
                    <img src={`${process.env.PUBLIC_URL}/images/team-2.jpg`} alt="" />
                </figure>
            </div>
            <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                <div className="satisfy-client-box">
                    <div className="satisfy-client-images">
                        <div className="satisfy-client-image">
                            <figure className="image-anime">
                                <img src={`${process.env.PUBLIC_URL}/images/satisfy-client-img-1.jpg`} alt="" />
                            </figure>
                        </div>
                        <div className="satisfy-client-image">
                            <figure className="image-anime">
                                <img src={`${process.env.PUBLIC_URL}/images/satisfy-client-img-2.jpg`} alt="" />
                            </figure>
                        </div>
                        <div className="satisfy-client-image">
                            <figure className="image-anime">
                                <img src={`${process.env.PUBLIC_URL}/images/satisfy-client-img-3.jpg`} alt="" />
                            </figure>
                        </div>
                    </div>
                    
                    <div className="satisfy-client-content">
                        <p><span>5.5k+</span> Satisfice Client in the world</p>
                    </div>
                </div>
                
                <div className="sidebar-cta-contact">
                    <h3>Need help with AI?</h3>
                    <ul>
                        <li><img src={`${process.env.PUBLIC_URL}/images/icon-phone-gradient.svg`} alt="" /><a href="tel:123456789">+123 456 789</a></li>
                        <li><img src={`${process.env.PUBLIC_URL}/images/icon-mail-gradient.svg`} alt="" /><a href="mailto:info@domainname.com">info@domainname.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TeamSingleSidebar; 