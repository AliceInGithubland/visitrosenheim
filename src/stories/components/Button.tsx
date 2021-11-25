import React from "react";
import styles from "./Button.module.css";

export default function Button() {
  return (
    <button type="button" className={styles.cafeButton}>
      <img className={styles.cafeIcon} src="src/assets/cafeicon.svg" />
      <p>Café</p>
    </button>
  );
}
