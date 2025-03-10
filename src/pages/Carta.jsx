import HomePageNormal from "../components/HomePageNormal/HomePageNormal";
import Line from "../components/Line/Line";
import ShowCarta from "../components/ShowCarta/ShowCarta";
import alergenos from "../assets/img/alergenos.jpg";

function CartaPage() {
  return (
    <main className="cuerpo">
      <HomePageNormal />
      <Line />
      <ShowCarta />
      <section className="alergenos">
        <img src={alergenos} alt="Tabla de alérgenos" />
      </section>
    </main>
  );
}

export default CartaPage;
