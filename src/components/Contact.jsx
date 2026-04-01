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

          <form className="contact-form"  onSubmit={(e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    window.location.href = `mailto:sahilnegi5634@gmail.com?subject=Message from ${name}&body=Email: ${email}%0D%0A${message}`;
  }}>

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
              <a href="mailto:sahilnegi5634@gmail.com" className="contact-card">
  <FaEnvelope className="icon" />
  <span >Email</span>
</a>

            </div>

            <div className="contact-card">
            <a href ="www.linkedin.com/in/sahil-negi-b91959338" className="contact-card">
              <FaLinkedin className="icon" />
              <span>LinkedIn</span>
              </a>
            </div>

            <div className="contact-card">
            <a href="https://github.com/Sahilnegi15" className="contact-card">
              <FaGithub className="icon" />
              <span>GitHub</span>
              </a>
            </div>

            <div className="contact-card">
            <a 
  href="https://wa.me/8979583223" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="contact-card"
>
              <FaWhatsapp className="icon" />
              <span>WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;