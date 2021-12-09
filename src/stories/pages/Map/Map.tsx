import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";

export default function Map() {
  return (
    <MapContainer
      className={styles.map}
      center={[47.85637, 12.1181]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[47.856769, 12.127801]}>
        <Popup>Visit Rosenheim</Popup>
      </Marker>
    </MapContainer>
  );
}
