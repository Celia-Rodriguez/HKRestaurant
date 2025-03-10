import "./Situation_style.css";
import MapaFalso from "./FakeMap";

function Situacion() {
  return (
    <section className="situacion">
      <div className="situacion_titulo">
        <h1>Dónde Estamos</h1>
      </div>
      <div className="situacion_contenedor">
        <h2 className="horario_titulo">Horario</h2>
        <div className="situacion_horario LaJ">
          <h3>Lunes a Jueves</h3>
          <p>12:30 a 16:30</p>
          <p>20:00 a 23:00</p>
        </div>
        <div className="situacion_horario VaD">
          <h3>Viernes a Domingo</h3>
          <p>12:30 a 16:30</p>
          <p>20:00 a 24:00</p>
        </div>
        <h2 className="direccion_titulo">Dirección</h2>
        <h3 className="direccion-content">Avda Falsa VII, 41 285026, Ninguna, Parte</h3>
      </div>
      <MapaFalso />
    </section>
  );
}

export default Situacion;
