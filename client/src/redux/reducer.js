import {
  GET_PET_BY_ID,
  GET_PET_BY_NAME,
  ORDER_BY_AGE,
  ORDER_BY_WEIGHT,
  GET_MASCOTAS,
  FETCHING_MASCOTAS,
  FETCHING_MASCOTAS_SUCCESS,
  FETCHING_MASCOTAS_ERROR,
  FILL_DATABASE,
  // ADD_MASCOTA,
} from "./actions";

const initialState = {
  petDetail: [],
  loading: false,
  mascotas: [],
  error: null,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHING_MASCOTAS:
      return {
        ...state,
        loading: true,
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
      return { ...state, petDetail: payload };

      //Comente esta linea y escribe la que vinene despues de esta porque las mascotas que se buscaban por nombres es mas facil coordinar el paginado, los ordenamientos y los filtros jusntos si estan en el mismo estado en este caso mascotas
      // return { ...state, petDetail: payload };
      return { ...state, mascotas: payload };
    //En este caso se ejecuta orderByWeight y se modifica el orden de las mascotas por peso ascendente o descendentemente dependiendo de lo que se le pase al payload

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

    case FILL_DATABASE:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
