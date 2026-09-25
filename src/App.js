import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Fotter from './components/footer/Fotter';
import Scrollup from './components/scrollup/Scrollup';

const App = () => {
  useEffect(() => {
    // Smooth Scroll Reveal Animation using IntersectionObserver
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    };

    const observerOptions = {
      root: null,
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px',
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const revealElements = document.querySelectorAll(
      '.section, .block, .skill__card, .work__card, .qual-card, .contact__card'
    );

    revealElements.forEach((el) => {
      el.classList.add('reveal-element');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>

      <Fotter />
      <Scrollup />
    </>
  );
};

export default App;
