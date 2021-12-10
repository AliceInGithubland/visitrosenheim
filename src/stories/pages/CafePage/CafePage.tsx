import React from "react";
import styles from "../CafePage/CafePage.module.css";

export default function CafePage() {
  return (
    <div className={styles.container}>
      <h1>Visit Rosenheim</h1>
      <CafePage />
    </div>
  );
}
