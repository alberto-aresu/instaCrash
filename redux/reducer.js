const apiData = (state = null, action) => {
    switch (action.type) {
        case "DATA_FETCH_FAILED":
            return console.log("DATA FAILED")
        case "FETCH_DATA":
            return action.payload
        default:
            return state
    }
}


export default apiData