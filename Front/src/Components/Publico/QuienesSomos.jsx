import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/Components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Card } from "react-bootstrap";
import * as React from "react";
import './QuienesSomos.css';

const slides = [
  {
    title: "Somos PawClinic",
    image: "images/slide-1.jpg",
    description: (
      <>
        {" "}
        <span className="title-h2">
        Una clínica veterinaria con atención integral para tu mascota.
        Desde 2019 contamos con el servicio de <b>Historia Clínica Digital</b>, permitiéndote acceder a todos los registros de consultas en un solo lugar.
        </span>
      </>
    ),
  },
  {
    title: "Nuestro equipo",
    image: "images/slide-2.jpg",
    description: (
      <>
        Disponemos de un equipo de profesionales altamente calificados y tecnología de vanguardia.{" "}
        <span className="title-h2">
          Sabemos que la tecnología es fundamental para el crecimiento de las instituciones médicas y es una de nuestras fortalezas.
        </span>
      </>
    ),
  },
  {
    title: "Especialidades",
    image: "/images/slide-3.jpg",
    description: (
      <>
        Disponemos de un equipo de profesionales altamente calificados y tecnología de vanguardia.{" "}
        <span className="title-h2">
        Nuestras especialidades son: Clínica Médica / Nutrición /
                Cirugía General Diagnóstico por imágenes / Laboratorio Oncologia
                / Vacunación
        </span>
      </>
    ),
  },
];


const QuienesSomos = () => {
  const [api, setApi] = React.useState(null);

  // Slider navigation handlers
  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <>
      <section className="py-8 md:py-20 w-full flex flex-col items-center bg-white">
      <div className="max-w-4xl w-full mx-auto px-4">
        <Carousel setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            {slides.map((slide, i) => (
              <CarouselItem key={i}>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 min-h-[320px]">
                  {/* Foto circular */}
                  <div className="relative w-90 h-90 md:w-90 md:h-90 flex-shrink-0 flex justify-center items-center">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="rounded-full object-cover w-full h-full shadow-md border-4 border-white"
                    />
                    
                  </div>
                  {/* Texto & título */}
                  <div className="flex-1 flex flex-col items-center ">
                    <h2 className=" title-h2 font-bold mb-4 text-center md:text-left ">
                      {slide.title}
                    </h2>
                    <p className=" txt-carousel leading-relaxed text-center md:text-left">{slide.description}</p>
                  </div>
                  
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Botón Next para mobile */}
          {slides.length > 1 && (
            <div className="flex w-full justify-center gap-4 mt-4">
              <Button variant="outline" size="icon" onClick={scrollPrev} className="bg-white/70 border-none">
                <ArrowLeft className="text-[#1A1F2C]" />
              </Button>
              <Button variant="outline" size="icon" onClick={scrollNext} className="bg-white/70 border-none">
                <ArrowRight className="text-[#1A1F2C]" />
              </Button>
            </div>
          )}
        </Carousel>
      </div>
    </section>

    <section>
       <div className="container">
        <h3 className="section-title">
          <img src="/images/paw.svg" alt="Responsive image" className="logo" />{" "}
          Nuestro equipo
        </h3>

        <div className="row">
          <div className="col">
            <div className="card">
              <img
                src="/images/especialista-1.webp"
                className="card-img-top"
                alt="Responsive image"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {" "}
                  Dra. Patricia Hernández y Dr. Nicolás Sáenz
                </h5>
                <p className="card-text">Clínica Médica</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src="/images/especialista-1.webp"
                className="card-img-top"
                alt="Responsive image"
              />
              <div className="card-body">
                <h5 className="card-title">Dra. Carla Sevilla</h5>
                <p className="card-text">Especialista en Nutrición.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src="/images/especialista-1.webp"
                className="card-img-top"
                alt="Responsive image"
              />
              <div className="card-body">
                <h5 className="card-title">Dr. Carlos Spina</h5>
                <p className="card-text">
                  Traumatología y Diagnóstico por Imagénes.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src="/images/especialista-1.webp"
                className="card-img-top"
                alt="Responsive image"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {" "}
                  Dra. Andrea Diaz y Dr. Juan Goncalves
                </h5>
                <p className="card-text">Cirugia General</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      </section>
    </>
  );
};

export default QuienesSomos;