import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <div className="icons_logo">
          <i className="bx bx-terminal"></i>
          <a href="#home" className="nav__logo">Hardik.dev</a>
        </div>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => { setActiveNav('#home'); showMenu(false); }}
                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => { setActiveNav('#about'); showMenu(false); }}
                className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#experience"
                onClick={() => { setActiveNav('#experience'); showMenu(false); }}
                className={activeNav === "#experience" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>Experience
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => { setActiveNav('#skills'); showMenu(false); }}
                className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#work"
                onClick={() => { setActiveNav('#work'); showMenu(false); }}
                className={activeNav === "#work" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-scenery nav__icon"></i>Work
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => { setActiveNav('#contact'); showMenu(false); }}
                className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(false)}></i>
        </div>

        <div className="profile_logo">
          <a
            href="mailto:hardiksingh0808@gmail.com"
            className="header__hire-btn"
          >
            <i className="bx bx-envelope"></i>
            <span>Get in Touch</span>
          </a>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;