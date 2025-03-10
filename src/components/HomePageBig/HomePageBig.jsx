import "./HomePageBig_style.css";
import imgHappyNewYear from "../../assets/img/happy_2024.svg";
import imgBackground from "../../assets/img/fondo.jpg";

function HomePageBig() {
  return (
    <section className="homePageBig">
      <img className="img-homePageBig" src={imgBackground} alt="prueba" />
      <div>
        <img src= {imgHappyNewYear} alt="" />
        <button className="btn-homePage" onClick={() => console.log("Ir a reservas")}>
          ¡PIDE YA!
        </button>
      </div>
    </section>
  );
}

export default HomePageBig;