import './Login.css'
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import "firebase/auth";
import { auth } from "../../firebaseConfig/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Login = () =>{

  const mySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const auth =getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = (e) =>{
    e.preventDefault();

    try {
      signInWithEmailAndPassword(auth,email,password)
      .then(()=>{
        console.log("Ingreso correcto");
        navigate("/");
      })
      
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El usuario ingresado no existe",
      });
      
    }

  }


    return (
        <div id="contenedor-login">
          <div className="contenedor-photo">
            <img className='photo-login' src="/images/login-photo.jpg" alt="Photo login" />
          </div>
          <div id="login">
            <div className="titulo_login"> Ingresa a tu cuenta</div>
            <form id="loginform" onSubmit={loginSubmit}>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="usuario"
                type="email"
                className="form-input"
                name="email"
                placeholder="ejemplo@email.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
    
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                className="form-input"
                placeholder="Contraseña"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <a href="#" className="bold-text" id="cont">
                ¿Olvidaste tu contraseña?
              </a>
              <button type="submit" className="log" onSubmit={loginSubmit}>
                Ingresar
              </button>
              <Link to={"/register"} className="bold-text">
                ¿No tienes Cuenta? <b>Registrate</b>
              </Link>
            </form>
          </div>
        </div>
      );
}

export default Login;