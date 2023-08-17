import styles from "./SearchBar.module.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPetByName } from "../../redux/actions";

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
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Buscar nombre de..."
        value={nombre}
        onChange={handleInputChange}
      />
      <button type="submit" className={styles.submitButton} disabled={!nombre}>
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
