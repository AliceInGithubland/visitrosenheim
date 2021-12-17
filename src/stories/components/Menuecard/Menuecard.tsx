import React from "react";
import { Link } from "react-router-dom";
import Covid from "../Covid/Covid";
import styles from "./Menuecard.module.css";
import cafeIcon from "../../../assets/Cafe_Icon.svg";
import restaurantsIcon from "../../../assets/Restaurants_Icon.svg";
import activiesIcon from "../../../assets/Activities_Icon.svg";
import hotelsIcon from "../../../assets/Hotels_icon.svg";
import retailIcon from "../../../assets/Retail_Icon.svg";
import bucketlistIcon from "../../../assets/Bucketlist_Icon.svg";

type MenuecardProps = {
  className?: string;
};

export default function Menuecard({ className }: MenuecardProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      <Link to="/CafeMap" className={styles.link}>
        <img src={cafeIcon} alt="CafeIcon" />
        <p>Cafés</p>
      </Link>

      <a className={styles.link}>
        <img src={restaurantsIcon} alt="RestaurantIcon" />
        <p>Restaurants</p>
      </a>

      <a className={styles.link}>
        <img src={activiesIcon} alt="ActivitiesIcon" />
        <p>Activities</p>
      </a>

      <a className={styles.link}>
        <img src={hotelsIcon} alt="HotelsIcon" />
        <p>Hotels</p>
      </a>

      <a className={styles.link}>
        <img src={retailIcon} alt="RetailIcon" />
        <p>Retail</p>
      </a>

      <a className={`${styles.link} ${styles.bucketlist}`}>
        <img src={bucketlistIcon} alt="BucketlistIcon" />
        <p>Bucketlist</p>
      </a>
      <Covid className={styles.covid} />
    </div>
  );
}
