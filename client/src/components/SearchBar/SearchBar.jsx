import styles from "./SearchBar.module.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPetByName } from "../../redux/actions";
import { Input, Button } from "@nextui-org/react";

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
      <Button type="submit" disabled={!nombre} color="warning" size="md">
        Buscar
      </Button>
    </form>
  );
};

export default SearchBar;
