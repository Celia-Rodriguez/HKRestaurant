import Plato from "./Plato";
import PropTypes from 'prop-types';

CategoriaCarta.propTypes = {
    categoria: PropTypes.string.isRequired,
    platos: PropTypes.arrayOf(            
        PropTypes.shape({
          nombre: PropTypes.string.isRequired, 
          precio: PropTypes.number.isRequired,
        })
      ).isRequired,
  };

function CategoriaCarta({ categoria, platos }) {
  return (
    <article className="carta-entrantes">
      <h2 className="titulo-seccion-carta">{categoria}</h2>
      {platos.map((plato, index) => (
        <Plato key={index} {...plato} />
      ))}
    </article>
  );
}

export default CategoriaCarta;
