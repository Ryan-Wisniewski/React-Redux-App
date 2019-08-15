//actions import
import {
    FETCH_DOGS_DATA_START,
    FETCH_DOGS_DATA_SUCCESS
} from '../actions'
export const initialState = {
    dogs: [],
    isLoading: false,
}

export const reducers = (state= initialState, action) => {
    switch(action.type){
        case FETCH_DOGS_DATA_START:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_DOGS_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                dogs: action.payload
            }
        default:
            return state
    }
}
