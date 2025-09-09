// import React, { useEffect } from "react";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import "leaflet.markercluster/dist/leaflet.markercluster";
// import "leaflet.markercluster/dist/MarkerCluster.css";
// import "leaflet.markercluster/dist/MarkerCluster.Default.css";

// import { MapContainer, TileLayer } from "react-leaflet";

// // Fix Leaflet marker icon issue with React
// import iconUrl from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";

// let DefaultIcon = L.icon({
//   iconUrl,
//   shadowUrl: iconShadow,
//   iconAnchor: [12, 41],
// });
// L.Marker.prototype.options.icon = DefaultIcon;

// const ClusterMap = () => {
//   useEffect(() => {
//     const map = L.map("map", {
//       center: [51.505, -0.09],
//       zoom: 5,
//       preferCanvas: true,
//     });

//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       attribution: '&copy; OpenStreetMap contributors',
//     }).addTo(map);

//     // Create a cluster group
//     const markers = L.markerClusterGroup();

//     // Add some random markers
//     for (let i = 0; i < 100; i++) {
//       const lat = 51.5 + Math.random() * 10 - 5;
//       const lng = -0.09 + Math.random() * 10 - 5;
//       const marker = L.marker([lat, lng]).bindPopup(`Marker ${i + 1}`);
//       markers.addLayer(marker);
//     }

//     map.addLayer(markers);

//     return () => {
//       map.remove(); // cleanup on unmount
//     };
//   }, []);

//   return <div id="map" style={{ height: "600px", width: "100%" }} />;
// };

// export default ClusterMap;




import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

// Fix Leaflet marker icon issue with React
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const ClusterMap = () => {
  useEffect(() => {
    const map = L.map("map", {
      center: [20, 0], // World view
      zoom: 2,
      preferCanvas: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    const markers = L.markerClusterGroup();

    // Your chosen points
    const locations = [
      { name: "London", coords: [51.505, -0.09] },
      { name: "Manchester", coords: [53.4808, -2.2426] },
      { name: "New York", coords: [40.7128, -74.006] },
      { name: "Los Angeles", coords: [34.0522, -118.2437] },
      { name: "Delhi", coords: [28.7041, 77.1025] },
      { name: "Mumbai", coords: [19.076, 72.8777] },
    ];

    locations.forEach((place) => {
      const marker = L.marker(place.coords).bindPopup(place.name);
      markers.addLayer(marker);
    });

    map.addLayer(markers);

    // Zoom to show all markers
    map.fitBounds(markers.getBounds());

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: "600px", width: "100%" }} />;
};

export default ClusterMap;
