import axios from "axios";

export const GET_PET_BY_ID = "GET_PET_BY_ID";

const URL_BASE = "";

export const getPetById = () => {
  return async (dispatch) => {
    await axios.get(URL_BASE + "/pets").then(({ data }) => {
      return dispatch({ type: GET_PET_BY_ID, payload: data });
    });
  };
};
