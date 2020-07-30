import loading from "./loading";
import users from "../saga/reducerSaga";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    load: loading.reducer,
    users: users.reducer
})

export default allReducers