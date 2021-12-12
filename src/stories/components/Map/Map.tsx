import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import styles from "./Map.module.css";
import "leaflet/dist/leaflet.css";

function LocationMarker() {
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
      <Popup>You are here! Keep calm and looking for your next ☕place</Popup>
    </Marker>
  );
}

export default function Map() {
  return (
    <div>
      <MapContainer
        className={styles.map}
        center={[47.856363, 12.12823]}
        zoom={20}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[47.8563632, 12.1282301]}>
          <Popup>
            I am Here! <br /> And looking for Coffee
          </Popup>
        </Marker>
      </MapContainer>
      <LocationMarker />
    </div>
  );
}
