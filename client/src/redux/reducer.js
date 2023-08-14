import {
  GET_PET_BY_ID,
  GET_PET_BY_NAME,
  APPLY_FILTERS,
  FILTERS_ERROR,
  ORDER_BY_RACE,
  ORDER_BY_AGE,
  ORDER_BY_WEIGHT,
  GET_MASCOTAS,
} from "./actions";
const initialState = {
  petDetail: [],
  //hago la peticion GET a '/mascotas' (nacho)
  mascotas: [],
  error: null,
};
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MASCOTAS:
      return { ...state, mascotas: payload };
    case GET_PET_BY_ID:
      return { ...state, petDetail: payload };

    case GET_PET_BY_NAME:
      return { ...state, mascotas: payload };

    case ORDER_BY_WEIGHT:
      let weightResult = [];
      if (payload === "ascendente") {
        const ascendingWeight = [...state.mascotas].sort(
          (a, b) => a.peso - b.peso
        );
        weightResult = [...ascendingWeight];
      } else if (payload === "descendente") {
        const descendingWeight = [...state.mascotas].sort(
          (a, b) => b.peso - a.peso
        );
        weightResult = [...descendingWeight];
      } else if (payload === "defecto") {
        weightResult = [];
      }
      return {
        ...state,
        mascotas: weightResult,
      };

    case ORDER_BY_AGE:
      let ageResult = [];
      if (payload === "ascendente") {
        const ascendingAge = [...state.mascotas].sort(
          (a, b) => a.edad - b.edad
        );
        ageResult = [...ascendingAge];
      } else if (payload === "descendente") {
        const descendingAge = [...state.mascotas].sort(
          (a, b) => b.edad - a.edad
        );
        ageResult = [...descendingAge];
      } else if (payload === "defecto") {
        ageResult = [];
      }
      return {
        ...state,
        mascotas: ageResult,
      };

    default:
      return { ...state };
  }
};
export default rootReducer;
