import { combineReducers } from "redux";
import ccxtReducer from "reducers/ccxtReducer";

const allReducers = combineReducers<any>({
  ccxtReducer,
});

export default allReducers;
