const loading = (state = true, action) => {
    switch (action.type) {
        case "Loading":
            return state
        default:
            return !state
    }
}

export default loading