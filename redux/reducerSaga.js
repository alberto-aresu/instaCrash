import { createSlice } from "@reduxjs/toolkit";

// export const { DATA_FETCH } = users.actions;

export const users = createSlice({
    name: "data",
    initialState: [],
    reducers: {
        DATA_FETCH: (state, action) => {
            return action.payload
        },
        FAILED_TO_FETCH: state => state = console.log("Error: Data not Fetched")
    }
})
