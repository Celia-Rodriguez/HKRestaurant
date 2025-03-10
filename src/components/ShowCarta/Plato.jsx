
import PropTypes from 'prop-types';

Plato.propTypes = {
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  alergenos: PropTypes.arrayOf(PropTypes.string),
};

function Plato({nombre, precio, alergenos }) {
  return (
    <div className="carta-plato">
      <div className="plato">
        <h3>{nombre}</h3>
        <h4>{precio}</h4>
      </div>
      {alergenos && <p>Alérgenos: {alergenos.join(", ")}</p>}
    </div>
  );
}

export default Plato;
