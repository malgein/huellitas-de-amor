import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import axios from "axios";
import { Input, Button } from "@nextui-org/react"; // Importamos Button en lugar de input

const libraries = ["places"];

const MapaFuncional = (props) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAnPhpVL3wYG0rQDT3Ixnbj5u_nuhK6Z4g", // Reemplaza con tu API Key de Google Maps
    libraries,
  });
  const { location } = props;
  const [direccion, setDireccion] = useState({
    calle: "",
    numero: "",
    colonia: "",
    municipio: "",
    estado: "",
    cp: "",
    pais: "",
  });
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
  const [infoWindowContent, setInfoWindowContent] = useState("");

  const [inputValue, setInputValue] = useState("");
  /* const handleChangeInput = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Llama a la función de geocodificación cuando se envía el formulario
    await geoCode(inputValue);
  }; */

  const geoCode = async (location) => {
    try {
      const response = await axios.get(
        "https://maps.googleapis.com/maps/api/geocode/json",
        {
          params: {
            address: location,
            key: "AIzaSyAnPhpVL3wYG0rQDT3Ixnbj5u_nuhK6Z4g", // Reemplaza con tu API Key de Google Maps
          },
        }
      );

      const data = response.data;
      console.log(data);
      if (data.results.length > 0) {
        const latitude = data.results[0].geometry.location.lat;
        const longitude = data.results[0].geometry.location.lng;
        setDireccion(data.results[0].formatted_address);
        setMapCenter({ lat: latitude, lng: longitude });
        setDireccion({
          calle: data.results[0].address_components[1],
          numero: data.results[0].address_components[0],
          colonia: data.results[0].address_components[2],
          municipio: data.results[0].address_components[3],
          estado: data.results[0].address_components[4],
          cp: data.results[0].address_components[6],
          pais: data.results[0].address_components[5],
        });
      }
    } catch (error) {
      console.error("Error al realizar la geocodificación:", error);
    }
  };

  useEffect(() => {
    geoCode(location);
  }, [location]);
  // Verifica si ocurrió un error al cargar la API de Google Maps
  if (loadError) {
    return <div>Error al cargar Google Maps</div>;
  }

  // Verifica si la API de Google Maps se cargó correctamente
  if (!isLoaded) {
    return <div>Cargando Google Maps...</div>;
  }

  // Si la API de Google Maps se cargó correctamente, renderiza el mapa con el marcador
  return (
    <div className="h-[100%] w-[100%]">
      {/* <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Dirección"
          variant="bordered"
          placeholder="Ingresa tu dirección"
          className="max-w-xs"
          value={inputValue}
          onChange={handleChangeInput}
        />
        <Button type="submit">Submit</Button>{" "}
      </form> */}
      <GoogleMap
        zoom={15}
        mapContainerStyle={{ width: "65%", height: "400px" }}
        center={mapCenter}
        options={{
          zoomControl: false,
          streetViewControl: true,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker
          position={mapCenter}
          onClick={() => {
            setInfoWindowOpen(true);
            setInfoWindowContent(direccion);
          }}
        />
        {infoWindowOpen && (
          <InfoWindow
            position={mapCenter}
            onCloseClick={() => setInfoWindowOpen(false)}
          >
            <div>
              <p>
                {`${direccion.calle.long_name} #${direccion.numero.long_name},`}
              </p>
              <p>{`${direccion.colonia.long_name},`}</p>
              <p>{`c.p. ${direccion.cp.long_name},`}</p>
              <p>{`${direccion.municipio.long_name},`}</p>
              <p>{`${direccion.estado.long_name}`}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default MapaFuncional;
