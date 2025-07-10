import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMouseEnter = (menuName) => setOpenMenu(menuName);
  const handleMouseLeave = () => setOpenMenu(null);

  const location = useLocation();
  const isHome = location.pathname === "/";


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
                  {/* Home Menu
                  // <li
                  //   className="nav-item submenu"
                  //   onMouseEnter={() => handleMouseEnter("home")}
                  //   onMouseLeave={handleMouseLeave}
                  // >
                  //   <Link className="nav-link" to="/">Home</Link>
                  //   {openMenu === "home" && (
                  //     <ul className="dropdown-menu show">
                  //       <li className="nav-item"><Link className="nav-link" to="/">Home - Main</Link></li>
                  //       <li className="nav-item"><Link className="nav-link" to="/index-image">Home - Image</Link></li>
                  //       <li className="nav-item"><Link className="nav-link" to="/index-video">Home - Video</Link></li>
                  //     </ul>
                  //   )}
                  // </li> */}
                  {/* <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li> */}
                  <Link
                    className={`nav-link ${isHome ? 'home-nav-text' : ''} ${location.pathname === '/' ? 'home-nav-text active-nav' : ''}`}
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    className={`nav-link ${isHome ? 'home-nav-text' : ''} ${location.pathname === '/about' ? 'home-nav-text active-nav' : ''}`}
                    to="/about"
                  >
                    About Us
                  </Link>
                  <Link
                    className={`nav-link ${isHome ? 'home-nav-text' : ''} ${location.pathname === '/services' ? 'home-nav-text active-nav' : ''}`}
                    to="/services"
                  >
                    Services
                  </Link>
                  <Link
                    className={`nav-link ${isHome ? 'home-nav-text' : ''} ${location.pathname === '/blog' ? 'home-nav-text active-nav' : ''}`}
                    to="/blog"
                  >
                    Blog
                  </Link>
                  <Link
                    className={`nav-link ${isHome ? 'home-nav-text' : ''} ${location.pathname === '/contact' ? 'home-nav-text active-nav' : ''}`}
                    to="/contact"
                  >
                    Contact Us
                  </Link>
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
