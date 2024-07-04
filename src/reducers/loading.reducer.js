// Reducer Actions
const LOADING_ACTIONS = {
    LOAD_PROFILE: "LOAD_PROFILE",
    STOP_LOADING_PROFILE: "STOP_LOADING_PROFILE",
    LOAD_RESULTS: "LOAD_RESULTS",
    STOP_LOADING_RESULTS: "STOP_LOADING_RESULTS", 
};

// Reducer
const loadingReducer = (state, action) => {
    switch(action.type) {
        case 'LOAD_PROFILE':
            return { ...state, loadingProfile: true };
        case 'STOP_LOADING_PROFILE': 
            return { ...state, loadingProfile: false };
        case 'LOAD_RESULTS': 
            return { ...state, loadingResults: true };
        case 'STOP_LOADING_RESULTS': 
            return { ...state, loadingResults: false };
        default:
            return state;
    }
};

export default { LOADING_ACTIONS, loadingReducer };
