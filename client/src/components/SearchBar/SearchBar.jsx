import styles from "./SearchBar.module.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPetByName } from "../../redux/actions";
import { Input, Button } from "@nextui-org/react";
import Swal from "sweetalert2";

const SearchBar = () => {
  const dispatch = useDispatch();

  const mascotas = useSelector((state) => state.mascotas);
  const [nombre, setNombre] = useState("");

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getPetByName(nombre));
    setNombre("");

    Swal.fire({
      title: "Búsqueda completada",
      text:
        mascotas.length > 0
          ? `Se han encontrado  mascota/s con el nombre "${nombre}".`
          : `No se encontraron mascotas con el nombre "${nombre}".`,
      icon: mascotas.length > 0 ? "success" : "info",
      confirmButtonText: "OK",
    });
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <Input
        className="rounded-ss-sm"
        isClearable
        variant="bordered"
        type="text"
        label="Buscar nombre de..."
        onChange={handleInputChange}
        value={nombre}
        size="sm"
      />
      {/* <input
        type="text"
        className={styles.searchInput}
        placeholder="Buscar nombre de..."
        value={nombre}
        onChange={handleInputChange}
      /> */}
      {/* <button type="submit" className={styles.submitButton} disabled={!nombre}>
        Buscar
      </button> */}
      <Button
        type="submit"
        disabled={!nombre}
        color="warning"
        size="md"
        className="ml-2"
      >
        Buscar
      </Button>
    </form>
  );
};

export default SearchBar;
