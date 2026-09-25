import React, { useState, useEffect } from 'react';
import './scrollup.css';

const Scrollup = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`scrollup ${showScroll ? "show-scroll" : ""}`}
      aria-label="Scroll to top"
    >
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </button>
  );
};

export default Scrollup;