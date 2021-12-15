import React from "react";
import ArrowBack from "../../components/ArrowBack/ArrowBack";
import X from "../../components/X/X";
import styles from "src/stories/pages/CafeMap/CafeMap.module.css";
import Map from "../../components/Map/Map";

export default function CafeMap() {
  return (
    <div className={styles.container}>
      <Map />
      <ArrowBack />
      <X />
      <h1>Café</h1>
    </div>
  );
}
