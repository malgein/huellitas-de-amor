import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import axios from "axios";
import { Input } from "@nextui-org/react";

const libraries = ["places"];
const MapaFuncional = (props) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDlpEzse2grYOeoEHe8oP129yxGuruqx0A",
    libraries, // Reemplaza con tu API Key de Google Maps
  });

  const [direccion, setDireccion] = useState("");
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    // Función para realizar la geocodificación
    const geoCode = async () => {
      var location = "Playa 227 Nueva Morelos Monterrey"; // Tu dirección o coordenadas aquí
      await axios
        .get("https://maps.googleapis.com/maps/api/geocode/json", {
          params: {
            address: location,
            key: "AIzaSyBUl_bwLN4kjK-h_x8ZrQphLdaV9rfzeMo",
          },
        })
        .then(function ({ data }) {
          console.log(data);
          const latitude = data.results[0].geometry.location.lat;
          const longitude = data.results[0].geometry.location.lng;
          setDireccion(data.results[0].formatted_address);
          setMapCenter({ lat: latitude, lng: longitude });
        });
    };

    if (isLoaded) {
      geoCode(); // Llama a la función de geocodificación cuando la API de Google Maps esté cargada
    }
  }, [isLoaded]);

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
      {/* <div>
        <Autocomplete>
          <Input
            type="text"
            label="Dirección"
            variant="bordered"
            defaultValue="Ingresa tu dirección"
            className="max-w-xs"
          />
        </Autocomplete>
      </div> */}
      <GoogleMap
        zoom={15}
        mapContainerStyle={{ width: "65%", height: "1200%" }}
        options={{
          zoomControl: false,
          streetViewControl: true,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker position={mapCenter} />
      </GoogleMap>
    </div>
  );
};

export default MapaFuncional;
