"use client";

import styles from "./page.module.css";
import Projects from "@/app/components/projectsCards/projectsCards";
import Navigation from "@/app/components/Nav/navegation";
import Carrosel from "@/app/components/Carrosel/carrosel";
export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.title}>
        <Navigation page="home"/>
      </section>


        <div className={styles.content}>
          <div className="container">
            <h2 className="h2">Meus Projetos</h2>
            <Carrosel />
          </div>
        </div>

    </div>

  );
}
