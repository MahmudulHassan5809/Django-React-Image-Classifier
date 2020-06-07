import axios from 'axios';
import { createMessage,returnErrors } from './messageActions';

import {
    GET_IMAGES,
    ADD_IMAGE,
    DELETE_IMAGE,
    GET_IMAGE_BY_ID,
    GET_ERRORS
} from './types.js';

// GET ALL Images
export const getImages = () => (dispatch) => {
    axios.get(`/api/images/`)
        .then(res => {
            dispatch({
                type: GET_IMAGES,
                payload : {
                    images : res.data,
                }
            })
        })
        .catch(err => {
            console.log(err.response.data)
            dispatch(returnErrors(err.response.data,err.response.status))
        });
}

// ADD  Image
export const addImage = (data) => (dispatch) => {

    axios.post('/api/image/create/',data,{
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
    .then(res => {
        dispatch(createMessage({imageAdded: 'Image Uploaded'}));
        dispatch(getImageById(res.data.id))
    })
    .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
}


// GET Image By ID
export const getImageById = (image_id) => (dispatch) => {
    axios.get(`/api/image/${image_id}`)
        .then(res => {
            dispatch({
                type: GET_IMAGE_BY_ID,
                payload : res.data
            })
        })
        .catch(err => {
            console.log(err.response.data)
            dispatch(returnErrors(err.response.data,err.response.status))
        });
}
