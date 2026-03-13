import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TechSlider from "./components/TechSlider";
import "./index.css";

function App() {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={theme}>

      <Navbar toggleTheme={toggleTheme} />

      <Hero />
      <div className="section-divider"></div>
      <About />
      <TechSlider/>
      <Skills />
      <Projects />
      <Contact />
      <Footer/>

    </div>
  );
}

export default App;