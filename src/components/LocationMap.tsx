// // components/LocationMap.tsx
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
// import markerIcon from 'leaflet/dist/images/marker-icon.png';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// // Fix default marker icon issue in Leaflet
// delete (L.Icon.Default.prototype as any)._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerIcon2x,
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
// });
// const LocationMap = () => {
//   const position: [number, number] = [37.7749, -122.4194];

//   return (
//     <div className="rounded-lg w-full h-64 overflow-hidden border shadow">
//       <MapContainer
//         center={position}
//         zoom={15}
//         scrollWheelZoom={true}
//         style={{ width: '100%', height: '100%' }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position}>
//           <Popup>
//             <div className="text-center text-sm font-medium">
//               <strong>Eversure Medical</strong><br />
//               123 Medical Drive<br />
//               Healthcare City, HC 12345
//             </div>
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// export default LocationMap;


// components/LocationMap.tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix default marker icon issue in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const LocationMap = () => {
  const position: [number, number] = [37.7749, -122.4194];

  return (
    <div className="rounded-lg w-full h-[500px] overflow-hidden border shadow">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div className="text-center text-sm font-medium">
              <strong>Eversure Medical</strong><br />
              123 Medical Drive<br />
              Healthcare City, HC 12345
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;