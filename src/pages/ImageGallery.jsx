import React, { useEffect } from 'react';
import PageHeader from '../components/A-pageheader';
import Footer from '../components/Footer';

const ImageGallery = () => {
    const galleryImages = [
        { id: 1, src: 'gallery-1.jpg' },
        { id: 2, src: 'gallery-2.jpg' },
        { id: 3, src: 'gallery-3.jpg' },
        { id: 4, src: 'gallery-4.jpg' },
        { id: 5, src: 'gallery-5.jpg' },
        { id: 6, src: 'gallery-6.jpg' },
        { id: 7, src: 'gallery-7.jpg' },
        { id: 8, src: 'gallery-8.jpg' },
        { id: 9, src: 'gallery-9.jpg' }
    ];

    useEffect(() => {
        // Initialize Magnific Popup
        if (window.jQuery) {
            window.jQuery('.page-gallery-box').magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        }

        // Initialize WOW.js animations
        if (window.WOW) {
            new window.WOW().init();
        }
    }, []);

    return (
        <>
            <PageHeader title="Our" subtitle="gallery" breadcrumb={['home', 'our gallery']} />

            <div className="page-gallery">
                <div className="container">
                    <div className="row gallery-items page-gallery-box">
                        {galleryImages.map((image, index) => (
                            <div key={image.id} className="col-lg-4 col-6">
                                <div className={`photo-gallery wow fadeInUp`} data-wow-delay={`${index * 0.2}s`}>
                                    <a href={`${process.env.PUBLIC_URL}/images/${image.src}`} data-cursor-text="View">
                                        <figure className="image-anime">
                                            <img src={`${process.env.PUBLIC_URL}/images/${image.src}`} alt={`Gallery item ${image.id}`} />
                                        </figure>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ImageGallery; 