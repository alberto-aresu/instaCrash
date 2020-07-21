import { createSlice } from "@reduxjs/toolkit";

// con Redux Toolkit
const apiData = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        FETCH_DATA: (state, action) => {
            return action.payload
        },
        DATA_FETCH_FAILED: state => state = console.log("Error: Data not Fetched")
    }
})

// senza Redux Toolkit
// const apiData = (state = [], action) => {
//     switch (action.type) {
//         case "DATA_FETCH_FAILED":
//             return console.log("DATA FAILED")
//         case "FETCH_DATA":
//             return action.payload
//         default:
//             return state
//     }
// }

export default apiData