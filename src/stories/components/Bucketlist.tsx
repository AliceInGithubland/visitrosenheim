import React from "react";
import styles from "./Bucketlist.module.css";

export default function Bucketlist() {
  return (
    <button type="button" className={styles.bucketlistButton}>
      <img
        className={styles.bucketlistIcon}
        src="src/assets/bucketlisticon.png"
      />
      <p className={styles.textBucketlist}>Bucketlist</p>
    </button>
  );
}
