import apiData from "./reducer";
import loading from "./loading";
import counter from "../reduxCounter/reducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    apiData,
    //loading,
    counter
})

export default allReducers

//Per usare lo state in qualsiasi componente
//import {useSelector} from "react-redux";
//const items = useselector(state => state.apiData)