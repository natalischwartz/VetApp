import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Components/Publico/Inicio.jsx";
import QuienesSomos from "./Components/Publico/QuienesSomos.jsx";
import Adopciones from "./Components/Adopciones/Adopciones.jsx";
import Consultas from "./Components/Publico/Consultas.jsx";
import Login from "./Components/AuthUsuarios/Login.jsx";
import Registro from "./Components/AuthUsuarios/Registro.jsx";
import Clientes from './Components/Admin/Clientes.jsx';


import "./index.css";
import { AuthProvider } from "./firebaseConfig/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
           {/* Definimos App como el layout principal */}
           <Route path="/" element={<App />}>
              <Route index element={<Inicio/>}/>  {/* Página principal */}
              <Route path="/QuienesSomos" element={<QuienesSomos/>}/>
              <Route path="/adopciones" element={<Adopciones/>}/>
              <Route path="/consultas" element={<Consultas/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registro/>}/>
              <Route path="/clientes" element={<Clientes/>}/>

          </Route> 
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
