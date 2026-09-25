import React, { useState } from 'react';
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', project: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.project) return;

    setLoading(true);
    setError(false);
    setSubmitted(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/hardiksingh0808@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Message: formData.project,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
          _template: "table",
          _captcha: "false"
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', project: '' });
        setTimeout(() => setSubmitted(false), 7000);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Email send error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section__title">Get in Touch</h2>
        <span className="section__subtitle">Have a project in mind or looking to collaborate? Reach out anytime!</span>

        <div className="contact__container container grid">
          <div className="contact__content">
            <h3 className="contact__title">Direct Channels</h3>

            <div className="contact__info">
              {/* Email Card */}
              <div className="contact__card">
                <div className="contact__icon-circle">
                  <i className="bx bx-envelope contact__card-icon"></i>
                </div>
                <h4 className="contact__card-title">Email</h4>
                <span className="contact__card-data">hardiksingh0808@gmail.com</span>
                <a href="mailto:hardiksingh0808@gmail.com" className="contact__button">
                  Send an Email <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>

              {/* WhatsApp Card */}
              <div className="contact__card">
                <div className="contact__icon-circle">
                  <i className="bx bxl-whatsapp contact__card-icon"></i>
                </div>
                <h4 className="contact__card-title">WhatsApp</h4>
                <span className="contact__card-data">+91 9372563903</span>
                <a
                  href="https://api.whatsapp.com/send?phone=919372563903&text=Hi%20Hardik,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact__button"
                >
                  Chat on WhatsApp <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>

              {/* LinkedIn Card */}
              <div className="contact__card">
                <div className="contact__icon-circle">
                  <i className="bx bxl-linkedin contact__card-icon"></i>
                </div>
                <h4 className="contact__card-title">LinkedIn</h4>
                <span className="contact__card-data">hardiksingh0808</span>
                <a
                  href="https://www.linkedin.com/in/hardiksingh0808/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact__button"
                >
                  Connect on LinkedIn <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact__content input_1">
            <h3 className="contact__title">Send a Message</h3>

            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-div">
                <label className="contact__form-tag">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="contact__form-input"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="contact__form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag">Project Scope or Message</label>
                <textarea
                  name="project"
                  cols="30"
                  rows="6"
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="contact__form-input"
                  placeholder="Tell me about your project, timeline, or requirements..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="button button-dark button--flex contact__submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span>Sending...</span>
                    <i className="bx bx-loader-alt bx-spin button__icon" style={{ fontSize: '1.2rem' }}></i>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg
                      className="button__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                        fill="#fff"
                      ></path>
                      <path
                        d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </>
                )}
              </button>

              {submitted && (
                <div className="contact__success-msg">
                  <i className="bx bx-check-circle"></i> Thank you! Your message has been sent directly to Hardik's inbox.
                </div>
              )}

              {error && (
                <div className="contact__error-msg">
                  <i className="bx bx-error-circle"></i> Could not send message. Please contact directly via email at <a href="mailto:hardiksingh0808@gmail.com" style={{ textDecoration: 'underline', color: 'inherit', marginLeft: '4px' }}>hardiksingh0808@gmail.com</a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;