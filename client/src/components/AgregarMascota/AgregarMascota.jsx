import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@nextui-org/react";
import styles from "./AgregarMascota.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addMascota,
  eliminarImagenes,
  limpiarImagenes,
} from "../../redux/actions";
import FormInput from "../FormInput/FormInput";
import FormTextarea from "../FormTextarea/FormTextarea";
import FormSelect from "../FormSelect/FormSelect";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SubirImagenes from "../SubirImagenes/SubirImagenes";
import agregarMascotaSchema from "../../Schemas/agregarMascotaSchema";

const validationSchema = agregarMascotaSchema;

const AgregarMascota = () => {
  const [mascota, setMascota] = useState({
    nombre: "",
    especie: "",
    edad: 0,
    tamano: "",
    peso: 0,
    descripcion: "",
    foto: [],
    raza: "",
    sexo: "",
  });

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const imagenes = useSelector((state) => state.imagenes);
  const dispatchRedux = (mascota) => {
    const nuevaMascota = { ...mascota };
    nuevaMascota.foto = [...nuevaMascota.foto, ...imagenes];
    dispatch(addMascota(nuevaMascota));
    Navigate("/");
    dispatch(limpiarImagenes());
  };

  const handleSubmit = (mascota) => {
    Swal.fire({
      title: "¿Deseas agregar a la siguiente mascota?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Agregar",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(
          "Felicidades, esperamos que consiga un hogar muy pronto",
          "",
          "success"
        );
        localStorage.removeItem("formData");
        dispatchRedux(mascota);
      } else if (result.isDenied) {
        Swal.fire("La mascaota no ha sido agregada", "", "info");
      }
    });
  };

  const handleFormChange = (values) => {
    localStorage.setItem("formData", JSON.stringify(values));
    // localStorage.setItem("imagenes",JSON.stringify(imagenes))
  };

  const handleClickImages = async (clickedImage) => {
    // console.log(clickedImage);
    const updatedImages = imagenes.filter((image) => image !== clickedImage);
    dispatch(eliminarImagenes(updatedImages));
    /* console.log(updatedImages) */
  };

  const storedData = localStorage.getItem("formData");
  const tamañoOptions = ["Pequeño", "Mediano", "Grande"];
  const sexoOptions = ["Macho", "Hembra"];
  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={storedData ? JSON.parse(storedData) : mascota}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, values }) => (
          <div className={styles.form}>
            <Form onChange={handleFormChange(values)}>
              <div className={styles.tittle}>
                <h1>Agrega una nueva mascota</h1>
              </div>
              <div>
                <FormInput
                  label="Nombre"
                  name="nombre"
                  placeholder="Nombre"
                  error={errors.nombre}
                />
              </div>
              {console.log(localStorage)}
              <div>
                <FormInput
                  label="Especie"
                  name="especie"
                  error={errors.especie}
                  placeholder="Especie"
                />
              </div>
              <div>
                <FormInput
                  label="Edad"
                  placeholder="Edad"
                  name="edad"
                  error={errors.edad}
                />
              </div>
              <div>
                <FormInput
                  label="Peso"
                  placeholder="Peso"
                  name="peso"
                  error={errors.peso}
                />
              </div>
              <div>
                <FormInput
                  label="Raza"
                  placeholder="Raza"
                  name="raza"
                  error={errors.raza}
                />
              </div>
              <div>
                <FormTextarea
                  label="Descripción"
                  name="descripcion"
                  placeholder="Descripción"
                  error={errors.descripcion}
                />
              </div>

              <div className={styles.selectContainer}>
                {console.log(tamañoOptions)}
                <div>
                  <FormSelect
                    label="Tamaño"
                    name="tamano"
                    placeholder="Tamaño"
                    error={errors.tamano}
                    optionArray={tamañoOptions}
                  />
                </div>
                <div>
                  <FormSelect
                    label="Sexo"
                    name="sexo"
                    placeholder="Sexo"
                    error={errors.sexo}
                    optionArray={sexoOptions}
                  />
                </div>
              </div>
              <div>
                <SubirImagenes
                  setImagenes={(imagenes) =>
                    setMascota({ ...mascota, foto: imagenes })
                  }
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {imagenes &&
                  imagenes.map((imag) => {
                    return (
                      <img
                        onClick={() => handleClickImages(imag)}
                        src={imag}
                        alt=""
                        className="h-[80px] m-[15px]"
                      />
                    );
                  })}
              </div>
              <div className={styles.button}>
                <Button
                  type="submit"
                  color="primary"
                  disabled={isSubmitting}
                  size="lg"
                >
                  Enviar
                </Button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AgregarMascota;
