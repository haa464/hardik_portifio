import React, { useState } from 'react'
import './header.css'

const Header = () => {
    const [Toggle, showMenu] = useState(false);

    const [activeNav, setActiveNav] = useState("#home");
  return (
    <>
    <header className="header">
        <nav className="nav nav container">
            <div className="icons_logo">
                <i className="bx bx-user"></i>
                <a href='#home' className='nav__logo'>Hardik</a>
            </div>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav ==="#home" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-estate nav__icon"></i>About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav ==="#about" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-user nav__icon"></i>Experience
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav ==="#skills" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-file-alt nav__icon"></i>Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#work" onClick={() => setActiveNav('#skills')} className={activeNav ==="#skills" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-briefcase nav__icon"></i> Work
                        </a>
                    </li>

                    
                </ul>

                <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>

            <div className="profile_logo">
                <i className="bx bx-user"></i>
                <a href="mailto:hardiksingh080@gmail.com" onClick={() => setActiveNav('#contact')} className={activeNav ==="#contact" ? "nav__link active-link" : "nav__link"}>Contact</a>
            </div>

            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header