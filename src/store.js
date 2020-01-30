import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const middleware = [thunk];

const initialState = {};

const composeEnhances = composeWithDevTools({
  name: "sistazshare",
  actionsBlacklist: ["REDUX_STORAGE_SAVE"]
});

const store = createStore(
  rootReducer,
  initialState,
  composeEnhances(applyMiddleware(...middleware))
);

export default store;
