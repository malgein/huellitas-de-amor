import axios from "axios";

export const GET_PET_BY_ID = "GET_PET_BY_ID";

//hice el axtions para el filtrado (Nacho)
export const APPLY_FILTERS = 'APPLY_FILTERS';
export const FILTERS_ERROR = 'FILTERS_ERROR';

const URL_BASE = "";

export const getPetById = () => {
  return async (dispatch) => {
    await axios.get(URL_BASE + "/pets").then(({ data }) => {
      return dispatch({ type: GET_PET_BY_ID, payload: data });
    });
  };
};


// Actions de filtros para el FilterButtons (Nacho)
export const applyFilters = (filters) => async (dispatch) => {
  try {
    const response = await axios.get('/mascotas', { params: filters });
    dispatch({
      type: APPLY_FILTERS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: FILTERS_ERROR,
      payload: error.message
    });
  }
};