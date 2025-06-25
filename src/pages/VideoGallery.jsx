import React, { useEffect } from 'react';
import PageHeader from '../components/A-pageheader';
import Footer from '../components/Footer';

const VideoGallery = () => {
    const videoGalleryItems = [
        { id: 1, thumbnail: 'gallery-3.jpg', videoUrl: 'https://www.youtube.com/watch?v=Y-x0efG1seA' },
        { id: 2, thumbnail: 'gallery-5.jpg', videoUrl: 'https://www.youtube.com/watch?v=Y-x0efG1seA' },
        { id: 3, thumbnail: 'gallery-2.jpg', videoUrl: 'https://www.youtube.com/watch?v=Y-x0efG1seA' },
        { id: 4, thumbnail: 'gallery-1.jpg', videoUrl: 'https://www.youtube.com/watch?v=Y-x0efG1seA' },
        { id: 5, thumbnail: 'gallery-4.jpg', videoUrl: 'https://www.youtube.com/watch?v=Y-x0efG1seA' },
        { id: 6, thumbnail: 'gallery-9.jpg', videoUrl: 'https://www.youtube.com/watch?v=Y-x0efG1seA' },
        { id: 7, thumbnail: 'gallery-6.jpg', videoUrl: 'https://www.youtube.com/watch?v=Y-x0efG1seA' },
        { id: 8, thumbnail: 'gallery-8.jpg', videoUrl: 'https://www.youtube.com/watch?v=Y-x0efG1seA' },
        { id: 9, thumbnail: 'gallery-7.jpg', videoUrl: 'https://www.youtube.com/watch?v=Y-x0efG1seA' }
    ];

    useEffect(() => {
        // Initialize Magnific Popup for video
        if (window.jQuery) {
            window.jQuery('.popup-video').magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }

        // Initialize WOW.js animations
        if (window.WOW) {
            new window.WOW().init();
        }
    }, []);

    return (
        <>
            <PageHeader title="Our" subtitle="video" breadcrumb={['home', 'our video']} />

            <div className="page-video-gallery">
                <div className="container">
                    <div className="row">
                        {videoGalleryItems.map((item, index) => (
                            <div key={item.id} className="col-lg-4 col-md-6">
                                <div className="video-gallery-image wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                                    <a href={item.videoUrl} className="popup-video" data-cursor-text="Play">
                                        <figure>
                                            <img src={`${process.env.PUBLIC_URL}/images/${item.thumbnail}`} alt={`Video thumbnail ${item.id}`} />
                                        </figure>
                                    </a>
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

export default VideoGallery; 