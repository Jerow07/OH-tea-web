import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

export default function LocationMap() {
  return (
    <section>
      <div className="w-full" style={{ height: '80vh' }}>
        <MapContainer
          center={[-34.5737616, -58.43841135]}
          zoom={14}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
          />
          <Marker position={[-34.590066, -58.4279708]}>
            <Popup>
              <div className="text-center">
                <b>Oh! Tea - Soho</b>
                <p>Honduras 4787</p>
              </div>
            </Popup>
          </Marker>
          <Marker position={[-34.5574572, -58.4488519]}>
            <Popup>
              <div className="text-center">
                <b>Oh! Tea - China Town</b>
                <p>Juramento 1600</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  )
}