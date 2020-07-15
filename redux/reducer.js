import {DATA_FETCH_FAILED, FETCH_DATA} from "./actions";
import data from "../screens/homeScreen";

const inistalState = () => {
    data()
}

console.log(inistalState)

 const apiData = (state = inistalState, action) => {
    switch (action.type) {
        case "DATA_FETCH_FAILED": 
        return DATA_FETCH_FAILED
        default:
        return {...state, state}
    }
}   
export default apiData