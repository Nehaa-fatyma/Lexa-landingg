import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/A-pageheader';
import Footer from '../components/Footer';

const NotFound = () => {
    return (
        <>
            <PageHeader title="Page not" subtitle="found" breadcrumb={['home', '404 Error page']} />

            <div className="error-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="error-page-image wow fadeInUp">
                                <img src={`${process.env.PUBLIC_URL}/images/404-error-img.png`} alt="404 Error" />
                            </div>
                            <div className="error-page-content">
                                <div className="section-title">
                                    <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                                        Oops! page not <span>found</span>
                                    </h2>
                                </div>
                                <div className="error-page-content-body">
                                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                                        The page you are looking for does not exist.
                                    </p>
                                    <Link 
                                        to="/" 
                                        className="btn-default wow fadeInUp" 
                                        data-wow-delay="0.6s"
                                    >
                                        back to home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NotFound; 