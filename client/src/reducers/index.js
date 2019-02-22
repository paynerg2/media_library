import { combineReducers } from 'redux';
import mediaItemReducer from './mediaItemReducer';

export default combineReducers({
    mediaItem: mediaItemReducer
});
