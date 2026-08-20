"use client";

import {projects} from "../projects";
import React from "react";

export default function Projects() {
  return (
    <section id="projetos" className="w-75 " >
    {/* //   <div className="container">
    //     <h2 className="section-title text-white mb-5">Meus Projetos</h2>

    //     <div className="row g-4">
    //       {projects.map((project) => (
    //         <div className="col-md-6 col-lg-4" key={project.id}>
    //           <div className="card project-card h-100 border-0">
    //             <svg
    //               aria-label={`Thumbnail: ${project.title}`}
    //               className="card-img-top "
    //               height="180"
    //               preserveAspectRatio="xMidYMid slice"
    //               role="img"
    //               width="100%"
    //               xmlns=""
    //             >
    //               <title>{project.title}</title>
    //               <rect width="100%" height="100%"  />
    //               <text
    //                 x="20"
    //                 y="100"
    //                 fill="var(--accent)"
    //                 fontFamily="var(--font-mono), monospace"
    //                 fontSize="14"
    //                 letterSpacing="0.05em"
    //               >
    //                 {project.title.toUpperCase()}
    //               </text>
    //             </svg>

    //             <div className="card-body d-flex flex-column">
    //               <div className="project-index">
    //                 <span>PROJ.{project.id}</span>
    //                 <span>{"//"}</span>
    //               </div>

    //               <p className="card-text flex-grow-1">{project.description}</p>

    //               <div className="d-flex flex-wrap gap-2 mb-3">
    //                 {project.tech.map((t) => (
    //                   <span className="tech-tag" key={t}>
    //                     {t}
    //                   </span>
    //                 ))}
    //               </div>

    //               <div className="d-flex justify-content-between align-items-center pt-3 project-card-footer">
    //                 <span className="badge-role">{project.role}</span>
    //                 <div className="project-links mb-0">
    //                   <a
    //                     href={project.repo}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                     aria-label="Repositório no GitHub"
    //                   >
    //                     <i className="bi bi-github" />
    //                   </a>
    //                   <a
    //                     href={project.demo}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                     aria-label="Ver demo"
    //                   >
    //                     <i className="bi bi-box-arrow-up-right" />
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div> */}

{projects.map((project, index) => (
  <React.Fragment key={project.id}>
    <div className="row featurette">
      <div className={`col-md-7 ${index % 2 !== 0 ? "order-md-2" : ""}`}>
        <h2 className="featurette-heading fw-normal lh-1">
          {project.title}
          <span className="text-text-body-tertiary"> {project.subtitle}</span>
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
          <rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect>
          <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
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