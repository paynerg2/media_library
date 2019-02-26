import { combineReducers } from 'redux';
import mediaItemReducer from './mediaItemReducer';
import tabReducer from './tabReducer';

export default combineReducers({
    mediaItem: mediaItemReducer,
    selectedTab: tabReducer
});
