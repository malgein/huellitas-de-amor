import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPetByName } from "../../redux/actions";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [nombre, setNombre] = useState("");

  const handleInputChange = (event) => {
    const newNombre = event.target.value;
    setNombre(newNombre);

    dispatch(getPetByName(newNombre));
    history.push("/byname");
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search by name..."
        value={nombre}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default SearchBar;
