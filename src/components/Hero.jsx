import { FaGithub, FaLinkedin } from "react-icons/fa";
function Hero() {

  const resumeUrl = "/resume.pdf";

  return (
    <section className="hero">

      <h2>Hello, I'm</h2>

      <h1>Sahil Negi</h1>

      <h3>Software Developer</h3>

      <div className="buttons">

        {/* View Resume */}
       <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="btn1">View Resume</button>
        </a>

        {/* Download Resume */}
        <a href={resumeUrl} download="Sahil_Resume.pdf">
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

    </section>
  );
}

export default Hero;