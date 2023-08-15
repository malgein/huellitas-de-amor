import {
  GET_PET_BY_ID,
  GET_PET_BY_NAME,
  ORDER_BY_AGE,
  ORDER_BY_WEIGHT,
  GET_MASCOTAS,
  FETCH_MASCOTAS_REQUEST,
  FETCH_MASCOTAS_SUCCESS,
  FETCH_MASCOTAS_FAILURE
} from "./actions";

const initialState = {
  petDetail: [],
  loading: false,
  mascotas: [],
  error: null,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case FETCH_MASCOTAS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case FETCH_MASCOTAS_SUCCESS:
      return {
        ...state,
        loading: false,
        mascotas: payload,
        error: null
      };

    case FETCH_MASCOTAS_FAILURE:
      return {
        ...state,
        loading: false,
        mascotas: [],
        error: payload
      };

    case GET_MASCOTAS:
      return { ...state, mascotas: payload };

    case GET_PET_BY_ID:
      return { ...state, petDetail: payload };

    case GET_PET_BY_NAME:
      return { ...state, petDetail: payload };

    case ORDER_BY_WEIGHT:
      const sortedByWeight = [...state.mascotas].sort((a, b) => 
        payload === "ascendente" ? a.peso - b.peso : b.peso - a.peso
      );
      return {
        ...state,
        mascotas: sortedByWeight,
      };

    case ORDER_BY_AGE:
      const sortedByAge = [...state.mascotas].sort((a, b) => 
        payload === "ascendente" ? a.edad - b.edad : b.edad - a.edad
      );
      return {
        ...state,
        mascotas: sortedByAge,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;


