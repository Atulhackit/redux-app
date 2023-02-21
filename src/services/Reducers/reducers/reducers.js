import { ADD_TO_CART } from "../../constants";

const initialState = 0

export default function cardItems  (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return state+1
      ;
      break;
    default:
      return state;
  }
};

