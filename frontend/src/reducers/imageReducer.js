import {
    ADD_IMAGE,
    GET_IMAGES,
    DELETE_IMAGE,
    GET_IMAGE_BY_ID,
    LOADING,
} from '../actions/types.js';

const initialState = {
    images: [],
    image: null,
    isLoading: false,
}

export default function(state = initialState,action){
    switch (action.type) {
        case GET_IMAGES:
            return{
                ...state,
                images: action.payload.images,
                isLoading: false,
            }
            break;
        case GET_IMAGE_BY_ID:
            return{
                ...state,
                image: action.payload,
                isLoading: false,
            }
            break;
        case LOADING:
            return {
                ...state,
                isLoading: true
            };
        default:
            return state
            break;
    }
}
