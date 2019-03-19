import { combineReducers } from 'redux';
import mediaItemReducer from './mediaItemReducer';
import tabReducer from './tabReducer';
import authReducer from './authReducer';

export default combineReducers({
    mediaItem: mediaItemReducer,
    selectedTab: tabReducer,
    auth: authReducer
});
