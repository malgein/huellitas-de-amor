import axios from "axios";

export const GET_PET_BY_ID = "GET_PET_BY_ID";
export const GET_PET_BY_NAME = "GET_PET_BY_NAME";
export const GET_MASCOTAS = "GET_MASCOTAS";

//hice el axtions para el filtrado (Nacho)
export const APPLY_FILTERS = "APPLY_FILTERS";
export const FILTERS_ERROR = "FILTERS_ERROR";
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";
export const ORDER_BY_AGE = "ORDER_BY_AGE";
export const FETCHING_MASCOTAS = "FETCHING_MASCOTAS";

export const GET_ALL_HOMES = "GET_ALL_HOMES";
export const GET_CASA_BY_ID = "GET_CASA_BY_ID";
export const DELETE_USERS = "DELETE_USERS";
export const EDIT_PETS = "EDIT_PETS";
export const DELETE_PET = "DELETE_PET";
export const EDIT_HOUSES = "EDIT_HOUSES";
export const DELETE_HOUSES = "DELETE_HOUSES";
export const MOD_COMPLETE_USER = "MOD_COMPLETE_USER";

//tipo de action que me trae todos los usuarios
export const GET_USERS = "GET_USER";

export const GET_ALL_DONATIONS = "GET_DONATIONS";

export const ADD_MASCOTA = "ADD_MASCOTA";
export const SUBIR_IMAGENES = "SUBIR_IMAGENES";
export const LIMPIAR_IMAGENES = "LIMPIAR_IMAGENES";
export const ELIMINAR_IMAGENES = "ELIMINAR_IMAGENES";
export const LOGICAL_DELETE_PET = "LOGICAL_DELETE_PET";
export const CHANGE_PET_STATUS = "CHANGE_PET_STATUS ";

export const EDIT_USER = "EDIT_USER";
const basename = "https://huellitas-de-amor-production.up.railway.app";
// const basename = "http://localhost:3001";
const ENDPOINT = `${basename}/mascotas`;
const ENDPOINT_FILTER = `${basename}/mascotas/filtro`;
const ENDPOINTNAME2 = `${basename}/mascotas/nombre?nombre=`;
const ENDPOINTNAME = `${basename}/mascotas?name=`;

export const getPetById = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(ENDPOINT + `/${id}`);
    dispatch({ type: GET_PET_BY_ID, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getCasaById = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${basename}/casaDeAdopcion/${id}`);
    dispatch({ type: GET_CASA_BY_ID, payload: data });
  } catch (error) {
    console.log(error);
  }
};

//Guardo todas las mascotas
export const getMascotas = () => async (dispatch) => {
  try {
    const response = await axios.get(ENDPOINT);

    dispatch({ type: FETCHING_MASCOTAS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

//Busco las mascotas por la query que recibo
export const getPetByName = (nombre) => async (dispatch) => {
  try {
    const { data } = await axios.get(ENDPOINTNAME2 + nombre);
    dispatch({ type: GET_PET_BY_NAME, payload: data });
  } catch (error) {
    console.log(error);
  }
};

//Filtros para las mascotas
export const applyFilters = (filters) => {
  return (dispatch, getState) => {
    // const BACKEND_URL = "http://localhost:3001";

    axios
      .get(`${ENDPOINT_FILTER}`, { params: filters })
      .then((response) => {
        dispatch({
          type: APPLY_FILTERS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const orderByWeight = (order) => (dispatch) => {
  if (order === "defecto") {
    return dispatch(getMascotas());
  }
  return dispatch({ type: ORDER_BY_WEIGHT, payload: order });
};

//Ordena las mascotas segun la edad, de menor a mayor o veceversa
export const orderByAge = (order) => (dispatch) => {
  if (order === "defecto") {
    return dispatch(getMascotas());
  }
  return dispatch({ type: ORDER_BY_AGE, payload: order });
};

//Agrega una nueva mascota
export const addMascota = (Mascota) => {
  return async () => {
    try {
      const response = await axios.post(`${ENDPOINT}/`, Mascota);

      return alert("Mascota creada con éxito.");
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(`${basename}/usuario`);
    dispatch({
      type: GET_USERS,
      payload: response.data,
    });
  } catch (error) {
    handleError(dispatch, GET_USERS, error);
  }
};

export const getAllHomes = () => async (dispatch) => {
  try {
    const response = await axios.get(`${basename}/casaDeAdopcion`);
    dispatch({
      type: GET_ALL_HOMES,
      payload: response.data,
    });
  } catch (error) {
    handleError(dispatch, GET_ALL_HOMES, error);
  }
};

export const getDonations = () => async (dispatch) => {
  try {
    const response = await axios.get(`${basename}/donaciones`);
    dispatch({
      type: GET_ALL_DONATIONS,
      payload: response.data,
    });
  } catch (error) {
    handleError(dispatch, GET_ALL_DONATIONS, error);
  }
};

export const editUser = (id, updatedData) => {
  const endpoint = `${basename}/usuario/${id}`;

  return (dispatch) => {
    axios.patch(endpoint, updatedData).then(({ data }) => {
      return dispatch({
        type: EDIT_USER,
        payload: data,
      });
    });
  };
};

export const deleteUsers = (id) => {
  const endpoint = `${basename}/usuario/${id}`;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: DELETE_USERS,
        payload: data,
      });
    });
  };
};

export const editPets = (id, updatedData) => {
  const endpoint = `${basename}/mascotas/${id}`;

  return (dispatch) => {
    axios.patch(endpoint, updatedData).then(({ data }) => {
      return dispatch({
        type: EDIT_PETS,
        payload: data,
      });
    });
  };
};

export const deletePets = (id) => {
  const endpoint = `${basename}/mascotas/${id}`;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: DELETE_PET,
        payload: data,
      });
    });
  };
};

export const editHouses = (id, updatedData) => {
  const endpoint = `${basename}/casaDeAdopcion/${id}`;

  return (dispatch) => {
    axios.patch(endpoint, updatedData).then(({ data }) => {
      return dispatch({
        type: EDIT_USER,
        payload: data,
      });
    });
  };
};

export const deleteHouses = (id) => {
  const endpoint = `${basename}/casaDeAdopcion/${id}`;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: DELETE_USERS,
        payload: data,
      });
    });
  };
};
export const subirImagenes = (imagenes) => (dispatch) => {
  return dispatch({
    type: SUBIR_IMAGENES,
    payload: imagenes,
  });
};
export const limpiarImagenes = () => {
  return {
    type: LIMPIAR_IMAGENES,
    payload: imagenes,
  };
};
export const eliminarImagenes = (imagenes) => (dispatch) => {
  return dispatch({
    /* console.log(imagenes) */
    type: ELIMINAR_IMAGENES,
    payload: imagenes,
  });
};
export const modCompleteUser = (id, updatedProperties) => {
  const endpoint = `${basename}/usuario/${id}`;
  console.log(updatedProperties);
  return (dispatch) => {
    axios.put(endpoint, updatedProperties).then(({ data }) => {
      dispatch({
        type: MOD_COMPLETE_USER,
        payload: data,
      });
    });
  };
};
export const logicalDeletePet = (id) => async (dispatch) => {
  try {
    await axios.put(`${ENDPOINT}/${id}`, { isDeleted: true }); // Marcamos la mascota como borrada
    dispatch({ type: LOGICAL_DELETE_PET, payload: id });
  } catch (error) {
    console.log(error);
  }
};
//manejamos el estado y la visualizacion de la mascota (nacho)
export const changePetStatus = (id, estado, visible) => async (dispatch) => {
  try {
    await axios.put(`${ENDPOINT}/${id}/estado`, { estado, visible }); // Cambiar el estado y la visibilidad de la mascota
    dispatch({ type: CHANGE_PET_STATUS, payload: { id, estado, visible } });
  } catch (error) {
    console.log(error);
  }
};