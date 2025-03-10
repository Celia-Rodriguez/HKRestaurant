import { useState, useEffect } from "react";
import "./Reservas_style.css";

function Reservas() {
  const [mesActual, setMesActual] = useState("");
  const [anioActual, setAnioActual] = useState("");
  const [diasDelMes, setDiasDelMes] = useState([]);
  const [primerDiaSemana, setPrimerDiaSemana] = useState(0);
  const [hoy] = useState(new Date().getDate());

  // Estado para los inputs del formulario
  const [formData, setFormData] = useState({
    dia: "",
    hora: "00:00",
    personas: "",
    telefono: "",
    email: "",
  });

  // Estado para controlar la visibilidad del modal
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    const fecha = new Date();
    const nombreMes = fecha.toLocaleString("es-ES", { month: "long" });
    const anio = fecha.getFullYear();
    const totalDias = new Date(anio, fecha.getMonth() + 1, 0).getDate();
    const primerDia = new Date(anio, fecha.getMonth(), 1).getDay();

    // Ajustamos para que la semana empiece en Lunes (0 = Lunes, 6 = Domingo)
    const primerDiaAjustado = primerDia === 0 ? 6 : primerDia - 1;

    setMesActual(nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1));
    setAnioActual(anio);
    setDiasDelMes([...Array(totalDias).keys()].map((i) => i + 1));
    setPrimerDiaSemana(primerDiaAjustado);
  }, []);

  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReservar = () => {
    const { dia, hora, personas, telefono, email } = formData;

    if (!dia || !hora || !personas || !telefono || !email) {
      alert("Por favor, rellena todos los campos antes de reservar.");
      return;
    }

    const numDia = parseInt(dia, 10);
    if (isNaN(numDia) || numDia < 1 || numDia > diasDelMes.length) {
      alert("Por favor, ingresa un día válido.");
      return;
    }

    const horaPattern = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
    if (!horaPattern.test(hora) && hora !== "00:00") {
      alert("Por favor, ingresa una hora válida en formato 24H (HH:mm).");
      return;
    }

    const numPersonas = parseInt(personas, 10);
    if (isNaN(numPersonas) || numPersonas < 1 || numPersonas > 8) {
      alert("Por favor, ingresa un número de personas válido (1 a 8).");
      return;
    }

    const telefonoPattern = /^\d{9,12}$/; // Acepta entre 9 y 12 dígitos
    if (!telefonoPattern.test(telefono)) {
      alert("Por favor, ingresa un número de teléfono válido (9 a 12 dígitos).");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    // Verificar si la hora está dentro del horario de apertura
    const diaSemana = new Date(anioActual, new Date().getMonth(), dia).getDay(); // Obtener el día de la semana (0=Domingo, 1=Lunes...)
    
    const horaNumerica = parseInt(hora.split(":")[0], 10) * 60 + parseInt(hora.split(":")[1], 10); // Convertir la hora a minutos

    // Horarios de apertura por días
    const horarios = {
      lunesAM: 12 * 60 + 30, // 12:30
      lunesPM: 16 * 60 + 30, // 16:30
      nocheAM: 20 * 60, // 20:00
      nochePM: 23 * 60, // 23:00
      finDeSemanaNochePM: 24 * 60, // 24:00 (fin de semana)
    };

    const esValido = (diaSemana >= 1 && diaSemana <= 4) ?  // Lunes a Jueves
      (horaNumerica >= horarios.lunesAM && horaNumerica <= horarios.lunesPM || horaNumerica >= horarios.nocheAM && horaNumerica <= horarios.nochePM) :
      (horaNumerica >= horarios.lunesAM && horaNumerica <= horarios.lunesPM || horaNumerica >= horarios.nocheAM && horaNumerica <= horarios.finDeSemanaNochePM); // Fin de semana

    if (!esValido) {
      alert("La hora seleccionada está fuera del horario de apertura del restaurante. Por favor consulte el horario");
      return;
    }

    setMostrarModal(true); // Mostrar modal
  };

  return (
    <section className="reservas">
      <div className="reservas_titulo">
        <h1>RESERVAS</h1>
      </div>
      <div className="reservas_contenido">
        {/* Calendario */}
        <div className="calendario">
          <div className="mes">
            <h4>{mesActual}</h4>
            <h4>{anioActual}</h4>
          </div>
          <div className="dias">
            {["L", "M", "X", "J", "V", "S", "D"].map((dia, index) => (
              <p key={index} className="dia-semana">{dia}</p>
            ))}
            {Array.from({ length: primerDiaSemana }).map((_, index) => (
              <p key={`empty-${index}`} className="empty"></p>
            ))}
            {diasDelMes.map((dia) => (
              <p
                key={dia}
                className={dia === hoy ? "hoy" : ""}
                onClick={() => setFormData({ ...formData, dia })}
              >
                {dia}
              </p>
            ))}
          </div>
        </div>

        {/* Formulario de reservas */}
        <div className="hacer-reservas">
          <div className="datos-reserva">
            <div className="datos">
              <p>Día</p>
              <input
                type="number"
                name="dia"
                placeholder="Escriba aquí"
                value={formData.dia}
                onChange={handleInputChange}
                min="1"
                max={diasDelMes.length}
              />
            </div>
            <div className="datos">
              <p>Hora</p>
              <input
                type="time"
                name="hora"
                placeholder="00:00"
                value={formData.hora}
                onChange={handleInputChange}
              />
            </div>
            <div className="datos">
              <p>Nº Personas</p>
              <input
                type="number"
                name="personas"
                placeholder="Escriba aquí"
                value={formData.personas}
                onChange={handleInputChange}
                min="1"
                max="8"
              />
            </div>
          </div>
          <div className="datos-personales">
            <div className="datos-p">
              <p>Teléfono</p>
              <input
                type="text"
                name="telefono"
                placeholder="XXX XXX XXX"
                value={formData.telefono}
                onChange={handleInputChange}
                maxLength="12"
              />
            </div>
            <div className="datos-p">
              <p>Email</p>
              <input
                type="email"
                name="email"
                placeholder="email@ejmeplo.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="datos-reserva">
            <button onClick={handleReservar}>Reservar</button>
          </div>
        </div>
      </div>

      {/* Modal de confirmación */}
      {mostrarModal && (
        <div className="modal">
          <div className="modal-contenido">
            <h2>¡Reserva confirmada! 🎉</h2>
            <p>Gracias por reservar con nosotros.</p>
            <p>📅 Día: {formData.dia}</p>
            <p>🕒 Hora: {formData.hora}</p>
            <p>👥 Nº Personas: {formData.personas}</p>
            <button onClick={() => setMostrarModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Reservas;
