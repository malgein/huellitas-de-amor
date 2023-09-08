import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCasaById, getMascotas } from "../../redux/actions";
import { Carousel } from "react-responsive-carousel";
import Rate from "../Rate/Rate";
import MapaFuncional from "../Mapa/MapaFuncional";
import PetCard from "../PetCard/PetCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function CasaDeAdopcion() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCasaById(id));
    dispatch(getMascotas());
  }, [dispatch, id]);

  const pet = useSelector((state) => state.mascotas);
  const casa = useSelector((state) => state.casasDeAdopcion);

  const ubicacion = casa.ubicacion;

  return (
    <div>
      <div className="m-2 flex rounded-xl pb-32 pt-5 shadow-2x w-full">
        <div className=" w-1/3 h-[100%] ml-10 mt-20">
          <div className="rounded mr-10 ml-10">
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
                    className="rounded-lg object-cover h-[500px] w-[500px]"
                    src={fotoUrl}
                    alt={`Detalle de casa ${index + 1}`}
                  />
                ))}
            </Carousel>
          </div>
        </div>
        <div className="w-2/3 m-10 mb-0 mt-20 h-100%">
          <h1 className="m-2 text-3xl">{casa.nombreDeOng}</h1>
          <p>Contáctanos: </p>
          {/* <FontAwesomeIcon icon="fa-solid fa-envelope" /> */}

          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            {` ${casa.email}`}
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />
            {` ${casa.telefono}`}
          </p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} />
            {` ${casa.ubicacion}`}
          </p>
          <div className="h-20 flex flex-col justify-end">
            <div className="flex flex-col items-center"></div>
            <div className="ml-60 h-1/2 w-full ">
              <MapaFuncional
                /* googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAnPhpVL3wYG0rQDT3Ixnbj5u_nuhK6Z4g"
                containerElement={<div style={{ height: "400px" }} />}
                mapElement={<div style={{ height: "100%" }} />}
                loadingElement={<p>Cargando...</p>} */
                location={ubicacion}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-white w-[100%] mt-4">
        <section className=" m-0 h-[100%]  w-screen bg-white p-0 flex flex-grow items-center justify-center">
          <div className="bg-white w-[90%] h-[90%]">
            <div className="flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-20 mb-8px">
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
        </section>
      </div>
      <div>
        <Rate rating={casa.rating} commentsBD={casa.comments} id={id} />
        {console.log(casa.comments)}
      </div>
    </div>
  );
}
