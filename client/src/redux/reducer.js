import {
  GET_PET_BY_ID,
  GET_PET_BY_NAME,
  ORDER_BY_AGE,
  ORDER_BY_WEIGHT,
  GET_MASCOTAS,
  FETCHING_MASCOTAS,
  FETCHING_MASCOTAS_SUCCESS,
  FETCHING_MASCOTAS_ERROR,
  APPLY_FILTERS,
  FILTERS_ERROR,
  FILL_DATABASE,
} from "./actions";

const initialState = {
  petDetail: [],
  loading: false,
  mascotas: [],
  error: null,
  mascotasBackUp: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHING_MASCOTAS:
      return {
        ...state,
        loading: true,
        mascotas: payload,
        mascotasBackUp: payload,
      };
    case APPLY_FILTERS:
      return {
        ...state,
        mascotas: payload,
      };

    case FILTERS_ERROR:
      return {
        ...state,
        error: payload,
      };

    case FETCHING_MASCOTAS_SUCCESS:
      return {
        ...state,
        loading: false,
        mascotas: payload,
        error: null,
      };

    case FETCHING_MASCOTAS_ERROR:
      return {
        ...state,
        loading: false,
        mascotas: [],
        error: payload,
      };

    case GET_MASCOTAS:
      return { ...state, mascotas: payload };

    case GET_PET_BY_ID:
      return { ...state, petDetail: payload };

    case GET_PET_BY_NAME:
      return { ...state, mascotas: payload };

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

    // case FILL_DATABASE:
    //   console.log(payload)
    //   return{
    //     ...state
    //   }
    default:
      return { ...state };
  }
};

export default rootReducer;
