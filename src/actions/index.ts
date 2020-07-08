import { ActionTypes } from "actions/types";
import ccxtAPI from "api/ccxtAPI";
import { Dispatch } from "redux";
import { OrderBook } from "ccxt";

export const getStockData = () => async (dispatch: Dispatch) => {
  dispatch({ type: ActionTypes.API_REQUEST });

  try {
    const response: OrderBook = await ccxtAPI();

    dispatch({
      type: ActionTypes.API_SUCCESS,
      payload: { asks: response?.asks, bids: response?.bids },
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.API_FAILURE,
      error: error.toString(),
    });
  }
};
