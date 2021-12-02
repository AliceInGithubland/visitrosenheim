import React from "react";
import Covid from "../Covid/Covid";
import styles from "./Menuecard.module.css";

type MenuecardProps = {
  className?: string;
};

export default function Menuecard({ className }: MenuecardProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      <a className={styles.link}>
        <img src="src/assets/Cafe_Icon.svg" />
        <p>Cafés</p>
      </a>

      <a className={styles.link}>
        <img src="src/assets/Restaurants_Icon.svg" />
        <p>Restaurants</p>
      </a>

      <a className={styles.link}>
        <img src="src/assets/Activities_Icon.svg" />
        <p>Activities</p>
      </a>

      <a className={styles.link}>
        <img src="src/assets/Hotels_icon.svg" />
        <p>Hotels</p>
      </a>

      <a className={styles.link}>
        <img src="src/assets/Retail_Icon.svg" />
        <p>Retail</p>
      </a>

      <a className={`${styles.link} ${styles.bucketlist}`}>
        <img src="src/assets/Bucketlist_Icon.svg" />
        <p>Bucketlist</p>
      </a>
      <Covid className={styles.covid} />
    </div>
  );
}
