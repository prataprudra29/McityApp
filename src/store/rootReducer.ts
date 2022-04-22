import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from 'redux-devtools-extension';

// import from reducers

import { storeDataReducer } from "./account/reducer";

const reducer = combineReducers({
  // reducers from different screens including login
  storeReducer: storeDataReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
  // composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
