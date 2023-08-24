import {
  GET_PET_BY_ID,
  GET_PET_BY_NAME,
  ORDER_BY_AGE,
  ORDER_BY_WEIGHT,
  GET_MASCOTAS,
  FETCHING_MASCOTAS,
  // FETCHING_MASCOTAS_SUCCESS,
  // FETCHING_MASCOTAS_ERROR,
  APPLY_FILTERS,
  FILTERS_ERROR,
  GET_ALL_DONATIONS,
  //accion que me trae todos los usuarios
  GET_USERS,
  GET_ALL_HOMES,
  EDIT_USER,
  DELETE_USERS,
  EDIT_PETS,
  DELETE_PET,
  EDIT_HOUSES,
  DELETE_HOUSES,
  SUBIR_IMAGENES,
  LIMPIAR_IMAGENES,
  ELIMINAR_IMAGENES,
  MOD_COMPLETE_USER
} from "./actions";

const initialState = {
  petDetail: [],
  loading: false,
  mascotas: [],
  error: null,
  mascotasBackUp: [],
  usuarios: [],
  casasDeAdopcion: [],
  donaciones: [],
  imagenes: []
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


    case GET_MASCOTAS:
      return { ...state, mascotas: payload };

    case GET_PET_BY_ID:
      return { ...state, petDetail: payload };

    case GET_PET_BY_NAME:
      return { ...state, mascotas: payload };

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
      case GET_USERS:
        return{
          ...state,
          usuarios: payload
        }
        case GET_ALL_HOMES:
          return{
            ...state,
            casasDeAdopcion:payload
          }
          case GET_ALL_DONATIONS:
            return{
              ...state,
              donaciones: payload
            }
          case EDIT_USER:
            console.log(payload)
            return { ...state};  
          case DELETE_USERS:
            // console.log(payload)
            return { ...state};    
          case EDIT_PETS:
            console.log(payload)
            return { ...state};
          case DELETE_PET:
            // console.log(payload)
            return { ...state};
          case EDIT_HOUSES:
            console.log(payload)
            return { ...state};
          case DELETE_HOUSES:
            console.log(payload)
            return { ...state};
    case SUBIR_IMAGENES:
      return {...state, imagenes: payload}

    case LIMPIAR_IMAGENES: 
      return {...state, imagenes: []}
    case ELIMINAR_IMAGENES:
      /* console.log(payload) */
      return {...state, imagenes: payload}
    case MOD_COMPLETE_USER:
      console.log(payload)
      return { ...state};
    default:
      return { ...state };
  }
};

export default rootReducer;