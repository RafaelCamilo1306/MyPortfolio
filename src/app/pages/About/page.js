"Use client";

import styles from "../../page.module.css";
import Navigation from "../../components/Nav/navegation";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <Navigation page="projects" />
      </div>
      <h1 className="h1" style={{ padding: "8rem 2rem" }}>About Page</h1>
    </div>
  );
}
