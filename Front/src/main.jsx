import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Components/Publico/Inicio.jsx";
import QuienesSomos from "./Components/Publico/QuienesSomos.jsx";
import Adopciones from "./Components/Adopciones/Adopciones.jsx";
import FormularioAdopciones from "./Components/Adopciones/FormularioAdopciones.jsx";
import Adopcion from "./Components/Adopciones/Adopcion.jsx";
import Consultas from "./Components/Publico/Consultas.jsx";
import Login from "./Components/AuthUsuarios/Login.jsx";
import Registro from "./Components/AuthUsuarios/Registro.jsx";
import Clientes from './Components/Admin/Clientes.jsx';
import EditarPerfil from './Components/Admin/EditarPerfil.jsx';
import MisMascotas from "./Components/Mascotas/MisMascotas.jsx";
import AgregarMascota from "./Components/Mascotas/AgregarMascota.jsx";
import HistoriaClinica from "./Components/Mascotas/HistoriaClinica.jsx";
import SignOut from './Components/AuthUsuarios/SignOut.jsx';


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
              <Route path="/formulario" element={<FormularioAdopciones/>}/>
              <Route path="/adopcion/:id" element={<Adopcion/>}/>
              <Route path="/consultas" element={<Consultas/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registro/>}/>
              <Route path="/clientes" element={<Clientes/>}/>
              <Route path="/editarPerfil/:id" element={<EditarPerfil/>}/>
              <Route path="/misMascotas/:idUsuario" element={<MisMascotas/>}/>
              <Route path="/crear/:idUsuario" element={<AgregarMascota/>}/>
              <Route path="/historiaClinica/:idUsuario/:id" element={<HistoriaClinica/>}/>
              <Route path="/signout" element={<SignOut/>}/>


          </Route> 
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
