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
export const FETCHING_MASCOTAS_SUCCESS = "FETCHING_MASCOTAS_SUCCESS";
export const FETCHING_MASCOTAS_ERROR = "FETCHING_MASCOTAS_ERROR";
export const GET_ALL_HOMES = 'GET_ALL_HOMES'
export const DELETE_USERS = 'DELETE_USERS'
export const EDIT_PETS = 'EDIT_PETS'
export const DELETE_PET = 'DELETE_PET'
export const EDIT_HOUSES = 'EDIT_HOUSES'
export const DELETE_HOUSES = 'DELETE_HOUSES'

//tipo de action que me trae todos los usuarios
export const GET_USERS = 'GET_USER'

export const GET_ALL_DONATIONS = 'GET_DONATIONS'

export const ADD_MASCOTA = "ADD_MASCOTA";
export const SUBIR_IMAGENES = "SUBIR_IMAGENES";
export const LIMPIAR_IMAGENES = "LIMPIAR_IMAGENES";
export const ELIMINAR_IMAGENES = "ELIMINAR_IMAGENES";

const ENDPOINT = "http://localhost:3001/mascotas/";


export const EDIT_USER = 'EDIT_USER';



const ENDPOINT_FILTER = "http://localhost:3001/mascotas/filtro";
const ENDPOINTTYPES = "http://localhost:3001/types"; // Nota: No usaste este endpoint en las acciones presentadas
const ENDPOINTNAME = "http://localhost:3001/mascotas?name=";
// const ENDPOINTFILL = 'http://localhost:3001/fill';

const ENDPOINTNAME2 = "http://localhost:3001/mascotas/nombre?nombre=";



const handleError = (dispatch, errorType, error) => {
  console.error(error);
  dispatch({ type: errorType, payload: error.message });
};

export const getPetById = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(ENDPOINT + `/${id}`);
    dispatch({ type: GET_PET_BY_ID, payload: data });
  } catch (error) {
    handleError(dispatch, FETCHING_MASCOTAS_ERROR, error);
  }
};

export const getMascotas = () => async (dispatch) => {
  try {
    // dispatch({ type: FETCHING_MASCOTAS });
    const response = await axios.get(ENDPOINT);
    dispatch({ type: FETCHING_MASCOTAS_SUCCESS, payload: response.data });
  } catch (error) {
    handleError(dispatch, FETCHING_MASCOTAS_ERROR, error);
  }
};

export const getPetByName = (nombre) => async (dispatch) => {
  try {
    const { data } = await axios.get(ENDPOINTNAME2 + nombre);
    dispatch({ type: GET_PET_BY_NAME, payload: data });
  } catch (error) {
    handleError(dispatch, FETCHING_MASCOTAS_ERROR, error);
  }
};
//NAcho
// actions.js
// actions.js
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
        // Puedes despachar otro tipo de acción aquí si quieres manejar errores.
      });
  };
};

export const orderByWeight = (order) => (dispatch) => {
  if (order === "defecto") {
    return dispatch(getMascotas());
  }
  return dispatch({ type: ORDER_BY_WEIGHT, payload: order });
};

export const orderByAge = (order) => (dispatch) => {
  if (order === "defecto") {
    return dispatch(getMascotas());
  }
  return dispatch({ type: ORDER_BY_AGE, payload: order });
};

export const addMascota = (Mascota) => {
  return async () => {
    try {
      const response = await axios.post(`${ENDPOINT}/`, Mascota);
      return {
        type: ADD_MASCOTA,
        payload: response,
      };
    } catch (error) {
      alert(error.message);
    }
  };
};


export const getUsers = () => async(dispatch) => {
  try{
    const response =  await axios.get('http://localhost:3001/usuario')
    dispatch({
      type: GET_USERS,
      payload: response.data
    })
  } catch(error){
    handleError(dispatch, GET_USERS, error)
  }
}

export const getAllHomes = () => async(dispatch) => {
  try{
    const response =  await axios.get('http://localhost:3001/casaDeAdopcion')
    dispatch({
      type: GET_ALL_HOMES,
      payload: response.data
    })
  } catch(error){
    handleError(dispatch, GET_ALL_HOMES, error)
  }
}

export const getDonations = () => async(dispatch) => {
  try{
    const response =  await axios.get('http://localhost:3001/donaciones/')
    dispatch({
      type: GET_ALL_DONATIONS,
      payload: response.data
    })
  } catch(error){
    handleError(dispatch, GET_ALL_DONATIONS, error)
  }
}

export const editUser = (id, updatedData)  => {
  const endpoint = `http://localhost:3001/usuario/${id}`;

  return (dispatch) => {
    axios.patch(endpoint, updatedData).then(({ data }) => {
      return dispatch({
        type: EDIT_USER,
        payload: data,
      });
    });
  };
} 

export const deleteUsers = (id) => {
  const endpoint = `http://localhost:3001/usuario/${id}`;
   return (dispatch) => {
      axios.delete(endpoint).then(({ data }) => {
         return dispatch({
            type: DELETE_USERS,
            payload: data,
      });
      });
   };
}


export const editPets = (id, updatedData)  => {
  const endpoint = `http://localhost:3001/mascotas/${id}`;

  return (dispatch) => {
    axios.patch(endpoint, updatedData).then(({ data }) => {
      return dispatch({
        type: EDIT_PETS,
        payload: data,
      });
    });
  };
} 

export const deletePets = (id) => {
  const endpoint = `http://localhost:3001/mascotas/${id}`;
   return (dispatch) => {
      axios.delete(endpoint).then(({ data }) => {
         return dispatch({
            type: DELETE_PET,
            payload: data,
      });
      });
   };
}

export const editHouses = (id) => {
  const endpoint = `http://localhost:3001/casaDeAdopcion/${id}`;

  return (dispatch) => {
    axios.patch(endpoint, updatedData).then(({ data }) => {
      return dispatch({
        type: EDIT_USER,
        payload: data,
      });
    });
  }; 
}

export const deleteHouses = (id) => {
  const endpoint = `http://localhost:3001/casaDeAdopcion/${id}`;
   return (dispatch) => {
      axios.delete(endpoint).then(({ data }) => {
         return dispatch({
            type: DELETE_USERS,
            payload: data,
      });
      });
   };
}
export const subirImagenes = (imagenes) => (dispatch) => {
  return dispatch({
    type: SUBIR_IMAGENES,
    payload: imagenes,
  })
}
export const limpiarImagenes = () => {
  return {
    type: LIMPIAR_IMAGENES,
    payload: imagenes,
  }
}
export const eliminarImagenes = (imagenes) => (dispatch) => {
  return dispatch({
    /* console.log(imagenes) */
    type: ELIMINAR_IMAGENES,
    payload: imagenes,
  })
}

