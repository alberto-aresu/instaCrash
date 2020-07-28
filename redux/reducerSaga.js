import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
    name: "data",
    initialState: [],
    reducers: {
        DATA_FETCH: (state, action) => {
            return action.payload
        },
        FAILED_TO_FETCH: state => state = console.log("Error: Data not Fetched")
    }
})

export default users