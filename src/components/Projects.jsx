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
      desc: "An Agentic Graph RAG system integrating FAISS and Neo4j to enable context-aware and relationship-driven responses beyond traditional RAG limitations.",
      demo: "#",
      image:"VA.jpg"
    },
    {
      title: "Stock Market Analysis & Prediction",
      desc: "Performed stock market analysis using fundamental and technical indicators to evaluate company performance, identify trends, and support data-driven investment decisions.",
      github: "#",
      demo: "#", 
      image:"s.jpg"
    },
    {
     title: "Auto Scale Engine ",
      desc: " Implemented an intelligent auto-scaling engine that reduces system latency and infrastructure cost by dynamically allocating resources based on demand patterns.",
      github: "https://github.com/Sahilnegi15/auto-scale_engine",
      demo: "#",
      image:"e.jpg"
    },
    {
      title: "Public Eye",
      desc: "a web platform for public issue reporting with an integrated interactive map, enabling users to report, track, and visualize issues in real-time based on location.",
      github: "https://github.com/Sahilnegi15/PublicEye",
      demo: "#",
       image:"p.jpg"
    },
    {
      title: "Multiple Disease Diagnosis",
      desc: "Ma machine learning-based system for multiple disease diagnosis, enabling prediction of various health conditions using patient data and medical indicators.",
      github: "https://github.com/Sahilnegi15/Multiple-disease-diagnosis",
      demo: "#",
      image:"c.jpg"
    },
    {
      title: "Chat Application",
      desc: "a client–server chat application enabling real-time messaging between users using socket programming.",
      github: "https://github.com/Sahilnegi15/Chat-Application",
      demo: "#",
      image:"m.jpg"
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