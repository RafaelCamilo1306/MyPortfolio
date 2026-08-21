"use client";

import { stacks } from "./stacks";
import styles from "./stacks.module.css";

function StackGroup({ title, items }) {
  return (
    <>
      <h3 className={`fs-4 mb-4 ${styles.groupTitle}`}>{title}</h3>
      <div className="row g-4 row-cols-2 row-cols-md-3 row-cols-lg-6 mb-5">
        {items.map((item) => (
          <div className="col" key={item.name}>
            <div className={`feature d-flex flex-column align-items-center text-center ${styles.featureItem}`}>
              <div
                className={`feature-icon d-inline-flex align-items-center justify-content-center mb-3 ${styles.iconBox}`}
              >
                <img loading="lazy" src={item.icon} alt={item.name} width="40" height="40" />
              </div>
              <p className={`mb-0 ${styles.itemName}`}>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function Stack() {
  return (
    <section id="stack" className={styles.stackSection}>
      <div className="container">
        <h2 className={`pb-2 border-bottom mb-5 ${styles.sectionTitle}`}>
          Stacks
        </h2>
        <StackGroup title="Front-End" items={stacks.frontend} />
        <StackGroup title="Learning / Back-End" items={stacks.backend} />
      </div>
    </section>
  );
}