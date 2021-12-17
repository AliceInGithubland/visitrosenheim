import React from "react";
import styles from "./ArrowBack.module.css";
import arrowbackIcon from "../../../assets/ArrowBack.svg";

export default function ArrowBack() {
  return (
    <div className={styles.ArrowBack}>
      <img src={arrowbackIcon}></img>
    </div>
  );
}
