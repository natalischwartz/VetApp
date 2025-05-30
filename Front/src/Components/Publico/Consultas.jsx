import './Consultas.css';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook, BsTelephone, BsEnvelope } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';

const Consultas = () =>{
    return (
        <>
        <div className='container'>
            <div>
                <h1 className="titulo_consultas">¿Tenés alguna duda?</h1>
                <p className="texto-consultas">
                    Comunicate con nosotros por consultas o presupuestos y te responderemos
                    a la brevedad.
                </p>
            </div>
            <div className="contenedor-consultas">
                <div className="formContainer">
                <form
                    className="consultas_form"
                    action="mailto:veterinaria@gmail.com"
                    method="POST">

                    <label className='form-label' htmlFor="nombre">Nombre y apellido</label>
                    <input
                        type="text"
                        className="form-input"
                        name="nombre"
                        id="nombre"
                        placeholder="Nombre..."
                    />
                    
                    
                    <label className='form-label' htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-input"
                        name="email"
                        id="email"
                        placeholder="ejemplo@email.com"
                    />
                    
                  
                    <label className='form-label' htmlFor="mensaje">Mensaje</label>
                    <textarea
                        className="form-input"
                        name="mensaje"
                        id="mensaje"
                        rows="10"
                        placeholder="Deja tu mensaje aquí"
                        maxLength={200}
                    ></textarea>
                   
                    <button className="btn-consulta" type="submit">
                    Enviar
                    </button>
                </form>
                </div>
                <section className="section_consultas">
                    <div className="container_redes">
                        <div className="container_texto_redes">
                            <p className="texto_redes">Seguinos en nuestras redes!</p>
                        </div>
                        <div className="container_iconos_redes">
                            <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            className="icono_redes"
                            >
                            <AiFillInstagram size={60} />
                            </a>
                            <a
                            href="https://es-la.facebook.com/"
                            target="_blank"
                            className="icono_redes"
                            >
                            <BsFacebook size={46} />
                            </a>
                        </div>
                        <div className="datos">
                            <div className="dato_1">
                                <span>
                                <BsTelephone size={35} className="icono_dato" />
                                (011) 50505050
                                </span>
                            </div>
                            <div className="dato">
                                <span>
                                <GrLocation size={35} className="icono_dato" />
                                Av.Siempreviva 153, CABA
                                </span>
                            </div>
                            <div className="dato">
                                <span>
                                <BsEnvelope size={35} className="icono_dato" />{" "}
                                PawClinic@gmail.com
                                </span>
                            </div>
                            <div className="dato">
                                <iframe
                                id="mapa"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30661.037707976815!2d-58.4930456391672!3d-34.62141261523201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc95874c5f32d%3A0xe6eae433d07a3d57!2sav%20siempre%20viva!5e0!3m2!1ses!2sar!4v1687820007260!5m2!1ses!2sar"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </div>    
        </div>
         
        </>
      );
}

export default Consultas;