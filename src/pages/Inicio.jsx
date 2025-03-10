import HomePageBig from "../components/HomePageBig/HomePageBig";
import Line from "../components/Line/Line";
import ShowPlatos from "../components/ShowPlatos/ShowPlatos";
import Situacion from "../components/Situation/Situation";

function Inicio() {
    return (
      <main className="cuerpo">
       <HomePageBig />
       <Line />
       <ShowPlatos />
       <Line />
       <Situacion />
      </main>
    );
  }
  
  export default Inicio;
  