import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imagenUno from "../../assets/jonas-vincent-xulIYVIbYIc-unsplash.jpg";
import imagenDos from "../../assets/imagenMascota4-min.jpg";
import imagenTres from "../../assets/imagenMascota3-min.jpg";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Cambiar 3 por el número de imágenes en tu carrusel
    }, 4000); // Cambiar 3000 por el tiempo de intervalo deseado (en milisegundos)

    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel
      selectedItem={currentIndex}
      onChange={(index) => setCurrentIndex(index)}
      autoPlay
      infiniteLoop
      interval={5000} // Tiempo de cambio automático de imagen (en milisegundos)
      className="w-[400px] rounded-lg

      "
      showThumbs={false}
    >
      <div>
        <img
          src={imagenUno}
          alt="Imagen 1"
          className="rounded-lg  h-[280px]"
        />
      </div>
      <div>
        <img src={imagenDos} alt="Imagen 2" className="rounded-lg" />
      </div>
      <div>
        <img src={imagenTres} alt="Imagen 3" className="rounded-lg" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
