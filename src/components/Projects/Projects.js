import React from "react";
import "./Projects.css";
import Button from "../Button";
import Wrapper from "../Wrapper";
import Card from "../Card";
import Scrollspy from "react-scrollspy";
import project from "./project.json";

const Projects = () => (
  <div id="section-2" className="hero flex projects">
    <Wrapper>
      <div className="subject flex">
        <Scrollspy
          items={["section-1", "section-2", "section-3"]}
          currentClassName="is-current"
          style={{ flexDirection: "row", display: "flex" }}
        >
          <Button text="About" href="#section-1" />
          <Button text="Projects" href="#section-2" />
          <Button text="Contact" href="#section-3" />
        </Scrollspy>

        <div className="hero-message">
          <span> Projects</span>
        </div>
        <div className="flex-project">
        {project.map(project => (
          <Card
            bg={"url(" + project.image +")"}
            id={project.id}
            key={project.id}
            title={project.title}
            description={project.description}
  

          />
        ))}

        </div>
      </div>
    </Wrapper>
  </div>
);

export default Projects;




