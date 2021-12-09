import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";

function getPosition() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default function Map() {
  return (
    <div className={styles.cafeHeaderMap}>
      <h1>Cafe</h1>
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
    </div>
  );
}
