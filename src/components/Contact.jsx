import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import "../styles/Contact.css";
import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-wrapper">

        {/* LEFT SIDE FORM */}
        <div className="contact-left">

          <h2 className="subtitle">Get in Touch</h2>

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

        {/* RIGHT SIDE CONTACT INFO */}
        <div className="contact-right">

          <h2>Contact Me</h2>

          <div className="contact-container">

            <div className="contact-card">
              <FaEnvelope className="icon" />
              <span>Email</span>
            </div>

            <div className="contact-card">
              <FaLinkedin className="icon" />
              <span>LinkedIn</span>
            </div>

            <div className="contact-card">
              <FaGithub className="icon" />
              <span>GitHub</span>
            </div>

            <div className="contact-card">
              <FaWhatsapp className="icon" />
              <span>WhatsApp</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;