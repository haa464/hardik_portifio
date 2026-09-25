import React, { useState } from 'react';
import "./skills.css";

const skillCategories = [
  { id: 'all', label: 'All Skills' },
  { id: 'backend', label: 'Backend & CMS' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'tools', label: 'Tools & APIs' }
];

const skillsList = [
  // Backend & CMS
  { name: 'PHP', category: 'backend', icon: 'bx bxl-php', level: 'Advanced' },
  { name: 'WordPress', category: 'backend', icon: 'bx bxl-wordpress', level: 'Expert' },
  { name: 'WooCommerce', category: 'backend', icon: 'bx bx-shopping-bag', level: 'Expert' },
  { name: 'MySQL', category: 'backend', icon: 'bx bx-data', level: 'Intermediate' },
  { name: 'Custom Plugin Development', category: 'backend', icon: 'bx bx-code-alt', level: 'Expert' },
  { name: 'ACF (Advanced Custom Fields)', category: 'backend', icon: 'bx bx-layer', level: 'Advanced' },
  { name: 'REST API', category: 'backend', icon: 'bx bx-transfer-alt', level: 'Advanced' },

  // Frontend
  { name: 'ReactJS', category: 'frontend', icon: 'bx bxl-react', level: 'Intermediate' },
  { name: 'JavaScript (ES6+)', category: 'frontend', icon: 'bx bxl-javascript', level: 'Advanced' },
  { name: 'HTML5', category: 'frontend', icon: 'bx bxl-html5', level: 'Expert' },
  { name: 'CSS3', category: 'frontend', icon: 'bx bxl-css3', level: 'Expert' },
  { name: 'Bootstrap', category: 'frontend', icon: 'bx bxl-bootstrap', level: 'Advanced' },
  { name: 'Elementor', category: 'frontend', icon: 'bx bx-layout', level: 'Expert' },
  { name: 'Oxygen Page Builder', category: 'frontend', icon: 'bx bx-cube-alt', level: 'Advanced' },

  // Tools & APIs
  { name: 'GIT & GitHub', category: 'tools', icon: 'bx bxl-git', level: 'Advanced' },
  { name: 'Action Scheduler', category: 'tools', icon: 'bx bx-time-five', level: 'Advanced' },
  { name: 'Twilio Integration', category: 'tools', icon: 'bx bx-message-rounded-dots', level: 'Advanced' },
  { name: 'Payment Gateways', category: 'tools', icon: 'bx bx-credit-card', level: 'Advanced' },
  { name: 'SEO Optimization', category: 'tools', icon: 'bx bx-line-chart', level: 'Advanced' },
  { name: 'Adobe Photoshop', category: 'tools', icon: 'bx bx-image-alt', level: 'Intermediate' },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsList
    : skillsList.filter(s => s.category === activeCategory);

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section__title">Technical Skills</h2>
        <span className="section__subtitle">Core competencies & tech stack from industry experience</span>

        {/* Category Filters */}
        <div className="skills__filters">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`skills__filter-btn ${activeCategory === cat.id ? 'active-skill-filter' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills__container grid">
          {filteredSkills.map((skill, index) => (
            <div
              className="skill__card"
              key={skill.name}
              style={{ animationDelay: `${index * 0.04}s` }}
            >
              <div className="skill__icon-wrapper">
                <i className={`${skill.icon} skill__icon`}></i>
              </div>
              <div className="skill__info">
                <h3 className="skill__name">{skill.name}</h3>
                <span className="skill__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;