import { combineReducers, createStore, applyMiddleware } from "redux";
import commonReducer from "./commonReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    common: commonReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;