import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const companyLogos = [
  process.env.PUBLIC_URL + "/images/company-logo-1.svg",
  process.env.PUBLIC_URL + "/images/company-logo-2.svg",
  process.env.PUBLIC_URL + "/images/company-logo-3.svg",
  process.env.PUBLIC_URL + "/images/company-logo-4.svg",
  process.env.PUBLIC_URL + "/images/company-logo-5.svg",
  process.env.PUBLIC_URL + "/images/company-logo-2.svg",
  process.env.PUBLIC_URL + "/images/company-logo-3.svg",
];

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">Welcome to nextmind</h3>
              <h1
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Designing smarter tomorrows with <span>AI today!</span>
              </h1>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-section-content">
              <div className="hero-content wow fadeInUp">
                <p>
                  We craft intelligent, scalable AI solutions that enable
                  businesses to innovate, adapt, and lead in a rapidly evolving
                  world.
                </p>
              </div>

              <div className="hero-list wow fadeInUp" data-wow-delay="0.2s">
                <ul>
                  <li>Unlock the Power of AI</li>
                  <li>Future-Ready AI, Today</li>
                </ul>
              </div>

              <div className="satisfy-client-box wow fadeInUp" data-wow-delay="0.4s">
                <div className="satisfy-client-images">
                  {["1", "2", "3"].map((num) => (
                    <div className="satisfy-client-image" key={num}>
                    <figure className="image-anime">
                        <img
                          src={process.env.PUBLIC_URL + `/images/satisfy-client-img-${num}.jpg`}
                          alt={`Client ${num}`}
                        />
                    </figure>
                  </div>
                  ))}
                </div>
                <div className="satisfy-client-content">
                  <p>
                    <span>5.5k+</span> Satisfice Client in the world
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Intro Video Section */}
      <div className="hero-intro-video">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-video-box flowmap-effect">
                <div
                  className="flowmap-deformation"
                  data-bg={process.env.PUBLIC_URL + "/images/intro-video-image.jpg"}
                  data-bg-width="1600"
                  data-bg-height="720"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/intro-video-image.jpg"})`,
                  }}
                ></div>

                <div className="video-play-button">
                  <a
                    href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                    className="popup-video"
                    data-cursor-text="Play"
                  >
                    <i className="fa-solid fa-play"></i>
                  </a>
                </div>

                <div className="hero-counter-box">
                  <div className="hero-counter-image">
                    <figure className="image-anime">
                      <img src={process.env.PUBLIC_URL + "/images/hero-counter-bg.jpg"} alt="" />
                    </figure>
                    <div className="video-button-border">
                      <a
                        href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                        className="popup-video"
                        data-cursor-text="Play"
                      >
                        <i className="fa-solid fa-play"></i>
                      </a>
                      <h3>watch video</h3>
                    </div>
                  </div>
                  <div className="hero-counter-content">
                    <h2>
                      <span className="counter">150</span>+
                    </h2>
                    <p>Custom AI solution delivered with precision and impact.</p>
                  </div>
                </div>

                <div className="hero-company-slider-box">
                  <p>Already chosen by the leaders</p>
                  <div className="hero-company-slider">
                    <Swiper
                      modules={[Autoplay]}
                      spaceBetween={30}
                      slidesPerView={5}
                      loop={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        320: {
                          slidesPerView: 2,
                          spaceBetween: 20
                        },
                        480: {
                          slidesPerView: 3,
                          spaceBetween: 20
                        },
                        768: {
                          slidesPerView: 4,
                          spaceBetween: 30
                        },
                        1024: {
                          slidesPerView: 5,
                          spaceBetween: 30
                        }
                      }}
                    >
                      {companyLogos.map((logo, index) => (
                        <SwiperSlide key={index}>
                          <div className="company-logo">
                            <img src={logo} alt={`Company ${index + 1}`} />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                {/* End Company Slider */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero Intro Video */}
    </div>
  );
};

export default Hero;
