import { GET_DATA, UPDATE_STATE, SET_ERROR } from "../actions";
export const initState = {
    isLoading: false,
    joke: { type: "single" }
}

export const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state, isLoading: true
            }
        case UPDATE_STATE:
            return {
                ...state, isLoading: false, joke: action.res.data
            }
        case SET_ERROR:
            console.log("encountered an error")
            return state
        default: 
            return state        
    }
}