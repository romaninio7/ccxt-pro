import { combineReducers } from "redux";
// import dishesState from 'reducers/dishes';
import ccxtReducer from "reducers/ccxtReducer";
// import { IStore } from 'interfaces';

const allReducers = combineReducers<any>({
  ccxtReducer,
  //   dishesState,
  //   currentSearch,
  //   form: formReducer,
});

export default allReducers;
