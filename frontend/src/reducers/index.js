import { combineReducers } from 'redux';
import imageReducer  from './imageReducer';
import errorReducer  from './errorReducer';
import messageReducer  from './messageReducer';


export default combineReducers({
    image: imageReducer,
    error: errorReducer,
    message: messageReducer,
});
