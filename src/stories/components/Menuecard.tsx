import React from "react";
import styles from "./Menuecard.module.css";

export default function Button() {
  return (
    <div className={styles.menueCard}>
      <button type="button" className={styles.cafeButton}>
        <img className={styles.cafeIcon} src="src/assets/cafeicon.svg" />
        <p className={styles.textCafe}>Café</p>
      </button>

      <button type="button" className={styles.restaurantButton}>
        <img
          className={styles.restaurantIcon}
          src="src/assets/restaurant_icon.png"
        />
        <p className={styles.textRestaurant}>Restaurant</p>
      </button>

      <button type="button" className={styles.activitiesButton}>
        <img
          className={styles.activitiesIcon}
          src="src/assets/ticket_icon.png"
        />
        <p className={styles.textActivities}>Activities</p>
      </button>

      <button type="button" className={styles.hotelsButton}>
        <img className={styles.hotelsIcon} src="src/assets/hotels_icon.png" />
        <p className={styles.textHotels}>Hotels</p>
      </button>

      <button type="button" className={styles.retailButton}>
        <img className={styles.retailIcon} src="src/assets/retail_icon.png" />
        <p className={styles.textRetail}>Retail</p>
      </button>
    </div>
  );
}
