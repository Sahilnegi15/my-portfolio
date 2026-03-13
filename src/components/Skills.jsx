import {
FaReact,
FaNodeJs,
FaDocker,
FaGitAlt,
FaLinux,
FaDatabase
} from "react-icons/fa";

import "../styles/Skills.css";

function Skills() {

return (

<section className="skills" id="skills">

<h2 className="skills-title">Skills</h2>

<div className="skills-grid">

<div className="skill-card">
<h3>Languages</h3>
<ul>
<li>C</li>
<li>C++</li>
<li>Go</li>
<li>JavaScript</li>
</ul>
</div>

<div className="skill-card">
<h3>Frameworks</h3>
<ul>
<li><FaReact /> React</li>
<li><FaNodeJs /> Node.js</li>
<li>Express</li>
</ul>
</div>

<div className="skill-card">
<h3>Tools</h3>
<ul>
<li><FaDocker /> Docker</li>
<li><FaGitAlt /> Git</li>
<li><FaLinux /> Linux</li>
</ul>
</div>

<div className="skill-card">
<h3>Databases</h3>
<ul>
<li><FaDatabase /> MySQL</li>
<li><FaDatabase /> MongoDB</li>
</ul>
</div>

</div>

</section>

);

}

export default Skills;