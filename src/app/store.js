import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"; // redux thunk middleware
import authReducer from "../features/Auth/reducer";

// composer enhancer to connect Chrome devtools redux
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducers = combineReducers({
  auth: authReducer,
});

// create store and use composerEnhancer + middleware thunk
const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);

export default store;
