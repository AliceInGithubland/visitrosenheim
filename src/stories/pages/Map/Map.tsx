import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";

const Map = ({ places }) => {
  const defaultPosition: LatLngExpression = [47.85637, 12.1181]; // Rosenheim position

  return (
    <div className="map__container">
      <MapContainer center={defaultPosition} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};
