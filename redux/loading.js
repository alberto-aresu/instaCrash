import { createSlice } from "@reduxjs/toolkit";

const loading = createSlice({
    name: "load",
    initialState: false,
    reducers: {
        LOG_IN: state => state = true,
        LOG_OUT: state => state
    }
})

export default loading