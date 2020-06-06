import {
    GET_IMAGES,
    DELETE_IMAGE,
    GET_IMAGE_BY_ID,
} from '../actions/types.js';

const initialState = {
    images: [],
    image: {},
}

export default function(state = initialState,action){
    switch (action.type) {
        case GET_IMAGES:
            return{
                ...state,
                images: action.payload.images,
            }
            break;
        default:
            return state
            break;
    }
}
