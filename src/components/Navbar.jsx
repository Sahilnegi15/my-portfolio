import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <div className="navbar-wrapper">

      <nav className="navbar">

        

        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li><a href="#about">About</a></li>

          <li><a href="#skills">Skills</a></li>

          <li><a href="#projects">Projects</a></li>

          <li><a href="#contact">Contact</a></li>

        </ul>

      </nav>

    </div>
  );
}

export default Navbar;