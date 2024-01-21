// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './img/logo-dark.svg';

const Navbar = ({onOurService, onWhyUs , onTestimonial, onFaq}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="navbar navbar-expand-lg py-3 sticky-top navbar-light" style={{ background: "#F1F3FF" }}>
      <div className="container">
        <Link to="/" className="navbar-brand" onClick={scrollToTop}>
          <img className="logo" src={Logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/#ourServices" className="nav-link" onClick={onOurService}>
                Our Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#whyUs" className="nav-link" onClick={onWhyUs}>
                Why Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#testimonial" className="nav-link" onClick={onTestimonial}>
                Testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#faq" className="nav-link" onClick={onFaq}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
