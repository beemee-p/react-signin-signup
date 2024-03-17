import { combineReducers, createStore } from "redux";
import user from "../store/user/reducer";

const rootReducer = combineReducers({ user });
const store = createStore(rootReducer);
export default store;

export type rootState = ReturnType<typeof store.getState>;
