import HomePageNormal from "../components/HomePageNormal/HomePageNormal";
import Line from "../components/Line/Line";
import ParaPedir from "../components/ParaPedir/Parapedir";
import Reservas from "../components/Reservas/Reservas";


function Reserva() {
    return (
      <main className="cuerpo">
         <HomePageNormal />
         <Line />
         <ParaPedir />
         <Line />
         <Reservas />

      </main>
    );
  }
  
  export default Reserva;
  