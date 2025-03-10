import "./HomePageNormal_style.css";
import anuncio from "../../assets/img/anuncio.svg";

function HomePageNormal() {
    return (
      <section className="homePage">
          <img className="img-homePage" src={anuncio} alt="prueba" />
        </section>
      );
}

export default HomePageNormal;