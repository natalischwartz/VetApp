import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebaseConfig/AuthProvider.jsx";

const LogInLinks = () =>{
    const User = useContext(AuthContext);
    const user = User.currentUser
    const uid =user?.uid
    const isUserLoggedIn = user !== null;
    
    //si el user no esta autenticado
    if(!isUserLoggedIn){
        return (
            <>
                <NavLink to="/login" className="nav-link nav-item" onClick={() => {
        const collapseElement = document.getElementById('navbarNav');
        const bootstrapCollapse = new bootstrap.Collapse(collapseElement, {
          toggle: false,
        });
        bootstrapCollapse.hide(); // Cierra el menú
      }}>
                    <button id="botonIngresar" className="botonNavNoLogin">Ingresar</button>
                </NavLink>
                <NavLink to="/register" className="nav-link nav-item" onClick={() => {
        const collapseElement = document.getElementById('navbarNav');
        const bootstrapCollapse = new bootstrap.Collapse(collapseElement, {
          toggle: false,
        });
        bootstrapCollapse.hide(); // Cierra el menú
      }}>
                    <button id="botonRegistrate" className="botonNavNoLogin">Registrate</button>
                </NavLink>
            </>
        );
    // Si el usuario ha iniciado sesión y su email es admin@gmail.com, muestra los enlaces:
    }else if(isUserLoggedIn && user.email == import.meta.env.VITE_EMAIL){
        return (
            <>
                <NavLink to="/clientes" className="nav-link nav-item">Clientes</NavLink>
                <NavLink to="/turnos" className="nav-link nav-item">Turnos</NavLink>
                <NavLink to="/signOut" className="nav-link nav-item">
                    <button id="botonCerrarSesion" className="botonNavLogin">Cerrar Sesión</button>
                </NavLink>
            </>
        );
    // Si el usuario está autenticado (pero no es admin)
    }else{
        return (
            <>
                <NavLink to={`/misMascotas/${uid}`} className="nav-link nav-item">Mis Mascotas</NavLink>
                <NavLink to="/turnos" className="nav-link nav-item">Turnos</NavLink>      
                <NavLink to="/signOut" className="nav-link nav-item">
                    <button id="botonCerrarSesion" className="botonNavLogin">Cerrar Sesión</button>
                </NavLink>
                <NavLink to={`/perfil/${uid}`} className="nav-link nav-item"></NavLink>
            </>
        );

    }
}



const Navbar = () => {
    return (
        <nav className="navbar  navbar-expand-sm">
            {/* Logo */}
            <div className="logo-container">
            <NavLink to="/" className="nav-link nav-item huellitas">
                        <img src="../images/paw.svg" alt="" className="logo" />
                        <h3 className="texto-huellitas">PawClinic</h3>
                </NavLink>
            </div>

            {/* Botón del menú hamburguesa */}
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

             {/* Links de navegación */}
            <div className="nav-link-section collapse navbar-collapse" id="navbarNav">
                <NavLink to="/quienesSomos" className="nav-link nav-item" onClick={() => {
        const collapseElement = document.getElementById('navbarNav');
        const bootstrapCollapse = new bootstrap.Collapse(collapseElement, {
          toggle: false,
        });
        bootstrapCollapse.hide(); // Cierra el menú
      }}>Quiénes Somos</NavLink>
                <NavLink to="/adopciones" className="nav-link nav-item" onClick={() => {
        const collapseElement = document.getElementById('navbarNav');
        const bootstrapCollapse = new bootstrap.Collapse(collapseElement, {
          toggle: false,
        });
        bootstrapCollapse.hide(); // Cierra el menú
      }}>Adopciones</NavLink>
                {/* <Link to="/" className="nav-link nav-item">Inicio</Link> */}
                <NavLink to="/consultas" className="nav-link nav-item" onClick={() => {
        const collapseElement = document.getElementById('navbarNav');
        const bootstrapCollapse = new bootstrap.Collapse(collapseElement, {
          toggle: false,
        });
        bootstrapCollapse.hide(); // Cierra el menú
      }}>Consultas</NavLink>
                <LogInLinks></LogInLinks>
                <a href="https://www.instagram.com/" target="_blank" style={{ color: "black", paddingRight: "10px" }}></a>
                <a href="https://es-la.facebook.com/" target="_blank" style={{ color: "black", paddingRight: "10px" }}></a>
            </div>
        </nav >
        
    )
};

export default Navbar;