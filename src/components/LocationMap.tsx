import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
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
  // Extracted coordinates from your Google Maps embeds
  const locations = [
    {
      position: [18.695142582432556, 74.08633717496741] as [number, number],
      name: "Polybond India Pvt Ltd.",
      address: "Manufacturing Facility"
    },
    {
      position: [18.560639237523084, 73.90935577876797] as [number, number],
      name: "Polybond India Private Limited",
      address: "Head Office"
    }
  ];

  // Calculate center point between the two locations
  const centerPosition: [number, number] = [
    (locations[0].position[0] + locations[1].position[0]) / 2,
    (locations[0].position[1] + locations[1].position[1]) / 2
  ];

  return (
    <div className="rounded-lg w-full h-[500px] overflow-hidden border shadow">
      <MapContainer
        center={centerPosition}
        zoom={11}
        scrollWheelZoom={true}
        attributionControl={false}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {locations.map((location, index) => (
          <Marker key={index} position={location.position}>
            <Tooltip permanent={false} direction="top" offset={[0, -10]}>
              <div className="text-center text-sm font-medium">
                <strong>{location.name}</strong><br />
                {location.address}
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LocationMap;