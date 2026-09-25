import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        showMenu(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (Toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [Toggle]);

  const handleNavClick = (section) => {
    setActiveNav(section);
    showMenu(false);
  };

  return (
    <>
      {/* Background Overlay - Tapping outside closes menu */}
      <div
        className={`nav__overlay ${Toggle ? "show-overlay" : ""}`}
        onClick={() => showMenu(false)}
        aria-label="Close menu backdrop"
      ></div>

      <header className="header">
        <nav className="nav container">
          <div className="icons_logo">
            <i className="bx bx-terminal"></i>
            <a href="#home" className="nav__logo" onClick={() => handleNavClick('#home')}>
              Hardik
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="nav__list nav__list-desktop">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => handleNavClick('#home')}
                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
              >
                Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => handleNavClick('#about')}
                className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}
              >
                About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#experience"
                onClick={() => handleNavClick('#experience')}
                className={activeNav === "#experience" ? "nav__link active-link" : "nav__link"}
              >
                Experience
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => handleNavClick('#skills')}
                className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}
              >
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#work"
                onClick={() => handleNavClick('#work')}
                className={activeNav === "#work" ? "nav__link active-link" : "nav__link"}
              >
                Work
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => handleNavClick('#contact')}
                className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="profile_logo">
            <a
              href="mailto:hardiksingh0808@gmail.com"
              className="header__hire-btn"
            >
              <i className="bx bx-envelope"></i>
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Open/Close Toggle Button */}
          <button
            type="button"
            className={`nav__toggle ${Toggle ? "nav__toggle-active" : ""}`}
            onClick={() => showMenu(!Toggle)}
            aria-label={Toggle ? "Close menu" : "Open menu"}
          >
            <i className={Toggle ? "uil uil-times" : "uil uil-apps"}></i>
          </button>
        </nav>

        {/* Mobile Navigation Modal Card */}
        <div className={`nav__menu ${Toggle ? "show-menu" : ""}`}>
          {/* <div className="nav__menu-header">
            <div className="nav__menu-title-box">
              <i className="bx bx-compass nav__menu-title-icon"></i>
              <span className="nav__menu-title">Navigation</span>
            </div> */}

          {/* Top Close Button with Prominent Touch Area */}
          {/* <button
              type="button"
              className="nav__close-btn"
              onClick={() => showMenu(false)}
              aria-label="Close navigation menu"
            >
              <i className="uil uil-times"></i>
            </button>
          </div> */}

          <ul className="nav__list nav__list-mobile">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => handleNavClick('#home')}
                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-estate nav__icon"></i>
                <span>Home</span>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => handleNavClick('#about')}
                className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-user nav__icon"></i>
                <span>About</span>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#experience"
                onClick={() => handleNavClick('#experience')}
                className={activeNav === "#experience" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>
                <span>Experience</span>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => handleNavClick('#skills')}
                className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-file-alt nav__icon"></i>
                <span>Skills</span>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#work"
                onClick={() => handleNavClick('#work')}
                className={activeNav === "#work" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-scenery nav__icon"></i>
                <span>Work</span>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => handleNavClick('#contact')}
                className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-message nav__icon"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>

          <div className="nav__menu-footer">
            <a
              href="mailto:hardiksingh0808@gmail.com"
              className="nav__menu-cta"
              onClick={() => showMenu(false)}
            >
              <i className="bx bx-envelope"></i>
              <span>hardiksingh0808@gmail.com</span>
            </a>
          </div>

          {/* Bottom Prominent Close Button */}
          {/* <button 
            type="button" 
            className="nav__bottom-close-btn"
            onClick={() => showMenu(false)}
          >
            <i className="uil uil-times"></i>
            <span>Close Menu</span>
          </button> */}
        </div>
      </header>
    </>
  );
};

export default Header;