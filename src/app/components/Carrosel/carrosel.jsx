"use client";

import React from "react";
import { projects } from "../projects";
import styles from "./carrosel.module.css";

export default function Carrosel() {
  return (

    <div id="myCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
        </div>
        <div className="carousel-inner">
            {projects.map((project, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''} ${styles.carrosel_item}`} key={project.id}>
            <svg aria-hidden="true" className="bd-placeholder-img" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
            </svg>
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>{project.title}</h1>
                <p className="opacity-75">
                  {project.description}
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href={project.repo} target="_blank" rel="noopener noreferrer">
                    Ver no GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>

        ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

  )};