import React from "react";
import "./Projects.css";
import Cardy from "../Card";
import project from "./project.json";
import {ScrollToNext} from "../ScrollToNext"
import ProjectModal from "../Modal"

const Projects = () => (
  <div id="section-2" className="hero projects">
    <div className="subject container"> 
      <div className="row">
        <div className="col m6 offset-m3 s12 header-wrapper center">
          <h1 className="center-align page-header-project"> Projects</h1>
        </div>
      </div>
      <div className="row main-text">
          {project.map(project => (
            
              <Cardy
                id={project.id}
                key={project.id}
                title={project.title}
              ><ProjectModal
              title={project.title}
              img={project.image}
              description={project.description}
              href={project.demo}
              tech={project.tech}
              code={project.code}
              
              
              />
              </Cardy>
            
          ))}
        </div>
    </div>
    <ScrollToNext pageSelector="#section-3"/>
  </div>
);

export default Projects;
