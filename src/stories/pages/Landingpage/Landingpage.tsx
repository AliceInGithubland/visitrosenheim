import React from "react";
import styles from "./Landingpage.module.css";

export default function Landingpage() {
  return (
    <div className={styles.main}>
      <div className={styles.headerContainer}>
        <h1>Visit Rosenheim</h1>
      </div>
      <div className={styles.imageContainer}></div>
    </div>
  );
}
