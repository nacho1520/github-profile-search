// Reducer Actions
const ACTIONS = {
    SET_USER: "SET_USER",
    SET_PROFILE: "SET_PROFILE",
    SET_REPOSITORIES: "SET_REPOSITORIES",
};

// Reducer
const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'SET_PROFILE': 
            return { ...state, ...action.payload };
        case 'SET_REPOSITORIES': 
            return { ...state, repositories: action.payload };
        default:
            return state;
    }
};

export default { ACTIONS, reducer };
