"use client";
import Navigation from "../../components/Nav/navegation";
import Projects from "../../components/projectsCards/projectsCards";
import styles from "./page.module.css";

export default function page() {
    return ( 
    <div className={styles.page}>
        <div className={styles.title}>

        <Navigation page="projects" />
        </div>

        <div className={styles.content}>
            <Projects/>
        </div>

    </div> 
    )}; 