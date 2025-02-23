import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div id="app">
      <Navbar />
        <Outlet /> {/* Aquí se renderizan las rutas dinámicamente */}
      <Footer />
    </div>
  );
}

export default App;
