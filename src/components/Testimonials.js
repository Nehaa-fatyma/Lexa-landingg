import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonialCounters = [
  {
    icon: "images/icon-testimonial-counter-1.svg",
    number: 200,
    suffix: "+",
    text: "Legal AI Projects Delivered",
  },
  {
    icon: "images/icon-testimonial-counter-2.svg",
    number: 98,
    suffix: "%",
    text: "Satisfaction from Lawyers & SMEs",
  },
];

const clientImages = [
  "images/author-1.jpg",
  "images/author-2.jpg",
  "images/author-3.jpg",
  "images/author-4.jpg",
  "images/author-5.jpg",
];

const testimonials = [
  {
    name: "Sophia Reynolds",
    role: "Founder, Tech Startup",
    image: "images/testimonial-image-1.jpg",
    text: `As a small business owner, legal drafting always felt intimidating. With Lexa, I created compliant NDAs and contracts in minutes—without hiring a lawyer. The AI understood my business needs and local regulations. It's fast, simple, and incredibly reliable.`,
  },
  {
    name: "Jacob Jones",
    role: "Partner, Law Firm",
    image: "images/testimonial-image-2.jpg",
    text: `Lexa has transformed how we handle legal research across jurisdictions. I uploaded over 400 pages of case law and received structured summaries and relevant precedents within minutes. The ability to draft and analyze in both Arabic and English is a game-changer for our Gulf-based practice.`,
  },
  {
    name: "Olivia Bennett",
    role: "Legal Advisor",
    image: "images/testimonial-image-3.jpg",
    text: `We needed a solution that could adapt to Pakistan's legal landscape and streamline internal drafting. Lexa not only helped us automate contract generation, but also ensured compliance with local laws. The collaboration and version control features have made team workflows much smoother`,
  },
];

const ratings = [
  {
    icon: "images/icon-testimonial-rating-1.svg",
    count: 982,
    text: "Trustpilot 4.8 star review",
  },
  {
    icon: "images/icon-testimonial-rating-2.svg",
    count: 487,
    text: "Airbnb 5 star reviews",
  },
  {
    icon: "images/icon-testimonial-rating-3.svg",
    count: 182,
    text: "Yelp 5 star reviews",
  },
  {
    icon: "images/icon-testimonial-rating-4.svg",
    count: 897,
    text: "Google 5 star reviews",
  },
];

const Testimonials = () => {
  return (
    <div className="our-testimonials">
      <div className="container">
        <div className="row">
          {/* Left content */}
          <div className="col-lg-6">
            <div className="testimonial-content-box">
              <div className="section-title">
                <h2 className="wow fadeInUp" data-cursor="-opaque">
                Real Impact Across <span>Law & Business</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                Lexa is reshaping how legal work gets done — trusted by SMEs and legal professionals across the Middle East. From instant drafting to multilingual legal support, our AI-powered platform delivers real results where it matters most.
                </p>
              </div>

              <div className="testimonial-counters">
                {testimonialCounters.map((item, i) => (
                  <div className="testimonial-counter-item" key={i}>
                    <div className="icon-box">
                      <img src={item.icon} alt="" />
                    </div>
                    <div className="testimonial-counter-content">
                      <h2>
                        <span className="counter">{item.number}</span>
                        {item.suffix}
                      </h2>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="col-lg-6">
            <div className="testimonial-slider-box dark-section">
              <div className="testimonial-slider-box-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Testimonials</h3>
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                    What our client says
                  </h2>
                </div>

                <div className="testimonial-images">
                  <div className="satisfy-client-images">
                    {clientImages.map((img, i) => (
                      <div className="satisfy-client-image" key={i}>
                        <figure className="image-anime">
                          <img src={img} alt={`Client ${i + 1}`} />
                        </figure>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="testimonial-slider">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  pagination={{ clickable: true }}
                >
                  {testimonials.map((t, i) => (
                    <SwiperSlide key={i}>
                      <div className="testimonial-item">
                        <div className="testimonial-slider-content">
                          <div className="testimonial-rating">
                            {[...Array(5)].map((_, star) => (
                              <i className="fa-solid fa-star" key={star}></i>
                            ))}
                          </div>
                          <div className="testimonial-content">
                            <p>"{t.text}"</p>
                          </div>
                          <div className="author-content">
                            <h3>{t.name}</h3>
                            <p>{t.role}</p>
                          </div>
                        </div>
                        <div className="testimonial-slider-image">
                          <figure className="image-anime">
                            <img src={t.image} alt={t.name} />
                          </figure>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          {/* Ratings summary */}
          <div className="col-lg-12">
            <div className="testimonial-rating-box">
              {ratings.map((item, i) => (
                <div className="testimonial-rating-item" key={i}>
                  <div className="icon-box">
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="testimonial-rating-content">
                    <p>
                      <span className="counter">{item.count}</span>+ {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
