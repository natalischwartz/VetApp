import { Card, Carousel } from 'react-bootstrap';
import "./QuienesSomos.css"



const QuienesSomos = () => {


  return (
    <div className=''>
        <Carousel variant="light" className='carousel-container container'>
          <Carousel.Item>

            <div className="carousel-content">
              <div className="carousel-img" >
                <img  src="/images/slide-1.jpg" alt="Responsive image" />
              </div>
              
              <div className="carousel-text">
                <h1>Somos PawClinic</h1>
                <p className="txt-carousel">
                 Una clínica veterinaria con atención integral para tu mascota.
                Desde 2019 contamos con el servicio de <b>Historia Clínica Digital</b>, permitiéndote acceder a todos los registros de consultas en un solo lugar.
              </p>
            </div>
          </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-content">
              <div className="carousel-img">
                <img  src="/images/slide-2.jpg" alt="Responsive image" />
              </div>
             
              <div className="carousel-text">
                <p className="txt-carousel">
                Disponemos de un equipo de profesionales altamente calificados y tecnología de vanguardia.
                Sabemos que la tecnología es fundamental para el crecimiento de las
                instituciones médicas y es una de nuestras
                fortalezas.
              </p>
            </div>
          </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-content">
              <div className="carousel-img">
                <img  src="/images/slide-3.jpg" alt="Responsive image" />
              </div>
              
              <div className="carousel-text">
                <p className="txt-carousel">
                Nuestras especialidades son:
                Clínica Médica / Nutrición / Cirugía General
                Diagnóstico por imágenes / Laboratorio
                Oncologia / Vacunación
              </p>
            </div>
          </div>
          </Carousel.Item>
        </Carousel>
      

      <div className='container'>
        <h3 className="section-title">
            <img src="/images/paw.svg"
          alt="Responsive image" className="logo" /> Nuestro equipo
        </h3>

        <div className="row">
          <div className="col">
            <div className="card">
              <img src="/images/especialista-1.webp" className="card-img-top" alt="Responsive image" />
              <div className="card-body">

                <h5 className="card-title"> Dra. Patricia Hernández y Dr. Nicolás Sáenz</h5>
                <p className="card-text">Clínica Médica</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src="/images/especialista-1.webp" className="card-img-top" alt="Responsive image" />
              <div className="card-body">
                <h5 className="card-title">Dra. Carla Sevilla</h5>
                <p className="card-text">Especialista en Nutrición.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src="/images/especialista-1.webp" className="card-img-top" alt="Responsive image" />
              <div className="card-body">
                <h5 className="card-title">Dr. Carlos Spina</h5>
                <p className="card-text">Traumatología y Diagnóstico por Imagénes.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src="/images/especialista-1.webp" className="card-img-top" alt="Responsive image" />
              <div className="card-body">
                <h5 className="card-title"> Dra. Andrea Diaz y Dr. Juan Goncalves</h5>
                <p className="card-text">Cirugia General</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  )

}



export default QuienesSomos;