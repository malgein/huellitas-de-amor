import { GET_PET_BY_ID } from "./actions";
const initialState = {
  petDetail: [],
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
