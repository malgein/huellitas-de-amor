import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Acciones del redux
import { getMascotas } from "../../redux/actions";

// Componentes
import PetCard from "../PetCard/PetCard";
import Sorts from "../Sorts/Sorts";
import FilterMascotas from "../FilterButtons/FilterButtons";
import Paginated from "../Paginated/Paginated";

import { Button, Image } from "@nextui-org/react";
import imagenHome from "../../assets/imageUno.png";
import CarouselComponent from "../Carousel/Carousel";

export default function Home() {
  const mascotas = useSelector((state) => state.mascotas);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  // const [petsPerPage] = useState(8); // Puesto constante ya que nunca lo modificas
  //Guardame el estado guardame cuantas Mascotas guardo por pagina, en este caso 8.
  const [petsPerPage, setPetsPerPage] = useState(8);
  //El índice de la ultima Mascota por página.

  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPet = Array.isArray(mascotas)
    ? mascotas.slice(indexOfFirstPet, indexOfLastPet)
    : [mascotas];

  const [sortPets, setSortPets] = useState([]);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Cálculos de paginación

  //FAVORITOS
  // const Favs = useSelector((state) => state.favorites);
  // const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    dispatch(getMascotas());
  }, [dispatch]); // Agregado dispatch como dependencia para evitar warnings

  // Esta es la lógica de filtrado: vamos a mostrar solo las mascotas que estan 'En adopcion' (nacho)
  const mascotasFiltradas = currentPet.filter(
    (mascota) => mascota.estado === "En adopción"
  );
  //h-screen w-screen
  return (
    <div className="x-[50px] flex justify-center items-center flex-col w-[1500px] mx-auto ">
      <div className=" flex flex-row  h-[550px] mt-12 mx-auto">
        <div className="relative w-[600px]  ">
          <div className="md:flex">
            <div className="relative">
              <Image
                width={600}
                height={500}
                alt="NextUI hero Image"
                src={imagenHome}
                className="mr-2"
              />
            </div>
            <div className="absolute left-[100px] top-[90px] z-40 -rotate-6">
              <CarouselComponent />
            </div>
          </div>
        </div>
        <div className="w-[600px] text-start ml-8 mt-10">
          <h1 className="my-10 text-black font-bold text-4xl ">
            BIENVENIDOS A HUELLITAS DE AMOR!!{" "}
          </h1>
          <h2 className="font-medium text-black text-3xl mt-4">
            Transforma vidas: adopta, ama y brinda un hogar!
          </h2>
          <br />
          <p className="text-lg">
            Descubre tiernos amigos en busca de un hogar amoroso.
          </p>
          {/* <p>
            Bienvenidos a nuestro sitio de adopción de mascotas! Nuestro objetivo es unir a estas adorables mascotas con familias cariñosas como la suya. Aqui encontrarán historias conmovedoras y fotos de los peludos que buscan un hogar.
            La adopción de una mascota es una decisión que cambia vidas, tanto para el animal como para usted. Cada ser peludo tiene su propia personalidad única y estamos aquí para ayudarles a encontrar la combinación perfecta.
            Al darle un hogar a una mascota, no solo les brindarán amor incondicional, sino que también estarán contribuyendo al bienestar de un ser necesitado. Gracias por unirse a nosotros en esta noble causa. ¡Comencemos esta emocionante aventura  juntos!
          </p> */}

          <a href="#cards">
            <Button className="border text-black mt-6 hover:bg-orange-200 bg-orange-300">
              Conoce más
            </Button>
          </a>

          {/* <Button
            href="#cards"
            className="border text-black mt-6 hover:bg-orange-200 bg-orange-400"
          >
            Conoce más
          </Button> */}
        </div>
      </div>
      <div className=" flex flex-row items-center justify-center w-[100%] mt-4 ">
        <div>
          {/* {" "} */}
          <Sorts />
        </div>

        <div id="cards">
          <FilterMascotas />
        </div>
      </div>

      <div className="flex bg-white w-[100%] mt-4">
        <section className=" m-0 h-[100%]  w-screen bg-white p-0 flex flex-grow items-center justify-center">
          <div className="bg-white w-[90%] h-[90%] ">
            <div className=" flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-20">
                {mascotasFiltradas.map(
                  (
                    mascota //aca hago llamo a la constante asi no se muestran las cards.(nacho)
                  ) => (
                    <div key={mascota.id}>
                      <PetCard
                        key={mascota.id}
                        id={mascota.id}
                        nombre={mascota.nombre}
                        edad={mascota.edad}
                        sexo={mascota.sexo}
                        descripcion={mascota.descripcion}
                        foto={mascota.foto}
                        peso={mascota.peso}
                      />
                    </div>
                  )
                )}
              </div>
              <div className="pt-[20px] pb-[20px] flex justify-center">
                <Paginated
                  petsPerPage={petsPerPage}
                  mascotas={mascotas?.length}
                  paginado={paginado}
                  onClick={setPetsPerPage}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
