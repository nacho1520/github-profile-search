// Reducer Actions
const ACTIONS = {
    SET_QUERY: "SET_QUERY",
    SET_RESULTS: "SET_RESULTS",
};

// Reducer
const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_QUERY': 
            return { ...state, query: action.payload };
        case 'SET_RESULTS': 
            return { ...state, searchResults: action.payload };
        default:
            return state;
    }
};

export default { ACTIONS, reducer };
