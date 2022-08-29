import React from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import jsonMaps from "constants/maps.json";

const position: LatLngExpression = [1.28692, 103.85457];

const Maps = () => {
  console.log(jsonMaps);

  var greenIcon = L.icon({
    iconUrl: "/assets/images/pointing.svg",

    iconSize: [50, 95], // size of the icon
    iconAnchor: [22, 40], // point of the icon which will correspond to marker's location
  });

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: "90vh", width: "100wh", zIndex: 0 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {jsonMaps.map((map, key) => (
        <Marker
          position={map.location as LatLngExpression}
          icon={greenIcon}
          key={key}
        >
          <Tooltip direction="right" permanent>
            {map.name}
          </Tooltip>
          <Popup>{map.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Maps;
