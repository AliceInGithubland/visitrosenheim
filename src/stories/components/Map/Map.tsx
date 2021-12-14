import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import styles from "./Map.module.css";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import { LatLng } from "leaflet";
import cafeLocationContent from "../../../app/utils/cafeLocationContent.json";

function MapLocator({ setPosition }: any) {
  const map = useMap();
  const locateAndFly = () => {
    map.locate({ setView: true, maxZoom: map.getZoom() });
  };

  useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
    },
  });

  return (
    <button
      className={styles.usersLocationButton}
      onClick={() => locateAndFly()}
    >
      <img src="src/assets/MapLocator.svg" alt="LocationMarker" />
    </button>
  );
}

export default function Map() {
  const [position, setPosition] = useState(new LatLng(0, 0));
  const currentMarker = new L.Icon({
    iconAnchor: [23, 53],
    iconUrl: "src/assets/UsersLocationPin.svg",
  });

  const filteredCafeLocations = cafeLocationContent.filter(
    (cafeLocation) => cafeLocationContent.name === "Cafés Rosenheim"
  );

  return (
    <div className={styles.container}>
      <MapContainer
        className={styles.map}
        center={[47.856363, 12.12823]}
        zoom={20}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {cafeLocationContent.map((cafeLocation) => (
          <Marker
            key={cafeLocation.id}
            position={[cafeLocation.lat, cafeLocation.lng]}
          >
            <Popup position={[cafeLocation.lat, cafeLocation.lng]}>
              <h2>{"name: " + cafeLocation.name}</h2>
              <p>{"address: " + cafeLocation.name}</p>
              <p>{"postcode: " + cafeLocation.postcode}</p>
              <p>{"city: " + cafeLocation.city}</p>
            </Popup>
          </Marker>
        ))}
        <Marker position={[47.8563632, 12.1282301]}>
          <Popup>
            I am Here! <br /> And looking for Coffee
          </Popup>
        </Marker>

        {position && (
          <Marker icon={currentMarker} position={position}>
            <Popup>You are here</Popup>
          </Marker>
        )}

        <MapLocator position={position} setPosition={setPosition} />
      </MapContainer>
    </div>
  );
}
