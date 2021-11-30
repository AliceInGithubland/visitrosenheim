import React from "react";
import styles from "./Landingpage.module.css";
import Menuecard from "../../components/Menuecard/Menuecard";

export default function Landingpage() {
  return (
    <div className={styles.container}>
      <h1>Visit Rosenheim</h1>
      <div className={styles.menuecard}>
        <Menuecard />
      </div>
    </div>
  );
}
