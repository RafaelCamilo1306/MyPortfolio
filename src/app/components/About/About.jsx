"use client";

import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
  return (
    <section id="sobre" className={styles.aboutSection}>
      <div className="container">
                   <h2 className={`pb-2 border-bottom mb-5 ${styles.sectionTitle}`}>
          About Me
        </h2>
        <div className={`row align-items-center g-4 ${styles.card}`}>

          <div className="col-md-6">
            <div className={styles.imageWrapper}>
              <Image
                src="/about-photo.jpg"
                alt="Foto de Rafael Camilo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image}
                priority
              />
            </div>
          </div>
          <div className="col-md-6">
            <h3 className={styles.leadTitle}>
              Dev full stack em formação, 
            </h3>
            <h5 className="card-subtitle mb-0 text-body-secondary">
              Apaixonado por transformar ideias em interfaces funcionais e
              experiências digitais envolventes.
            </h5>
            <br />
            <br />
            <p className={styles.bodyText}>
              Sou estudante de desenvolvimento e venho construindo projetos
              reais para aprender na prática — do front-end à API. Trabalho com
              React, Next.js no dia a dia dos meus projetos, e já
              colaborei em times pequenos usando Git para versionamento e
              revisão de código. <br/> Gosto de transformar layout em interface
              funcional, prestando atenção em responsividade, estados de
              carregamento e experiência do usuário. Estou buscando minha
              primeira oportunidade como Front-End Developer para continuar
              evoluindo na minha carreira e contribuir com projetos desafiadores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
