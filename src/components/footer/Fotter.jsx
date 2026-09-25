import React from 'react';
import './fotter.css';

const Fotter = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__top">
          <h2 className="footer__title">Hardik Singh</h2>
          <p className="footer__subtitle">PHP Developer • WordPress & WooCommerce Specialist • Front-end Developer</p>
        </div>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#experience" className="footer__link">Experience</a>
          </li>
          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>
          <li>
            <a href="#work" className="footer__link">Projects</a>
          </li>
          <li>
            <a href="#contact" className="footer__link">Contact</a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/hardiksingh0808/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="uil uil-linkedin"></i>
          </a>

          <a
            href="https://github.com/haa464"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="uil uil-github-alt"></i>
          </a>

          <a
            href="mailto:hardiksingh0808@gmail.com"
            className="footer__social-link"
            aria-label="Email"
          >
            <i className="uil uil-envelope"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; {new Date().getFullYear()} Hardik Singh. Built with passion & modern web technologies.
        </span>
      </div>
    </footer>
  );
};

export default Fotter;