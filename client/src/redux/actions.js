import axios from "axios";

export const GET_PET_BY_ID = "GET_PET_BY_ID";
export const GET_PET_BY_NAME = "GET_PET_BY_NAME";
export const GET_MASCOTAS = "GET_MASCOTAS";

const ENDPOINT = "http://localhost:3001/mascotas/";
const ENDPOINTTYPES = "http://localhost:3001/types";
const ENDPOINTNAME = "http://localhost:3001/mascotas?name=";

//hice el axtions para el filtrado (Nacho)
export const APPLY_FILTERS = "APPLY_FILTERS";
export const FILTERS_ERROR = "FILTERS_ERROR";
//Acciones para los ordenamientos - Wilmer
export const ORDER_BY_RACE = "ORDER_BY_RACE";
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";
export const ORDER_BY_AGE = "ORDER_BY_AGE";

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
  return {
    type: ORDER_BY_WEIGHT,
    payload: order,
  };
};

export const orderByRace = (order) => {
  return {
    type: ORDER_BY_RACE,
    payload: order,
  };
};

export const orderByAge = (order) => {
  return {
    type: ORDER_BY_AGE,
    payload: order,
  };
};
