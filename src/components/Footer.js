import React from "react";

const scrollingItems = [
  "AI Solutions",
  "Smart Automation",
  "Machine Learning",
  "Cloud Integration",
];

const quickLinks = [
  { label: "Home", url: "index.html" },
  { label: "About Us", url: "Aboutus.js" },
  { label: "Services", url: "services.html" },
];

const servicesLinks = [
  { label: "AI Development", url: "service-single" },
  { label: "Machine Learning", url: "service-single" },
  { label: "Predictive Analytics", url: "service-single" },
];

const supportLinks = [
  { label: "Help", url: "service-single" },
  { label: "Terms & Conditions", url: "service-single" },
  { label: "Privacy Policy", url: "service-single" },
];

const contactLinks = [
  // { label: "+(00) 123 456 874", url: "tel:+123456874" },
  { label: "contact@lexa.lawyer", url: "mailto:contact@lexa.lawyer" },
  { label: "rabeet.ali@lexa.lawyer", url: "mailto:rabeet.ali@lexa.lawyer" },
  // { label: "123 Lorem Street Suite 5B, Ipsum UK" },
];

const socialIcons = [
  { icon: "fa-pinterest-p", url: "#" },
  { icon: "fa-x-twitter", url: "#" },
  { icon: "fa-facebook-f", url: "#" },
  { icon: "fa-instagram", url: "#" },
];

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* Scrolling Ticker */}
      <div className="footer-scrolling-ticker">
        <div className="footer-scrolling-box">
          {[...Array(2)].map((_, i) => (
            <div className="scrolling-content" key={i}>
              {scrollingItems.map((item, idx) => (
                <span key={idx}>
                  <img src="images/asterisk-icon.svg" alt="" /> {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Main Content */}
      <div className="footer-box bg-section">
        <div className="container">
          <div className="row">
            {/* Logo */}
            <div className="col-lg-3">
              <div className="about-footer">
                <div className="footer-logo">
                  <img src="images/footer-logo.svg" alt="Footer Logo" />
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="col-lg-2 col-md-6">
              <div className="footer-links">
                <h3>quick link</h3>
                <ul>
                  {quickLinks.map((link, i) => (
                    <li key={i}>
                      <a href={link.url}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer-links">
                <h3>Services</h3>
                <ul>
                  {servicesLinks.map((link, i) => (
                    <li key={i}>
                      <a href={link.url}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer-links">
                <h3>Support</h3>
                <ul>
                  {supportLinks.map((link, i) => (
                    <li key={i}>
                      <a href={link.url}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-links">
                <h3>Get in Touch</h3>
                <ul>
                  {contactLinks.map((item, i) => (
                    <li key={i}>
                      {item.url ? <a href={item.url}>{item.label}</a> : item.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="footer-copyright-text">
                <p>Copyright © 2025 All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-social-links">
                <ul>
                  {socialIcons.map((item, i) => (
                    <li key={i}>
                      <a href={item.url}>
                        <i className={`fa-brands ${item.icon}`}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
