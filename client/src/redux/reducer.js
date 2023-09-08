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
  MOD_COMPLETE_PET,
  MOD_COMPLETE_HOUSE,
  LOGICAL_DELETE_PET,
  ELIMINAR_IMAGENES,
  MOD_COMPLETE_USER,
  GET_CASA_BY_ID,

  //case que me trae los usuarios con todas las relciones
  GET_ENTIRE_USERS,
  CHANGE_STATUS_USER,

  // Formulario de adopcion
  SUBMIT_FORM,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FAILURE,
} from "./actions";

const initialState = {
  userDetail: [],
  houseDetail: [],
  petDetail: [],
  loading: false,
  mascotas: [],
  error: null,
  mascotasBackUp: [],
  usuarios: [],
  casasDeAdopcion: [],
  donaciones: [],
  imagenes: [],
  formData: null,
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
    case GET_CASA_BY_ID:
      return {
        ...state,
        casasDeAdopcion: payload,
      };

    case FILTERS_ERROR:
      return {
        ...state,
        error: payload,
      };

    case GET_MASCOTAS:
      return {
        ...state,
        mascotas: payload,
      };

    case GET_PET_BY_ID:
      return {
        ...state,
        petDetail: payload,
      };

    case GET_PET_BY_NAME:
      return {
        ...state,
        mascotas: payload,
      };

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
      return {
        ...state,
        usuarios: payload,
      };

    case GET_ALL_HOMES:
      return {
        ...state,
        casasDeAdopcion: payload,
      };

    case GET_ALL_DONATIONS:
      return {
        ...state,
        donaciones: payload,
      };

    case EDIT_USER:
      return {
        ...state,
      };

    //foto de perfil
    // case FOTO_PERFIL:
    //   return {
    //     ...state,
    //   };

    case DELETE_USERS:
      return {
        ...state,
      };

    case EDIT_PETS:
      return {
        ...state,
      };

    case DELETE_PET:
      return {
        ...state,
      };

    case EDIT_HOUSES:
      return {
        ...state,
      };

    case DELETE_HOUSES:
      return {
        ...state,
      };

    case SUBIR_IMAGENES:
      return {
        ...state,
        imagenes: payload,
      };

    case LIMPIAR_IMAGENES:
      return {
        ...state,
        imagenes: [],
      };

    case ELIMINAR_IMAGENES:
      return {
        ...state,
        imagenes: payload,
      };

    case MOD_COMPLETE_USER:
      console.log(payload);
      return { ...state };
    case MOD_COMPLETE_PET:
      console.log(payload);
      return { ...state };
    case MOD_COMPLETE_HOUSE:
      console.log(payload);
      return { ...state };
    case GET_ENTIRE_USERS:
      return {
        ...state,
        usuarios: payload,
      };
    case CHANGE_STATUS_USER:
      console.log(payload);
      return { ...state };
    default:
      return {
        ...state,
      };

    case LOGICAL_DELETE_PET:
      console.log("LOGICAL_DELETE_PET llamado con payload:", payload);
      return {
        ...state,
        mascotas: state.mascotas.map((mascota) =>
          mascota.id === payload
            ? { ...mascota, estado: "En adopción" }
            : mascota
        ),
      };
    case SUBMIT_FORM:
      return {
        ...state,
        loading: true,
      };
    case SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        formData: action.payload,
        error: null,
      };
    case SUBMIT_FORM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  }
};

export default rootReducer;
