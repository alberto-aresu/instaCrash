const counter = (state = 0, action) => {
    switch (action.type) {
        case "AUMENTA":
            return state + 1
        case "DIMINUISCI":
            return state - 1
        default:
            return state
    }
}

export default counter