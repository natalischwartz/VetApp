import { Link } from "react-router-dom";
import "./Inicio.css";

const Inicio = () => {
  return (
    <>
      <div className="div_img_inicio">
        <div className="img_text_inicio">
          <h1 className="titulo_inicio">Tu mascota,<br/> nuestra prioridad</h1>

          <div className="parrafo_container">
            <p className="parrafo_inicio">
              Clínica veterinaria integral, líderes en atención <br/> especializada
              para tu mascota.<br/> Agenda tu consulta hoy mismo.
            </p>

            <div>
              <Link>
                <button id="btn-consulta-inicio">Agendar Turno</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="container">
        <h2 id="titulo_secundario_inicio">Nuestros Servicios</h2>
        <div className="services_container">
                    <div className="services_content">
                        <i className="fa-solid fa-user-doctor services_img"></i>
                        <h3 className="services_title ">Especialistas</h3>
                        <p className="services_description">Ofrecemos diagnósticos precisos y tratamientos avanzados para garantizar la salud y el bienestar de tu mascota en cada etapa de su vida.</p>
                    </div>

                    <div className="services_content">
                        <i className="fa-solid fa-house-medical-circle-check services_img"></i>
                        <h3 className="services_title ">Internación</h3>
                        <p className="services_description">
                        Contamos con instalaciones equipadas para proporcionar confort y seguridad, asegurando que cada paciente reciba los cuidados necesarios durante su recuperación.
                        </p>
                    </div>

                    <div className="services_content">
                        <i className="fa-solid fa-kit-medical services_img"></i>
                        <h3 className="services_title ">Cirugía</h3>
                        <p className="services_description">Brindamos anestesia segura, monitoreo constante y un plan de recuperación personalizado para que tu mascota vuelva a casa en óptimas condiciones. Su salud es nuestra prioridad. </p>
                    </div>

                   
                   
                </div>
      </section>

      
      
    </>
  );
};

export default Inicio;
