import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMouseEnter = (menuName) => setOpenMenu(menuName);
  const handleMouseLeave = () => setOpenMenu(null);

  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="Logo" />
            </Link>

            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  {/* Home Menu */}
                  <li
                    className="nav-item submenu"
                    onMouseEnter={() => handleMouseEnter("home")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link className="nav-link" to="/">Home</Link>
                    {openMenu === "home" && (
                      <ul className="dropdown-menu show">
                        <li className="nav-item"><Link className="nav-link" to="/">Home - Main</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/index-image">Home - Image</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/index-video">Home - Video</Link></li>
                      </ul>
                    )}
                  </li>

                  <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>

                  {/* Pages Dropdown */}
                  <li
                    className="nav-item submenu"
                    onMouseEnter={() => handleMouseEnter("pages")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link className="nav-link" to="#">Pages</Link>
                    {openMenu === "pages" && (
                      <ul className="dropdown-menu show">
                        <li className="nav-item"><Link className="nav-link" to="/service-single">Service Details</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/blog-single">Blog Details</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/project-single">Projects details</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/team">Our Team</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/team-single">Team Details</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/testimonials">Testimonials</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/image-gallery">Image Gallery</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/video-gallery">Video Gallery</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/faqs">FAQs</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/404">404</Link></li>
                      </ul>
                    )}
                  </li>

                  <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
                </ul>
              </div>

              <div className="header-btn">
                <Link to="/contact" className="btn-default">Get Started</Link>
              </div>
            </div>

            <div className="navbar-toggle"></div>
          </div>
        </nav>
        <div className="responsive-menu"></div>
      </div>
    </header>
  );
};

export default Navbar;
