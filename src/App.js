import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Fotter from './components/footer/Fotter';
import Scrollup from './components/scrollup/Scrollup';
import Work from './components/work/Work';


const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Work />
      {/* <Contact /> */}
    </main>

    <Fotter />
    <Scrollup />
    </>
  )
}

export default App;
