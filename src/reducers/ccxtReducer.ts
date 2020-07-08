import { ActionTypes } from "actions/types";
import { IState } from "interfaces";
import { Action } from "redux";

const initialState: IState = {
  loading: false,
  asks: ["", ""],
  bids: ["", ""],
  error: "",
};

interface IAction extends Action {
  payload: any;
  error: string;
}

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.API_REQUEST:
      return { ...state, loading: true };

    case ActionTypes.API_SUCCESS:
      return {
        ...state,
        loading: false,
        bids: action.payload.bids,
        asks: action.payload.asks,
      };

    case ActionTypes.API_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
