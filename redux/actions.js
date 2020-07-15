export const FETCH_DATA = () => {
    return {
        type: "FETCH_DATA",
    }
}

export const DATA_FETCH_FAILED = () => {
    return {
        type: "DATA_FETCH_FAILED",
        payload: console.log("ERROR FETCHING DATA")
    }
}

