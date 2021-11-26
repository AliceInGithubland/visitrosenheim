import React from "react";
import styles from "./Covid.module.css";

export default function Covid() {
  return (
    <button type="button" className={styles.covidButton}>
      <img className={styles.covidIcon} src="src/assets/covid_icon.png" />
      <p className={styles.textCovidbutton}>Covid-19</p>
    </button>
  );
}
