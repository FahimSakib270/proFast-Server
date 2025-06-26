import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Import district data
import districtsData from "../../data/districts.json";

const CoverageMap = ({ selectedDistrict }) => {
  const map = useMap();
  const markersRef = useRef({});

  // Format active districts
  const activeDistricts = districtsData
    .filter((d) => d.status === "active")
    .map((d) => ({
      name: d.district,
      position: [d.latitude, d.longitude],
      coveredAreas: d.covered_area.join(", "),
      flowchart: d.flowchart,
    }));

  // When selectedDistrict changes, zoom and pan to it
  useEffect(() => {
    if (selectedDistrict && map) {
      const district = activeDistricts.find(
        (d) => d.name.toLowerCase() === selectedDistrict.toLowerCase()
      );

      if (district) {
        map.flyTo(district.position, 10); // Smooth zoom to level 10

        // Optional: Open popup of the selected district
        const marker = markersRef.current[district.name];
        if (marker) {
          marker.openPopup();
        }
      }
    }
  }, [selectedDistrict, map]);

  return (
    <>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* Render markers dynamically */}
      {activeDistricts.map((district) => (
        <Marker
          key={district.name}
          position={district.position}
          eventHandlers={{
            add: (event) => {
              // Save reference to this marker
              markersRef.current[district.name] = event.target;
            },
          }}
        >
          <Popup>
            <strong>{district.name}</strong>
            <br />
            <small>Covered Areas: {district.coveredAreas}</small>
            <br />
            <a
              href={district.flowchart}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Flowchart
            </a>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default function MapWrapper({ selectedDistrict }) {
  return (
    <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-md">
      <MapContainer
        center={[23.6541, 90.1809]} // Bangladesh center
        zoom={7}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <CoverageMap selectedDistrict={selectedDistrict} />
      </MapContainer>
    </div>
  );
}
