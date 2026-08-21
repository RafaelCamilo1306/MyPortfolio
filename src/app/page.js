"use client";

import styles from "./page.module.css";
import Projects from "@/app/components/projectsCards/projectsCards";
import Navigation from "@/app/components/Nav/navegation";
import Carrosel from "@/app/components/Carrosel/carrosel";
import AboutSection from "@/app/components/About/About";
import Stack from "@/app/components/Stacks/Stacks";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.title}>
        <Navigation page="home" />
      </section>

      <div className={styles.content}>
        <AboutSection />

        <hr className="featurette-divider" />

        <Carrosel />

        <hr className="featurette-divider" />

        <Stack />
      </div>
    </div>
  );
}
