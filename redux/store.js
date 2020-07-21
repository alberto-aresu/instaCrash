import apiData from "./reducer";
import loading from "./loading";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    apiData : apiData.reducer,
    load : loading.reducer,
})

export default allReducers

//Per usare lo state in qualsiasi componente
//import {useSelector} from "react-redux";
//const items = useselector(state => state.apiData)