import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
function Hero() {

  const resumeUrl = "/resume.pdf";

  return (
    <section className="hero">

      <h2>Hello, I'm</h2>

      <h1>Sahil Negi</h1>
      

      <h3>Software Developer</h3>

      <div className="location-tag">
      <h5><HiLocationMarker className="location-icon" />  Dehradun,Uttrakhand</h5>
      
    </div>
      
      
      <div className="buttons">

        {/* View Resume */}
       <a href="./Resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="btn1">View Resume</button>
        </a>

        {/* Download Resume */}
        <a href="./Resume.pdf" download="Sahil_Resume.pdf">
          <button className="btn2">
            Download Resume
          </button>
        </a>

      </div>

      <div className="hero-icons">
        <a href="https://github.com">
          <FaGithub />
        </a>

        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </div>

      <div>
         <button className="hire-btn">
      <span className="green-dot"></span>
      Ready to Collaborate
    </button>
      </div>

    </section>
  );
}

export default Hero;