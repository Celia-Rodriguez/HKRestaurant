import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Inicio from "./pages/Inicio";
import Reservas from "./pages/Reservas";
import Carta from "./pages/Carta";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SobreNosotros from "./pages/SobreNosotros";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/aboutUs" element={<SobreNosotros />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
