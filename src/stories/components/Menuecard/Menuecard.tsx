import React from "react";
import { Link } from "react-router-dom";
import Covid from "../Covid/Covid";
import styles from "./Menuecard.module.css";

type MenuecardProps = {
  className?: string;
};

export default function Menuecard({ className }: MenuecardProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      <Link to="/CafeMap" className={styles.link}>
        <img src="src/assets/Cafe_Icon.svg" alt="CafeIcon" />
        <p>Cafés</p>
      </Link>

      <a className={styles.link}>
        <img src="src/assets/Restaurants_Icon.svg" alt="RestaurantIcon" />
        <p>Restaurants</p>
      </a>

      <a className={styles.link}>
        <img src="src/assets/Activities_Icon.svg" alt="ActivitiesIcon" />
        <p>Activities</p>
      </a>

      <a className={styles.link}>
        <img src="src/assets/Hotels_icon.svg" alt="HotelsIcon" />
        <p>Hotels</p>
      </a>

      <a className={styles.link}>
        <img src="src/assets/Retail_Icon.svg" alt="RetailIcon" />
        <p>Retail</p>
      </a>

      <a className={`${styles.link} ${styles.bucketlist}`}>
        <img src="src/assets/Bucketlist_Icon.svg" alt="BucketlistIcon" />
        <p>Bucketlist</p>
      </a>
      <Covid className={styles.covid} />
    </div>
  );
}
