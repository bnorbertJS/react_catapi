const fetchCatReducer = (state = [], action) => {
    switch(action.type) {
        case "FETCH_CATS_SUCCESS":
            return [
                ...action.payload,
                ...state
            ]
        case "FETCH_MORE_CATS_SAGA_SUCCESS":
            return [
                ...action.payload,
                ...state
            ]
        case "FETCH_MORE_CATS_SAGA_START":
            return state
        case "FETCH_MORE_CATS_SAGA_ERROR":
            return state
        case "FETCH_CATS_START":
            return state
        case "FETCH_CATS_ERROR":
            return state
        default:
        return state
    }
}

export default fetchCatReducer