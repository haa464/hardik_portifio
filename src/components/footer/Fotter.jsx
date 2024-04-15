import React from 'react'
import './fotter.css'

const Fotter = () => {
  return (
    <>
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Hardik</h1>
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
                    <a href="#work" className="footer__link">Work</a>
                </li>

            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/hardiksingh0808/" className="home__social-icon" target="_blank" rel="noopener noreferrer"> <i className="uil uil-linkedin"></i> </a>
                <a href="https://github.com/haa464" className="home__social-icon" target="_blank" rel="noopener noreferrer"> <i className="uil uil-github-alt"></i> </a>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Fotter