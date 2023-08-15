import {
  GET_PET_BY_ID,
  GET_PET_BY_NAME,
  APPLY_FILTERS,
  FILTERS_ERROR,
  ORDER_BY_AGE,
  ORDER_BY_WEIGHT,
  GET_MASCOTAS,
  // FILL_DATABASE
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
      //Comente esta linea y escribe la que vinene despues de esta porque las mascotas que se buscaban por nombres es mas facil coordinar el paginado, los ordenamientos y los filtros jusntos si estan en el mismo estado en este caso mascotas
      // return { ...state, petDetail: payload };
      return { ...state, mascotas: payload };
//En este caso se ejecuta orderByWeight y se modifica el orden de las mascotas por peso ascendente o descendentemente dependiendo de lo que se le pase al payload
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
      } 
      return {
        ...state,
        mascotas: weightResult,
      };
    //En este caso se ejecuta orderByAge y se modifica el orden de las mascotas por edad ascendente o descendentemente dependiendo de lo que se le pase al payload
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
      } 
      return {
        ...state,
        mascotas: ageResult,
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
