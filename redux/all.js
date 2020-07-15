//counter.js
export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        default:
            return state
    }
}

//logged.js
export const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case "SING_IN":
            return !state
        default:
            return state
    }
}

//homescreen.js
import {createStore} from "redux";

const store = createStore(allReducers)

//combinedStores.js
import {combineReducers} from "redux";

export const allReducers = combineReducers({
    counterReducer,
    loggedReducer
})