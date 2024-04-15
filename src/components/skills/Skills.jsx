import React from 'react';
import "./skills.css";

const Skills = () => {
  return (
    <>
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="box-skill">
            </div>
            <div className="skills__container container grid">
              <ul className='ul-skills'>
                <li>React</li>
                <li>Next.js</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind</li>
                <li>react-icons</li>
                <li>Framer-Motion</li>
                <li>Git</li>
                <li>PHP</li>
                <li>Firebase</li>
                <li>Wordpress</li>
                <li>E-commerce</li>
                <li>Elementor </li>
              </ul>
            </div>
        </section>
    </>
  )
}

export default Skills