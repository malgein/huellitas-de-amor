import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogsByName } from '../../redux/actions';
import { useHistory } from 'react-router-dom'; // Import useHistory hook



const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory(); // Initialize useHistory hook
  const [nombre, setNombre] = useState('');

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getDogsByName(nombre));
    history.push('/byname'); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search by name..."
        value={nombre}
        onChange={handleInputChange}
      />
      <button type="submit" disabled={!nombre}>SEARCH</button>
    </form>
  );
};

export default SearchBar;
