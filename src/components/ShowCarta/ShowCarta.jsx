import { useEffect, useState } from "react";
import CategoriaCarta from "./CategoriaCarta";
import "./ShowCarta_style.css";

function Carta() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    fetch("/menu.json")
      .then((response) => response.json())
      .then((data) => {
        setMenu(data);
        setLoading(false); // Termina la carga
      })
      .catch((error) => {
        console.error("Error cargando la carta:", error);
        setLoading(false); // Asegurarse de terminar la carga en caso de error
      });
  }, []);

  if (loading) {
    // Muestra una pantalla de carga mientras se obtiene la carta
    return (
      <section className="carta-loading">
        <div className="loading-spinner"></div>
        <p>Cargando la carta...</p>
      </section>
    );
  }

  return (
    <section className="carta">
      <div className="carta_titulo">
        <h1>CARTA</h1>
      </div>
      <div className="contenedor-carta">
        {menu.map((categoria, index) => (
          <CategoriaCarta key={index} {...categoria} />
        ))}
      </div>
    </section>
  );
}

export default Carta;
