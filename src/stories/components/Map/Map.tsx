import React, { useState } from "react";
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
import iconMarker from "../../../assets/UsersLocationPin.svg";
import arrowbackIcon from "../../../assets/ArrowBack.svg";
import mapLocator from "../../../assets/MapLocator.svg";

type MapLocatorProps = {
  setPosition: (position: LatLng) => void;
};

function MapLocator({ setPosition }: MapLocatorProps) {
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
      <img src={mapLocator} alt="LocationMarker" />
    </button>
  );
}

export default function Map() {
  const [position, setPosition] = useState(new LatLng(0, 0));
  const currentMarker = new L.Icon({
    iconAnchor: [23, 53],
    iconUrl: iconMarker,
  });

  const filteredCafeLocations = cafeLocationContent.filter(
    (cafeLocation) => cafeLocation.name === "Cafés Rosenheim"
  );

  return (
    <div className={styles.container}>
      <div className={styles.arrow}>
        <img src={arrowbackIcon} />
        <h1>Cafés</h1>
      </div>
      <MapContainer
        className={styles.map}
        center={[47.856363, 12.12823]}
        zoom={20}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredCafeLocations?.map((cafeLocation) => (
          <Marker
            icon={currentMarker}
            key={cafeLocation.id}
            position={[cafeLocation.lat, cafeLocation.lng]}
          >
            <Popup position={[cafeLocation.lat, cafeLocation.lng]}>
              <h2>{cafeLocation.name}</h2>
              <p>{cafeLocation.address}</p>
              <p>{cafeLocation.postcode}</p>
              <p>{cafeLocation.city}</p>
            </Popup>
          </Marker>
        ))}

        <Marker icon={currentMarker} position={[47.855721, 12.126823]}>
          <Popup>
            You are here <br />
            Looking for coffee ☕
          </Popup>
        </Marker>

        <Marker icon={currentMarker} position={[47.855198, 12.1308692]}>
          <Popup>
            Café INNig <br />
            Innstr. 13 <br />
            83022 Rosenheim
          </Popup>
        </Marker>

        <Marker icon={currentMarker} position={[47.8563632, 12.1282301]}>
          <Popup>
            KAVA coffee roasters <br /> Max-Josef-Platz 23 <br /> 83022
            Rosenheim
          </Popup>
        </Marker>

        <Marker icon={currentMarker} position={[47.8564628, 12.1303539]}>
          <Popup>
            Polastudios <br /> Färberstr.1 <br /> 83022 Rosenheim
          </Popup>
        </Marker>

        {position && (
          <Marker icon={currentMarker} position={position}>
            <Popup>You are here</Popup>
          </Marker>
        )}
        <MapLocator setPosition={setPosition} />
      </MapContainer>
    </div>
  );
}
