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
export const MOD_COMPLETE_USER = "MOD_COMPLETE_USER";
export const MOD_COMPLETE_PET = "MOD_COMPLETE_PET";
export const MOD_COMPLETE_HOUSE = "MOD_COMPLETE_HOUSE";
export const GET_ALL_HOMES = "GET_ALL_HOMES";
export const GET_CASA_BY_ID = "GET_CASA_BY_ID";
export const DELETE_USERS = "DELETE_USERS";
export const EDIT_PETS = "EDIT_PETS";
export const DELETE_PET = "DELETE_PET";
export const EDIT_HOUSES = "EDIT_HOUSES";
export const DELETE_HOUSES = "DELETE_HOUSES";

//tipo de action que me trae todos los usuarios
export const GET_USERS = "GET_USER";
export const GET_USERS_RELATIONS = "GET_USERS_RELATIONS";

export const GET_ALL_DONATIONS = "GET_DONATIONS";

export const ADD_MASCOTA = "ADD_MASCOTA";
export const SUBIR_IMAGENES = "SUBIR_IMAGENES";
export const LIMPIAR_IMAGENES = "LIMPIAR_IMAGENES";
export const ELIMINAR_IMAGENES = "ELIMINAR_IMAGENES";

export const LOGICAL_DELETE_PET = "LOGICAL_DELETE_PET";
export const CHANGE_PET_STATUS = "CHANGE_PET_STATUS ";
//Caso que me trae todos los usuarios de la bd con sus relaciones: donaciones, tipo de usuario, comentarios, favoritos etc
export const GET_ENTIRE_USERS = "GET_ENTIRE_USERS";
//Modifica el tipo de usuario
export const CHANGE_STATUS_USER = "CHANGE_STATUS_USER";

//aqui foto perfil
export const MOD_FOTO_PERFIL = "MOD_FOTO_PERFIL";

//ACA FORMULARIO ADOPCION
export const SUBMIT_FORM = "SUBMIT_FORM";
export const SUBMIT_FORM_SUCCESS = "SUBMIT_FORM_SUCCESS";
export const SUBMIT_FORM_FAILURE = "SUBMIT_FORM_FAILURE";

const handleError = (dispatch, errorType, error) => {
  console.error(error);
  dispatch({ type: errorType, payload: error.message });
};

export const EDIT_USER = "EDIT_USER";

// export const basename = "https://huellitas-de-amor-production-6e81.up.railway.app";
export const basename = "https://huellitas-de-amor-3.up.railway.app";

// export const basename = "http://localhost:3001";

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

//todo Nuevo
export const postCrearUsuario = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${ENDPOINT}/usuario`, user);
    console.log(data);
    dispatch({ payload: data });
  } catch (error) {
    console.log(error);
  }
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

//Para modificar foto de perfil

// export const modFotoPerfil = (id, updatedProperties) => {
//   const endpoint = `${basename}/usuario/${id}`;
//   console.log(updatedProperties);
//   return (dispatch) => {
//     axios.put(endpoint, updatedProperties).then(({ data }) => {
//       dispatch({
//         type: MOD_FOTO_PERFIL,
//         payload: data,
//       });
//     });
//   };
// };

export const modCompletePet = (id, updatedProperties) => {
  const endpoint = `${basename}/mascotas/${id}`;
  console.log(updatedProperties);
  return (dispatch) => {
    axios.put(endpoint, updatedProperties).then(({ data }) => {
      dispatch({
        type: MOD_COMPLETE_PET,
        payload: data,
      });
    });
  };
};

export const modCompleteHouse = (id, updatedProperties) => {
  const endpoint = `${basename}/casaDeAdopcion/${id}`;
  console.log(updatedProperties);
  return (dispatch) => {
    axios.put(endpoint, updatedProperties).then(({ data }) => {
      dispatch({
        type: MOD_COMPLETE_HOUSE,
        payload: data,
      });
    });
  };
};

export const logicalDeletePet = (id, estado) => async (dispatch) => {
  try {
    const response = await axios.put(`${ENDPOINT}/${id}/estado`, { estado });
    if (response.status === 200) {
      dispatch({ type: LOGICAL_DELETE_PET, payload: id });
    } else {
      console.error("Error al actualizar el estado de la mascota:", response);
    }
  } catch (error) {
    console.error("Error al actualizar el estado de la mascota:", error);
  }

  //Traemos todos los usuarios y sus relaciones
};

//Accion que me trare el usuario con todas sus relacione
//? User validar
export const getEntireUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(`${basename}/usuario/tipoDeUsuario`);
    dispatch({
      type: GET_ENTIRE_USERS,
      payload: response.data,
    });
  } catch (error) {
    handleError(dispatch, GET_ENTIRE_USERS, error);
  }
};

export const changeStatusUser = (response) => {
  const endpoint = `${basename}/relacion-user-type`;
  console.log(response);
  return (dispatch) => {
    axios.patch(endpoint, response).then(({ data }) => {
      return dispatch({
        type: CHANGE_STATUS_USER,
        payload: data,
      });
    });
  };
};

//ACTION FORMULARIO DE ADOPCION
export const submitForm = (formData) => async (dispatch) => {
  dispatch({
    type: SUBMIT_FORM,
  });

  try {
    const response = await axios.post(`${basename}/casaDeAdopcion`, formData);

    dispatch({
      type: SUBMIT_FORM_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: SUBMIT_FORM_FAILURE,
      payload: error.message,
    });
  }
};
