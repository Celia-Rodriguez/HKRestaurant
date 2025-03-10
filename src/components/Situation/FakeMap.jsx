import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapaFalso() {
  
  const posicion = [19.4726, -95.1332]; 

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <MapContainer center={posicion} zoom={15} style={{ width: "100%", height: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Mapa estilo OpenStreetMap
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={posicion}>
          <Popup>Restaurante Falso 🍽️ Aquí puedes disfrutar de comida ficticia.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapaFalso;
