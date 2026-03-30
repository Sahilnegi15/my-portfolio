import { useRef } from "react";
import "../styles/Projects.css";

function Projects() {

  const sliderRef = useRef();

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -320,
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 320,
      behavior: "smooth"
    });
  };

  const projects = [
    {
      title: "Virtual Assistant",
      desc: " Built an AI self-assistant using LangChain with Agentic RAG, enabling intelligent querying of documents (PDF, DOCX,TXT)",
      github: "#",
      demo: "#",
      image:"VA.jpg"
    },
    {
      title: "Stock Market Analysis & Prediction",
      desc: "• Built a stock prediction model using Time Series Analysis ans Models like (LSTM, ARIMA), trained on 5+ years of market ata.",
      github: "#",
      demo: "#", 
      image:"s.jpg"
    },
    {
     title: "Auto Scale Engine ",
      desc: " Designed and implemented a hash-based file deduplication system to eliminate redundant storage using SHA-256 fingerprinting..",
      github: "https://github.com/Sahilnegi15/auto-scale_engine",
      demo: "#",
      image:"e.jpg"
    },
    {
      title: "Public Eye",
      desc: "Modern React portfolio with dark/light theme.",
      github: "https://github.com/Sahilnegi15/PublicEye",
      demo: "#",
       image:"p.jpg"
    },
    {
      title: "Multiple Disease Diagnosis",
      desc: "Modern React portfolio with dark/light theme.",
      github: "https://github.com/Sahilnegi15/Multiple-disease-diagnosis",
      demo: "#",
      image:"m.jpg"
    },
    {
      title: "Chat Application",
      desc: "Modern React portfolio with dark/light theme.",
      github: "https://github.com/Sahilnegi15/Chat-Application",
      demo: "#",
      image:"c.jpg"
    }
  ];

  return (
    <section className="projects" id="projects">

      <h2 className="project-title">Projects</h2>

      <div className="slider-wrapper">

        <button className="slide-btn left" onClick={scrollLeft}>
          ❮
        </button>

        <div className="project-slider" ref={sliderRef}>

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <h3>{project.title}</h3>
              <img src={project.image} alt="description" className="project-image"/>

              <p>{project.desc}</p>

              <div className="project-buttons">

                <a href={project.github} target="_blank">
                  GitHub
                </a>

                

              </div>

            </div>
          ))}

        </div>

        <button className="slide-btn right" onClick={scrollRight}>
          ❯
        </button>

      </div>

    </section>
  );
}

export default Projects;