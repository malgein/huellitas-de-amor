import { GET_PET_BY_ID, APPLY_FILTERS, FILTERS_ERROR } from "./actions";
const initialState = {
  petDetail: [],
  //hago la peticion GET a '/mascotas' (nacho)
  mascotas: [],
  error: null,
};
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PET_BY_ID:
      return { ...state, petDetail: payload };
    default:
      return { ...state };
  }
};
export default rootReducer;
