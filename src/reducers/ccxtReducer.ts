import { ActionTypes } from "actions/types";
// import { IDishesState, FetchDishesAction } from "interfaces";
//import * as consts from "consts";

const initialState = {
  fetching: false,
  asks: [],
  bids: [],
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.API_REQUEST:
      return { ...state, fetching: true };

    case ActionTypes.API_SUCCESS:
      return {
        ...state,
        fetching: false,
        bids: action.payload.bids,
        asks: action.payload.asks,
      };

    case ActionTypes.API_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
