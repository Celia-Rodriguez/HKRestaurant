import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo_letras_a.svg";
import './Header_style.css';

function Header() {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="cabecera">
      <nav className="mainMenu">
        <ul className="nav-links">
          <li><Link to="/" onClick={closeMenu}>INICIO</Link></li>
          <li><Link to="/carta" onClick={closeMenu}>CARTA</Link></li>
        </ul>
        <div className="logo">
          <img src={logo} alt="logo Hong Kong restaurante chino" onClick={() => navigate("/")}/>
        </div>
        <ul className="nav-links">
          <li><Link to="/aboutUs" onClick={closeMenu}>NOSOTROS</Link></li>
          <li><Link to="/reservas" onClick={closeMenu}>RESERVAS</Link></li>
        </ul>
      </nav>

      {/* Menú responsive */}
      <nav className="mainMenu-responsive">
        <div className="logo">
          <img src={logo} alt="logo Hong Kong restaurante chino" />
        </div>
        <button className="navbar-toggle" onClick={toggle}>
          &#8801;
        </button>
        {/* Agregamos la clase "visible" solo si el estado menuOpen es true */}
        <ul className={`nav-links-responsive ${menuOpen ? "nav-links--visible" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>INICIO</Link></li>
          <li><Link to="/carta" onClick={closeMenu}>CARTA</Link></li>
          <li><Link to="/aboutUs" onClick={closeMenu}>NOSOTROS</Link></li>
          <li><Link to="/reservas" onClick={closeMenu}>RESERVAS</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
