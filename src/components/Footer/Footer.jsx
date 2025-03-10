import { useNavigate } from "react-router-dom";
import "./Footer_style.css";
import logo from "../../assets/img/logo_letras_a.svg";

function Footer() {

  const navigate = useNavigate();

    const handleClick = () => {
        alert("¡Próximamente!");
    };

    return (
        <footer className="pie">
            <img src={logo} alt="logo" onClick={() => navigate("/")} />
            <div className="div-pie">
                <p onClick={handleClick}>Avisos Legales</p>
                <p onClick={handleClick}>Condiciones</p>
                <p onClick={handleClick}>Política de Cookies</p>
            </div>
            <div className="div-pie">
                <p onClick={handleClick}>Alérgenos</p>
                <p onClick={handleClick}>Redes Sociales</p>
                <p onClick={handleClick}>Contacto</p>
            </div>
        </footer>
    );
}

export default Footer;
