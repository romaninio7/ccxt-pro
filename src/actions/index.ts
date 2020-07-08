import { ActionTypes } from "actions/types";
import ccxtAPI from "api/ccxtAPI";

export const getStockData = () => async (dispatch) => {
  dispatch({ type: ActionTypes.API_REQUEST });

  try {
    const response = await ccxtAPI();
    console.log(response);

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
