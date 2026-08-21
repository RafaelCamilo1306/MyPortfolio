"use client";

import { projects } from "../projects";
import React from "react";
import Image from "next/image";
import styles from "./projectsCards.module.css";

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
              <div className={styles.imageWrapper}>
                  <Image
                    src={project.img}
                    alt={project.title}
                    className={styles.cardImage}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
            </div>
          </div>
          <hr className="featurette-divider" />
        </React.Fragment>
      ))}
    </section>
  );
}
