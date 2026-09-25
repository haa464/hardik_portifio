import React, { useState } from 'react';
import "./about.css";
import ExperienceImg from "../../assets/experice.svg";
import EducationImg from "../../assets/edution.svg";
import CertificateImg from "../../assets/Certificate..svg";

const experiences = [
  {
    id: 1,
    role: "PHP Developer",
    company: "PrintPanda India Pvt Ltd",
    type: "Full-Time",
    period: "June 2025 - Present",
    location: "Thane, Maharashtra, India",
    isCurrent: true,
    techStack: ["PHP", "WordPress", "WooCommerce", "Custom Plugins", "Action Scheduler", "REST API", "Template Customization"],
    bullets: [
      "Created a custom WooCommerce wishlist plugin system inspired by Spotify playlists, allowing users to create, rename, and delete product groups and seamlessly add items to them.",
      "Customised WooCommerce templates, including shop pages, to support grouped product displays and enhance the overall shopping experience.",
      "Modified the WooCommerce review system to include a fully customised review section for improved user interaction and social proof.",
      "Engineered customised email templates in WooCommerce by modifying the header and footer architecture and registering new custom templates on the WooCommerce settings page.",
      "Built an Action Scheduler background workflow for deleting unreferenced customer-uploaded images and automated recovery emails to users to order products remaining in cart."
    ]
  },
  {
    id: 2,
    role: "PHP Developer",
    company: "InteleCorp Software (I) Pvt. Ltd",
    type: "Full-Time",
    period: "June 2024 - June 2025",
    location: "CBD Belapur, Navi Mumbai, India",
    isCurrent: false,
    techStack: ["PHP", "WordPress", "ASP.NET API", "Twilio API", "WooCommerce", "Custom Post Types (CPT)", "SEO", "Elementor", "Oxygen Builder"],
    bullets: [
      "Collaborated with the ASP.NET platform to integrate their API with WordPress sites specifically for product pages, enabling dynamic real-time display of product details across 2 production sites.",
      "Successfully developed a custom WordPress plugin for seamless Twilio integration, enabling automated SMS and WhatsApp messaging via REST API.",
      "Integrated secure payment gateways with WooCommerce, boosting customer checkout satisfaction and transaction reliability.",
      "Developed a custom e-commerce platform using WordPress + PHP, eliminating reliance on third-party plugins and improving website performance by 30%.",
      "Implemented advanced Custom Post Types (CPT) and custom template functions for dynamic, scalable, and maintainable site architectures.",
      "Integrated SEO best practices by collaborating closely with the SEO team, leading to a 15% increase in organic search traffic.",
      "Converted intricate Figma designs into pixel-perfect, highly responsive WordPress pages using Elementor & Oxygen Builder."
    ]
  },
  {
    id: 3,
    role: "Web Developer",
    company: "WMI Innovative Solutions Pvt Ltd",
    type: "Full-Time",
    period: "August 2022 - December 2023",
    location: "Vashi, Navi Mumbai, India",
    isCurrent: false,
    techStack: ["PHP", "MySQL", "WordPress", "JavaScript", "HTML5/CSS3", "Razorpay", "PayPal", "Speed Optimization"],
    bullets: [
      "Optimised website performance, reducing page load times by 80% through script minimisation, intelligent caching, and comprehensive asset optimisation.",
      "Built and maintained robust back-end logic in PHP, ensuring secure database interactions and efficient server-side processing.",
      "Developed custom landing pages and elevated UI responsiveness for 5+ clients, guaranteeing flawless cross-platform and mobile compatibility.",
      "Implemented security updates, vulnerability patches, and bug fixes, reducing error rates and improving site uptime by 25%.",
      "Integrated popular payment gateways for e-commerce clients, including Razorpay and PayPal, ensuring seamless checkout flows."
    ]
  },
  {
    id: 4,
    role: "Web Developer (Internship)",
    company: "Techsoyd Pvt Ltd",
    type: "Internship",
    period: "Dec 2021 - Mar 2022",
    location: "Nerul, Navi Mumbai, India",
    isCurrent: false,
    techStack: ["WordPress", "ThemeForest Themes", "Elementor", "WPBakery", "Adobe Photoshop", "Razorpay", "E-Commerce"],
    bullets: [
      "Customised commercial WordPress themes from ThemeForest, modifying templates, typography, and visual assets to match client branding.",
      "Utilised Adobe Photoshop to compress images and optimize web assets, markedly increasing overall website speed.",
      "Built and styled responsive website pages and modules using visual builders such as Elementor and WPBakery.",
      "Configured e-commerce websites by cataloging products, configuring shipping plugins, and integrating payment gateways like Razorpay.",
      "Developed proactive communication and requirement gathering skills, collaborating with clients to deliver tailored web solutions."
    ]
  }
];

const educationData = [
  {
    id: 1,
    title: "Bachelor of Science in Information Technology (B.Sc IT)",
    institution: "PILLAI COLLEGE OF ARTS, COMMERCE & SCIENCE",
    location: "Panvel, Navi Mumbai, Maharashtra",
    period: "July 2019 - February 2022",
    description: "Core coursework in Web Technologies, Database Management Systems, Software Engineering, Object-Oriented Programming, and Data Structures."
  }
];

const certificationData = [
  {
    id: 1,
    title: "HTML, CSS, and JavaScript for Web Developers",
    issuer: "Johns Hopkins University (Coursera)",
    period: "July 2020 - August 2020",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Architecture"]
  },
  {
    id: 2,
    title: "Crash Course on Python",
    issuer: "Google",
    period: "May 2020 - June 2020",
    skills: ["Python Programming", "Automation", "Data Structures", "Problem Solving"]
  }
];

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section className="about section" id="experience">
      <div className="container">
        <div className="block block-paddings">
          {/* Header with Title and Interactive Navigation Tabs */}
          <div className="block-header">
            <div className="block-header-top">
              <div className="block-icon-wrapper">
                <img 
                  src={activeTab === "experience" ? ExperienceImg : EducationImg} 
                  alt={activeTab === "experience" ? "Experience" : "Education"} 
                  className="tab-header-icon"
                />
              </div>
              <div className="wrapper max-width-600">
                <h2 className="h2 margin-bottom-12">
                  {activeTab === "experience" ? "Work Experience" : "Education & Certifications"}
                </h2>
                <p className="medium-m experience-intro">
                  {activeTab === "experience" 
                    ? "Proven track record as a PHP, WordPress & Front-end Developer, building custom plugins, REST API integrations, and scalable e-commerce systems." 
                    : "Academic background in Information Technology coupled with industry certifications from world-class institutions."}
                </p>
              </div>
            </div>

            {/* Tab Toggle Controls */}
            <div className="experience-tabs-wrapper">
              <button
                type="button"
                className={`exp-tab-btn ${activeTab === "experience" ? "exp-tab-active" : ""}`}
                onClick={() => setActiveTab("experience")}
              >
                <i className="uil uil-briefcase-alt exp-tab-icon"></i>
                <span>Work Experience</span>
                <span className="exp-tab-badge">{experiences.length}</span>
              </button>

              <button
                type="button"
                className={`exp-tab-btn ${activeTab === "education" ? "exp-tab-active" : ""}`}
                onClick={() => setActiveTab("education")}
              >
                <i className="uil uil-graduation-cap exp-tab-icon"></i>
                <span>Education & Certs</span>
                <span className="exp-tab-badge">{educationData.length + certificationData.length}</span>
              </button>
            </div>
          </div>

          {/* TAB 1: WORK EXPERIENCE */}
          {activeTab === "experience" && (
            <div className="experience-block-wrapper tab-content-animated">
              <div className="experience-line-wrapper">
                <div className="experience-line"></div>
              </div>

              <div className="experience-items-wrapper">
                {experiences.map((exp, index) => (
                  <div 
                    className="experience-item" 
                    key={exp.id}
                    style={{ animationDelay: `${index * 0.12}s` }}
                  >
                    <div className="experience-item-ellipse-wrapper">
                      <div className={`experience-item-ellipse ${exp.isCurrent ? 'ellipse-current' : ''}`}></div>
                      {exp.isCurrent && <div className="ellipse-pulse"></div>}
                    </div>

                    <div className="experience-item-content">
                      <div className="main-info-and-date">
                        <div className="main-info">
                          <div className="role-and-badge">
                            <h3 className="h3_title">{exp.role}</h3>
                            {exp.isCurrent && (
                              <span className="current-badge">
                                <span className="current-dot"></span> Present
                              </span>
                            )}
                          </div>
                          <div className="key-info">
                            <span className="medium-s company-name">{exp.company}</span>
                            <div className="circle-divider"></div>
                            <span className="medium-s emp-type">{exp.type}</span>
                          </div>
                        </div>

                        <div className="chips icon-chips date-chip">
                          <i className="uil uil-calendar-alt date-icon"></i>
                          <span className="medium-s text-color-grey-90">{exp.period}</span>
                        </div>
                      </div>

                      <div className="location">
                        <i className="uil uil-map-marker location-icon"></i>
                        <span className="medium-s">{exp.location}</span>
                      </div>

                      {/* Tech stack tags */}
                      <div className="exp-tech-tags">
                        {exp.techStack.map((tech, i) => (
                          <span className="exp-tech-pill" key={i}>{tech}</span>
                        ))}
                      </div>

                      <ul className="ul-block">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="medium-s">
                            <p>{bullet}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: EDUCATION & CERTIFICATIONS */}
          {activeTab === "education" && (
            <div className="qualification-wrapper tab-content-animated">
              {/* Education Sub-Section */}
              <div className="qual-section">
                <div className="qual-section-header">
                  <div className="qual-icon-box">
                    <img src={EducationImg} alt="Education" className="qual-icon" />
                  </div>
                  <h3 className="qual-title">Higher Education</h3>
                </div>

                <div className="qual-cards-grid">
                  {educationData.map((edu) => (
                    <div className="qual-card" key={edu.id}>
                      <div className="qual-card-header">
                        <h4 className="qual-card-title">{edu.title}</h4>
                        <span className="chips qual-date-chip">
                          <i className="uil uil-calendar-alt date-icon"></i>
                          {edu.period}
                        </span>
                      </div>
                      <div className="qual-institution">
                        <i className="uil uil-building institution-icon"></i>
                        <span>{edu.institution}</span>
                      </div>
                      <div className="location">
                        <i className="uil uil-map-marker location-icon"></i>
                        <span>{edu.location}</span>
                      </div>
                      <p className="qual-card-desc">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications Sub-Section */}
              <div className="qual-section margin-top-32">
                <div className="qual-section-header">
                  <div className="qual-icon-box">
                    <img src={CertificateImg} alt="Certifications" className="qual-icon" />
                  </div>
                  <h3 className="qual-title">Certifications & Training</h3>
                </div>

                <div className="qual-cards-grid">
                  {certificationData.map((cert) => (
                    <div className="qual-card" key={cert.id}>
                      <div className="qual-card-header">
                        <h4 className="qual-card-title">{cert.title}</h4>
                        <span className="chips qual-date-chip">
                          <i className="uil uil-calendar-alt date-icon"></i>
                          {cert.period}
                        </span>
                      </div>
                      <div className="qual-institution">
                        <i className="uil uil-award cert-icon"></i>
                        <span>Issued by <strong>{cert.issuer}</strong></span>
                      </div>
                      <div className="exp-tech-tags margin-top-12">
                        {cert.skills.map((skill, i) => (
                          <span className="exp-tech-pill" key={i}>{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default About;