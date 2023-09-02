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
import imageDos from "../../assets/gata.jpg";
// import imagenDos from "../../assets/gata.jpg";
// import Rate from "../Rate/Rate";

export default function Home() {
  const mascotas = useSelector((state) => state.mascotas);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [petsPerPage] = useState(8); // Puesto constante ya que nunca lo modificas
  //Guardame el estado guardame cuantas Mascotas guardo por pagina, en este caso 8.
  //const [petsPerPage, setPetsPerPage] = useState(8);
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
      <div className="flex flex-row  h-[550px] mt-12 mx-auto">
        <div className="relative w-[600px]  ">
          <div className="md:flex">
            <div className="md:shrink-0">
              <Image
                width={600}
                height={500}
                alt="NextUI hero Image"
                src={imagenHome}
                className=" relative mr-2"
              />
            </div>

            <div className="absolute left-[200px] top-[58px]">
              <Image width={230} src={imageDos} className="-rotate-12" />
            </div>
          </div>
        </div>
        <div className="w-[600px] text-start ml-8">
          <h1 className="my-12">ADOPTAME</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            itaque tempora ex in assumenda qui cum, commodi veritatis quidem,
            exercitationem eligendi earum tempore a dolorum eos laborum aperiam
            repellat at. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Numquam vero praesentium dicta fugit facilis modi consequatur
            dolor deserunt cum necessitatibus. Fugiat numquam alias illo rem.
            Iusto rem corrupti ipsa eum.
          </p>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
          <Button className="border border-black text-black mt-6 bg-white hover:bg-slate-100">
            Adoptame
          </Button>
        </div>
      </div>
      <div className=" flex flex-row items-center justify-center w-[100%] mt-4 ">
        <div>
          {/* {" "} */}
          <Sorts />
        </div>

        <div>
          <FilterMascotas />
        </div>
      </div>

      {/* <header className="m-0 h-[10%] w-screen bg-white p-0">
        Se parece que tienes un NavBar comentado. Si no lo usas, puedes eliminar este bloque.
        algo
      </header> */}
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
              <div className="pt-[20px] flex justify-center">
                <Paginated
                  petsPerPage={petsPerPage}
                  mascotas={mascotas?.length}
                  paginado={paginado}
                />
                {/* <Pagination total={currentPage} initialPage={1} /> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
