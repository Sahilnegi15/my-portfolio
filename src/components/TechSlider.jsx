import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaDatabase,
  FaJs
} from "react-icons/fa";

import "../styles/TechSlider.css";

function TechSlider() {
  return (
    <section className="tech">

      <div className="slider">

        <div className="slide-track">

          <FaReact className="tech-icon" />
          <FaNodeJs className="tech-icon" />
          <FaDocker className="tech-icon" />
          <FaGitAlt className="tech-icon" />
          <FaLinux className="tech-icon" />
          <FaDatabase className="tech-icon" />
          <FaJs className="tech-icon" />

          {/* duplicate for smooth loop */}

          <FaReact className="tech-icon" />
          <FaNodeJs className="tech-icon" />
          <FaDocker className="tech-icon" />
          <FaGitAlt className="tech-icon" />
          <FaLinux className="tech-icon" />
          <FaDatabase className="tech-icon" />
          <FaJs className="tech-icon" />
           <FaReact className="tech-icon" />
          <FaNodeJs className="tech-icon" />
          <FaDocker className="tech-icon" />
          <FaGitAlt className="tech-icon" />
          <FaLinux className="tech-icon" />
          <FaDatabase className="tech-icon" />
          <FaJs className="tech-icon" />
           <FaReact className="tech-icon" />
          <FaNodeJs className="tech-icon" />
          <FaDocker className="tech-icon" />
          <FaGitAlt className="tech-icon" />
          <FaLinux className="tech-icon" />
          <FaDatabase className="tech-icon" />
          <FaJs className="tech-icon" />

        </div>

      </div>

    </section>
  );
}

export default TechSlider;