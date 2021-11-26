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
    </div>
  );
}
