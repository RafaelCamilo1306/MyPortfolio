"use client";

import React from "react";
import { projects } from "../projects";
import styles from "./carrosel.module.css";
import Image from "next/image";

export default function Carrosel() {
  return (
    <div className="container" style={{ minHeight: "56rem" }}>
      <h2 className={`pb-5 border-bottom mb-5 ${styles.sectionTitle}`}>
        My projects
      </h2>
      <div
        id="myCarousel"
        className="carousel slide mb-5 vw-100"
        data-bs-ride="carousel"
        style={{ position: "absolute", left: "0" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className=""
            aria-label="Slide 1"
            style={{ backgroundColor: "var(--blueprint-deep)" }}
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className=""
            style={{ backgroundColor: "var(--blueprint-deep)" }}
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="active"
            aria-current="true"
            style={{ backgroundColor: "var(--blueprint-deep)" }}
          ></button>
        </div>
        <div className="carousel-inner">
          {projects.map((project, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""} ${styles.carrosel_item}`}
              key={project.id}
            >

                <Image
                  src={project.img}
                  alt={project.title}
                  className={styles.carouselImage}
                  fill unoptimized
                />
              <div className={styles.overlay} />
              <div className="container" > 
                <div
                  className="carousel-caption text-start"
                  style={{color: "var(--background)" }}
                >
                  <h1>{project.title}</h1>
                  <p className="opacity-75">{project.description}</p>
                  <p>
                    <a
                      className="btn btn-lg btn-primary"
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ backgroundColor: "var(--background)" , color: "var(--paper-line)" }}
                    >
                      Ver no GitHub
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
