import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <div className="container projects" id="projects">
      <h1 className="text-center mb-4">PROJECTS</h1>
      <div className="row d-flex justify-content-center align-items-center">
        {project.map((data) => (
          <div
            key={data.id}
            className="col-sm-6 col-md-4 col-lg-3 my-4"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <div className="card project-card bg-dark text-light">
              <div className="card-img-container p-3">
                <img
                  src={data.imageSrc}
                  className="card-img-top"
                  alt={data.title}
                  style={{ width: "270px", height: "200px" }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <a href={data.demo} className="btn btn-primary mx-2">
                  Demo
                </a>
                <a href={data.source} className="btn btn-warning mx-2">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
