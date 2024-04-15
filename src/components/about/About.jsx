import React from 'react';
import "./about.css";
import AboutImg from "../../assets/experice.svg"


const About = () => {
  return (
    <section className="about section" id="experience">
        <div className="container">
          <div class="block block-paddings">
            <div class="block-header">
              <div class="block-icon-wrapper"><img src={AboutImg} alt="Experience" /></div>
                <div class="wrapper max-width-400"><h2 class="h2 margin-bottom-12">Work Experience</h2>
                <p class="medium-m">Proven track record as a front-end and WordPress Developer, delivering impactful results across industries.</p>
              </div>
            </div>
            <div className="experience-block-wrapper">
              <div class="experience-line-wrapper">
                <div class="experience-line"></div>
              </div>
              <div className="experience-items-wrapper">
                <div className="experience-item">
                  <div className="experience-item-ellipse-wrapper">
                    <div className="experience-item-ellipse"></div>
                  </div>
                  <div className="experience-item-content">
                        <div className="main-info-and-date">
                          <div className="main-info">
                            <h3 class="h3_title">Web Developer</h3>
                            <div class="key-info"><div class="medium-s">WMI Innovative Solutions Pvt Ltd</div><div class="circle-divider"></div><div class="medium-s">Full-Time</div></div>
                          </div>
                          <div class="chips icon-chips"><div class="medium-s text-color-grey-90">August 2022 - December 2023</div></div>
                        </div>
                        <div class="location"><div class="medium-s">Vashi, Navi Mumbai, India</div></div>
                        <ul className='ul-block'>
                          <li className='medium-s max-width-400'>
                            <p>I optimized the UI load times and performance of a website by fixing bugs, which resulted in an 80% improvement. I maintained a WordPress website and implemented changes as per the client's requirements. I designed the website in WordPress using HTML, CSS, and JavaScript, ensuring compatibility for both mobile and desktop versions across all platforms.</p>
                          </li>
                          <li>
                            <p>Furthermore, I worked with a team of eight web developers and provided end-to-end solutions for five clients. I maintained the back-end of the website using PHP and updated the c-panel regularly to resolve errors on a daily basis. Additionally, I created a landing page for the client with a simple design and uploaded it to the c-panel.</p>
                          </li>
                          <li>
                            <p>I collaborated with the SEO team to implement changes to the website's content and ensured precise execution of their suggestions. My professionalism and expertise resulted in optimal website performance, meeting the client's expectations.</p>
                          </li>
                        </ul>
                  </div>
                </div>
                <div className="experience-item">
                  <div className="experience-item-ellipse-wrapper">
                    <div className="experience-item-ellipse"></div>
                  </div>
                  <div className="experience-item-content">
                        <div className="main-info-and-date">
                          <div className="main-info">
                            <h3 class="h3_title">Web Developer</h3>
                            <div class="key-info"><div class="medium-s">Techsoyd Pvt Ltd</div><div class="circle-divider"></div><div class="medium-s">Full-Time</div></div>
                          </div>
                          <div class="chips icon-chips"><div class="medium-s text-color-grey-90">March 2022- July 2022</div></div>
                        </div>
                        <div class="location"><div class="medium-s">Nerul, Navi Mumbai, India</div></div>
                        <ul className='ul-block'>
                          <li className='medium-s max-width-400'>
                            <p>I have experience working with WordPress themes from Themeforest, including uploading themes and making changes to content and images to meet clients' requirements. I have also utilized platforms like Adobe Photoshop to compress images and convert them to other formats, which improves website speed. Additionally, I have used plugins such as Elementor and WPBakery to make style adjustments to basic website themes. </p>
                          </li>
                          <li>
                            <p>In terms of e-commerce, I am currently learning about plugins that help build e-commerce websites. This includes adding products to websites and integrating payment gateways like Razorpay. Furthermore, I am exploring shipping plugins, which ensure prompt delivery of products to customers. </p>
                          </li>
                          <li>
                            <p>Furthermore, I am developing my communication skills by learning how to effectively engage with clients about their projects. Building a healthy relationship with clients aids me in acquiring a comprehensive understanding of their website needs.</p>
                          </li>
                        </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
    </section>
  )
}

export default About