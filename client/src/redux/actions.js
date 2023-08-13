import axios from "axios";

export const GET_PET_BY_ID = "GET_PET_BY_ID";

const ENDPOINT = 'http://localhost:3001/mascotas/';
const ENDPOINTTYPES = 'http://localhost:3001/types';
const ENDPOINTNAME = 'http://localhost:3001/mascotas?name=';

export const getPetById = () => {
  return async (dispatch) => {
    await axios.get(ENDPOINT + "/pets").then(({ data }) => {
      return dispatch({ type: GET_PET_BY_ID, payload: data });
    });
  };
};
