import { GET_PET_BY_ID } from "./actions";
const initialState = {
  pets: [],
};
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PET_BY_ID:
      break;

    default:
      break;
  }
};
export default rootReducer;
