import "./ShowPlatos_style.css";
import { useNavigate } from "react-router-dom";
import firstPhoto from '../../assets/img/food/cerdo_agridulce.jpg';
import secondtPhoto from '../../assets/img/food/gambas.jpg';
import thirdPhotoOne from '../../assets/img/food/servilleta.jpg';
import thirdPhotoTwo from '../../assets/img/food/botella.jpg';
import fourthPhoto from '../../assets/img/food/arroz.jpg';
import fifthPhoto from '../../assets/img/cartel.png';
import sixthPhoto from '../../assets/img/mesa_grupo.jpg';
import seventhPhoto from '../../assets/img/food/dumplings.jpg';
import eighthPhotoOne from '../../assets/img/faroles.jpg';
import eighthPhotoTwo from '../../assets/img/food/palillos.jpg';
import ninthPhoto from '../../assets/img/food/tetera.jpg';
import tenthPhoto from '../../assets/img/food/sopa_huevo.jpg';


function ShowPlatos() {
  const navigate = useNavigate();
  return (
    <section className="showPlatos">
      <div className="showPlatos_titulo">
        <h1>NUESTROS PLATOS</h1>
      </div>
      <div className="showPlatos_contenido">
        <div className="primera-Foto">
            <img className="img-showPlatos" src={firstPhoto} alt="" />
        </div>
        <div className="segunda-Foto"><img className="img-showPlatos" src={secondtPhoto} alt="" /></div>
        <div className="tercera-Foto">
          <img className="img-showPlatos" src={thirdPhotoOne} alt="" />
          <img className="img-showPlatos" src={thirdPhotoTwo} alt="" />
        </div>
        <div className="cuarta-Foto"><img className="img-showPlatos" src={fourthPhoto} alt="" /></div>
        <div className="quinta-Foto"><img className="img-showPlatos" src={fifthPhoto} alt="" /></div>
        <div className="titulo_contenido_showPlatos img-showPlatos" id="platos"  onClick={() => navigate("/carta")}><h2>VER CARTA</h2></div>
        <div className="sexta-Foto"><img className="img-showPlatos" src={sixthPhoto} alt="" /></div>
        <div className="septima-Foto"><img className="img-showPlatos" src={seventhPhoto} alt="" /></div>
        <div className="octava-Foto">
          <img className="img-showPlatos" src={eighthPhotoOne} alt="" />
          <img className="img-showPlatos" src={eighthPhotoTwo} alt="" />
        </div>
        <div className="novena-Foto"><img className="img-showPlatos" src={ninthPhoto} alt="" /></div>
        <div className="decima-Foto"><img className="img-showPlatos" src={tenthPhoto} alt="" /></div>
      </div>
    </section>
  );
}

export default ShowPlatos;
