import React from "react";
import styles from "./Covid.module.css";

type CovidLink = {
  className?: string;
};

export default function Covid({ className }: CovidLink) {
  return (
    <a className={`${styles.covid} ${className}`}>
      <p>Covid-19</p>
      <img alt="covidicon" src="src/assets/Covid19_Icon.svg" />
    </a>
  );
}
