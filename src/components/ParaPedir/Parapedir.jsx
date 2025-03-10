import "./ParaPedir_style.css";

function ParaPedir() {
  return (
    <section className="parapedir">
      <div className="parapedir_titulo">
        <h1>PARA PEDIR</h1>
      </div>
      <div className="parapedir_contenedor">
        <h2 className="horario_titulo">Horario</h2>
        <div className="parapedir_horario LaJ">
          <h3>Lunes a Jueves</h3>
          <p>12:30 a 16:00</p>
          <p>20:00 a 23:00</p>
        </div>
        <div className="parapedir_horario VaD">
          <h3>Viernes a Domingo</h3>
          <p>12:30 a 16:30</p>
          <p>20:00 a 24:00</p>
        </div>
        <div className="line_horario"></div>
        <h2 className="opciones_titulo">A DOMICILIO O RECOGER</h2>
        <div className="parapedir_horario telefono">
          <h3>Teléfonos</h3>
          <p>XX XXX XXX XXX</p>
          <p>XX XXX XXX XXX</p>
        </div>
        <div className="parapedir_horario direccion">
          <h3>Dirección</h3>
          <p>Avda Falsa VII, 41</p>
          <p>285026, Ninguna, Parte</p>
        </div>
      </div>
    </section>
  );
}

export default ParaPedir;
