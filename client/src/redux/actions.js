import axios from "axios";

export const GET_PET_BY_ID = "GET_PET_BY_ID";
export const GET_PET_BY_NAME = "GET_PET_BY_NAME";
export const GET_MASCOTAS = "GET_MASCOTAS";
export const APPLY_FILTERS = "APPLY_FILTERS";
export const FILTERS_ERROR = "FILTERS_ERROR";
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";
export const ORDER_BY_AGE = "ORDER_BY_AGE";
export const FETCHING_MASCOTAS = "FETCHING_MASCOTAS";
export const FETCHING_MASCOTAS_SUCCESS = "FETCHING_MASCOTAS_SUCCESS";
export const FETCHING_MASCOTAS_ERROR = "FETCHING_MASCOTAS_ERROR";
export const ADD_MASCOTA = 'ADD_MASCOTA'


const ENDPOINT = "http://localhost:3001/mascotas/";
const ENDOPOINT_FILTER = "http://localhost:3001/mascotas/filtro";
const ENDPOINTTYPES = "http://localhost:3001/types";  // Nota: No usaste este endpoint en las acciones presentadas
const ENDPOINTNAME = "http://localhost:3001/mascotas?name=";


const ENDPOINTNAME2 ='http://localhost:3001/mascotas/nombre?nombre='

// export const FILL_DATABASE = 'FILL_DATABASE'

//const URL_BASE = "";


const handleError = (dispatch, errorType, error) => {
  console.error(error);
  dispatch({ type: errorType, payload: error.message });
};

export const getPetById = () => async (dispatch) => {
  try {
    const { data } = await axios.get(ENDPOINT + "/pets");
    dispatch({ type: GET_PET_BY_ID, payload: data });
  } catch (error) {
    handleError(dispatch, FETCHING_MASCOTAS_ERROR, error);
  }
};

export const getMascotas = () => async (dispatch) => {
  try {
    dispatch({ type: FETCHING_MASCOTAS });
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
export const applyFilters = (filters) => async (dispatch) => {
  try {
    const response = await axios.get(ENDOPOINT_FILTER, { params: filters });
    dispatch({ type: APPLY_FILTERS, payload: response.data });
  } catch (error) {
    handleError(dispatch, FILTERS_ERROR, error);
  }
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


