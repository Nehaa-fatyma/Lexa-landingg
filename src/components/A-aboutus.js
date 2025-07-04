import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">About Us</h3>
              <h2
                className="text-effect wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Lexa is the Middle East’s first AI legal assistant for SMEs and lawyers, helping you draft faster, 
                collaborate better, and stay accurate — <span>tailored to your local legal language and system. </span>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            maxWidth: "1200px",
            margin: "40px auto",
          }}
        >
          <div style={{ width: "216px", height: "178px", background: "#2a2a2a", borderRadius: "8px" }}>
            <img src={process.env.PUBLIC_URL + "/images/about-image-1.jpg"} alt="About 1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ width: "296px", height: "244px", background: "#2a2a2a", borderRadius: "8px" }}>
            <img src={process.env.PUBLIC_URL + "/images/about-image-2.jpg"} alt="About 2" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ width: "360px", height: "320px", background: "#2a2a2a", borderRadius: "8px" }}>
            <img src={process.env.PUBLIC_URL + "/images/about-image-3.jpg"} alt="About 3" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ width: "216px", height: "178px", background: "#2a2a2a", borderRadius: "8px" }}>
            <img src={process.env.PUBLIC_URL + "/images/about-image-4.jpg"} alt="About 4" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ width: "216px", height: "178px", background: "#2a2a2a", borderRadius: "8px" }}>
            <img src={process.env.PUBLIC_URL + "/images/about-image-5.jpg"} alt="About 5" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ width: "360px", height: "280px", background: "#2a2a2a", borderRadius: "8px" }}>
            <img src={process.env.PUBLIC_URL + "/images/about-image-6.jpg"} alt="About 6" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ width: "296px", height: "208px", background: "#2a2a2a", borderRadius: "8px" }}>
            <img src={process.env.PUBLIC_URL + "/images/about-image-7.jpg"} alt="About 7" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>

        {/* Section Footer Text Start */}
        <div
          className="section-footer-text wow fadeInUp"
          data-wow-delay="0.4s"
        >
          <p>
            Join Millions Worldwide and Experience the{" "}
            <Link to="/contact">Transformative Power of AI</Link>
          </p>
        </div>
        {/* Section Footer Text End */}
      </div>
    </div>
  );
};

export default About;
