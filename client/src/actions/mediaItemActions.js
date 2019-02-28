import Library from '../apis/Library';
import { GET_MEDIA_ITEMS, SAVE_MEDIA_ITEM } from './types';

export const getMediaItems = library => dispatch => {
    console.log('get media items action called');
    Library.get(`/api/media/${library}`).then(res => {
        dispatch({
            type: GET_MEDIA_ITEMS,
            payload: res.data
        });
    });
};

export const saveMediaItem = item => dispatch => {
    dispatch({
        type: SAVE_MEDIA_ITEM,
        payload: item
    });
};
