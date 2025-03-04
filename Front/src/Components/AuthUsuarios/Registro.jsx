import './Registro.css';
import { Link, useNavigate } from "react-router-dom";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {db} from '../../firebaseConfig/firebase.js';
import { collection, doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const mySwal = withReactContent(Swal);

const Registro = () =>{

    const navigate = useNavigate();
    const auth = getAuth();
    // const clientesCollection = collection(db, "Clientes");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");

    const registerSubmit = async (e) =>{
        e.preventDefault();
    
        if (!validarEmail()) {
            return; // Detener la ejecución si el email no es válido
        }

        try {

            const userCredential =   await createUserWithEmailAndPassword(auth,email,password)
            const user = userCredential.user

            await setDoc(doc(db, "Clientes", user.uid), {
                Nombre: nombre,
                Apellido: apellido,
                Email: email,
            });
      
           
            mySwal.fire({
                icon: "success",
                title: "Registro exitoso",
                text: "Te has registrado correctamente",
            });

            navigate("/");
            
        } catch (error) {
            console.error("Error en el registro: ", error);
        mySwal.fire({
            icon: "error",
            title: "Error en el registro",
            text: error.message,
        });
        }

        
    }

    const validarEmail = () => {
        let validador_email = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (validador_email.test(email)) {
          return true;
        } else {
          mySwal.fire({
            icon: "error",
            title: "Error en email",
            text: "El formato de email no es correcto",
          });
          return false;
        }
      };

     
    return (
        <div id="contenedor-register">
            <div className="contenedor-photo">
                <img className='photo-register' src="/images/register-photo.jpg" alt="Photo register" />
            </div>
            <div id="registro">
                <div className="titulo_register"> Registro</div>
                <form method="POST" onSubmit={registerSubmit} id="registroform">
                    <label className='form-label'>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="ejemplo@email.com"
                        required
                        className="form-input"
                        onChange={(e) => setEmail(e.target.value)}
                    />
            
                    <label className='form-label'>Password</label>
                    <input
                        type="password"
                        name="password"
                        // placeholder="Mínimo 6 caracteres"
                        required
                        className="form-input"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {password.length < 6 && <span style={{ color: "red" }}>Se requieren al menos 6 caracteres</span>}
                   
            
                    <label className='form-label'>Nombre</label>
                    <input
                        type="nombre"
                        name="nombre"
                        placeholder="Nombre..."
                        required
                        className="form-input"
                        onChange={(e) => setNombre(e.target.value)}
                    />
            
                    <label className='form-label' >Apellido</label>
                    <input
                        type="apellido"
                        name="apellido"
                        placeholder="Apellido..."
                        required
                        className="form-input"
                        onChange={(e) => setApellido(e.target.value)}
                    />
            
                    <button
                    className=""
                    type="submit"
                    title="Registrarse"
                    name="Registrarse"
                    disabled={password.length < 6}
                    >
                    Registrarse
                    </button>
                    
                    <h3 className="signup_link">
                        ¿Ya tenes una cuenta?{" "}
                    </h3>
                    <Link to={"/Login"} className="bold">
                    <b>Ingresá acá</b>
                    </Link>
                </form>
          </div>
        </div>
      );
}

export default Registro;