import React from "react";
import styles from "./Covid.module.css";
import covidIcon from "../../../assets/Covid19_Icon.svg";

type CovidLink = {
  className?: string;
};

export default function Covid({ className }: CovidLink) {
  return (
    <a className={`${styles.covid} ${className}`}>
      <p>Covid-19</p>
      <img src={covidIcon} />
    </a>
  );
}
