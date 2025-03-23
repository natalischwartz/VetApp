import { Link } from "react-router-dom";
import "./Adopciones.css";
import { useState, useEffect} from "react";
import { collection, getDocs} from "firebase/firestore";
import { db } from "../../firebaseConfig/firebase.js";
import {
  FadeLoader
} from 'react-spinners'



const Adopciones = () => {
  const [loading, setLoading] = useState(true);
  const [adopciones, setAdopciones] = useState([]);

  const adopcionesCollection = collection(db, `/Adopciones`);


  const getAdopciones = async () => {
    const data = await getDocs(adopcionesCollection);
    console.log(data.docs); 
    setAdopciones(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false)
  };

  useEffect(() => {
    setLoading(true)
    getAdopciones();
  }, []);


  if (loading) {
    return (
        <div className='loader_container'>
            <FadeLoader />
        </div>)
}

console.log(adopciones);

  return (
    <>
      <div id="container">
        <div id="intro_adopciones">
          <h1 className="titulo_pagina">
            ¡Suma a un nuevo integrante a tu familia!
          </h1>
          <p>
            Adoptando estas salvando la vida de un animal rescatado. Adoptar es
            un acto de increíble amor y responsabilidad, por eso es necesario
            estar completamente seguros de que estamos listos para tener una
            mascota. Un animal de compañía dependerá toda su vida de nosotros.
            <br />
            Si ya lo decidiste y te sentís capacitado es momento de comenzar con
            el proceso de adopcion. ¡Completá el formulario y nos contactaremos!
          </p>
          <Link to={"/formulario"}>
          <div>
            <button className="botones_adoptar" id="form_adop1">
              ¡Quiero adoptar!
            </button>
          </div>
          </Link>
        </div>
        <div id="contenedor_adopciones">
          {adopciones.map((adopcion) => (
            <div className="tarjeta_adopciones" key={adopcion.id}>
              <div className="tarjeta_adopciones_cuerpo">
                  <img className="img-responsive" src={adopcion.Foto} alt=""/>
              </div>
              <div className="tarjeta_adopciones_titulo">{adopcion.Nombre}</div>
              <div className="tarjeta_adopciones_pie">
                <Link to={`/adopcion/${adopcion.id}`}><button>Más información</button></Link>
              </div>
              <div className="tarjeta_adopciones_bot">
                {/* <LogInLinks isUserLoggedIn={isUserLoggedIn} id={adopcion.id} getAdopciones={getAdopciones}></LogInLinks> */}
              </div>
            </div>
          ))}
        </div>

        {/* {isAdmin && (
            <Link to={"/agregarAdopcion"}>
                <button id="boton-agregar-adopcion">Agregar nueva Adopción</button>
            </Link>
        )} */}

        
          <Link to={"/formulario"}>
          <div className="text-center mb-2">
            <button className="botones_adoptar" id="form_adop2">
                ¡Quiero adoptar!
                </button>
            </div>
          </Link>
     
      </div>
    </>
  );
};

export default Adopciones;
