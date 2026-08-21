"use client";

import { projects } from "../projects";
import React from "react";

export default function Projects() {
  return (
    <section id="projetos" className="w-75 ">
      {projects.map((project, index) => (
        <React.Fragment key={project.id}>
          <div className="row featurette">
            <div className={`col-md-7 ${index % 2 !== 0 ? "order-md-2" : ""}`}>
              <h2 className="featurette-heading fw-normal lh-1">
                {project.title}
                <span className="text-text-body-tertiary">
                  {" "}
                  {project.subtitle}
                </span>
              </h2>
              <p className="lead">{project.description}</p>
            </div>
            <div className={`col-md-5 ${index % 2 !== 0 ? "order-md-1" : ""}`}>
              <svg
                aria-label="Placeholder: 500x500"
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                height="500"
                preserveAspectRatio="xMidYMid slice"
                role="img"
                width="500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-bg)"
                ></rect>
                <text
                  x="50%"
                  y="50%"
                  fill="var(--bs-secondary-color)"
                  dy=".3em"
                >
                  500x500
                </text>
              </svg>
            </div>
          </div>
          <hr className="featurette-divider" />
        </React.Fragment>
      ))}
    </section>
  );
}
