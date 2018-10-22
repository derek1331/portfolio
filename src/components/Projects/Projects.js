import React from "react";
import "./Projects.css";
import Button from "../Button";
import Cardy from "../Card";
import project from "./project.json";
import ScrollToNext from "../ScrollToNext"

const Projects = () => (
  <div id="section-2" className="hero projects">
    <div className="subject container"> 
      <div className="row">
        <div className="col s4 offset-s4">
          <h1 className="center-align" style={{
            color: '#272727'
          }}> Projects</h1>
        </div>
      </div>
      <div className="row">
          {project.map(project => (
            <div className="col s4">
              <Cardy
                bg={project.image}
                id={project.id}
                key={project.id}
                title={project.title}
                description={project.description}
              />
            </div>
          ))}
        </div>
    </div>
    <ScrollToNext pageSelector="#section-3"/>
  </div>
);

export default Projects;
