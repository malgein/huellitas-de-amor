import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCasaById } from "../../redux/actions";
import { Carousel } from "react-responsive-carousel";
import Rate from "../Rate/Rate";
import { getMascotas } from "../../redux/actions";
import PetCard from "../PetCard/PetCard";

export default function CasaDeAdopcion() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCasaById(id));
    dispatch(getMascotas());
  }, [dispatch, id]);

  const pet = useSelector((state) => state.mascotas);
  const casa = useSelector((state) => state.casasDeAdopcion);
  return (
    <div>
      <div className="m-2 flex rounded-xl pb-64 pt-5 shadow-2x">
        <div className=" w-1/3 h-[100%] ml-10 mt-20">
          <div className="rounded">
            <Carousel
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              dynamicHeight={true}
            >
              {casa.foto &&
                casa.foto.map((fotoUrl, index) => (
                  <img
                    key={index}
                    className="rounded-lg object-cover h-[500px] w-full"
                    src={fotoUrl}
                    alt={`Detalle de casa ${index + 1}`}
                  />
                ))}
            </Carousel>
          </div>
        </div>
        <div className="w-2/3 m-10 mb-0 mt-20">
          <h1 className="m-2 text-3xl">{casa.nombreDeOng}</h1>
          <p>Contáctanos: </p>
          <p>{casa.email}</p>
          <p>{casa.telefono}</p>
          <div className="h-20 flex flex-col justify-end">
            <div className="flex flex-col items-center">
              <div className="flex-1"></div>
              <p className="p-4">Maps:</p>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-white w-[100%] mt-4">
        <section className=" m-0 h-[100%]  w-screen bg-white p-0 flex flex-grow items-center justify-center">
          <div className="bg-white w-[90%] h-[90%]">
            <div className="flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-20">
                {pet
                  .filter(
                    (mascota) => mascota && mascota.casaDeAdopcionId === casa.id
                  )
                  .map((mascota) => (
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
                  ))}
              </div>
              {/* <div className="pt-[20px] flex justify-center">
                <Paginated
                  petsPerPage={petsPerPage}
                  mascotas={mascotas?.length}
                  paginado={paginado}
                />
              </div> */}
            </div>
          </div>
          <div>{/* <Rate rating={casa.rating} id={id} /> */}</div>
        </section>
      </div>
    </div>
  );
}
