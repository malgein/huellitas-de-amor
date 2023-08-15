import axios from "axios";

export const GET_PET_BY_ID = "GET_PET_BY_ID";
export const GET_PET_BY_NAME = "GET_PET_BY_NAME";
export const GET_MASCOTAS = "GET_MASCOTAS";

const ENDPOINT = "http://localhost:3001/mascotas/";
const ENDPOINTTYPES = "http://localhost:3001/types";
//Realmente me funciono con el endpoint : http://localhost:3001/mascotas/nombre?nombre=

//No me funciono con el siguiente endpoint
// const ENDPOINTNAME = "http://localhost:3001/mascotas?name=";

//Con este endpoint si me funciono
const ENDPOINTNAME = 'http://localhost:3001/mascotas/nombre?nombre='

//Endpoint para rellenar la base de datos con datos de mascotas X
const ENDPOINTFILL = 'http://localhost:3001/fill'

//hice el axtions para el filtrado (Nacho)
export const APPLY_FILTERS = "APPLY_FILTERS";
export const FILTERS_ERROR = "FILTERS_ERROR";
//Acciones para los ordenamientos - Wilmer

export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";
export const ORDER_BY_AGE = "ORDER_BY_AGE";

// export const FILL_DATABASE = 'FILL_DATABASE'

//const URL_BASE = "";

export const getPetById = () => {
  return async (dispatch) => {
    await axios.get(ENDPOINT + "/pets").then(({ data }) => {
      return dispatch({ type: GET_PET_BY_ID, payload: data });
    });
  };
};

export const getMascotas = () => {
  return async (dispatch) => {
    const response = await axios.get(ENDPOINT);
    return dispatch({ type: GET_MASCOTAS, payload: response.data });
  };
};

export const getPetByName = (nombre) => {
  return async (dispatch) => {
    await axios.get(ENDPOINTNAME + nombre).then(({ data }) => {
      return dispatch({ type: GET_PET_BY_NAME, payload: data });
    });
  };
};

// Actions de filtros para el FilterButtons (Nacho)
export const applyFilters = (filters) => async (dispatch) => {
  try {
    const response = await axios.get("/mascotas", { params: filters });
    dispatch({
      type: APPLY_FILTERS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FILTERS_ERROR,
      payload: error.message,
    });
  }
};

export const orderByWeight = (order) => {
  return async (dispatch) => {
    if (order === "defecto") {
      return dispatch(getMascotas()); // Obtener las mascotas en su orden original
    }
    return dispatch({
      type: ORDER_BY_WEIGHT,
      payload: order,
    });
  };
};

export const orderByAge = (order) => {
  return async (dispatch) => {
    if (order === "defecto") {
      return dispatch(getMascotas()); // Obtener las mascotas en su orden original
    }
    return dispatch({
      type: ORDER_BY_AGE,
      payload: order,
    });
  };
};

// //action que rellena la base de datos con mascotas x
// export const fillDatabase = () => {
// 	return async function(dispatch){
// 		let response = await axios.get(ENDPOINTFILL)
// 		return dispatch({
// 			type: FILL_DATABASE,
// 			payload: response.data
// 		})
// 	}
// }
