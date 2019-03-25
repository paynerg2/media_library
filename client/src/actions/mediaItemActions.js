import Library from '../apis/Library';
import {
    GET_MEDIA_ITEMS,
    SAVE_MEDIA_ITEM,
    DELETE_MEDIA_ITEM,
    EDIT_MEDIA_ITEM
} from './types';

export const getMediaItems = library => dispatch => {
    Library.get(`/api/media/${library}`).then(res => {
        dispatch({
            type: GET_MEDIA_ITEMS,
            payload: res.data
        });
    });
};

export const saveMediaItem = (library, item) => dispatch => {
    Library.post(`/api/media/${library}`, item).then(res => {
        dispatch({
            type: SAVE_MEDIA_ITEM,
            payload: { ...item, _id: res.data._id }
        });
    });
};

export const deleteMediaItem = (library, id) => dispatch => {
    Library.delete(`/api/media/${library}/${id}`).then(res => {
        dispatch({
            type: DELETE_MEDIA_ITEM,
            payload: id
        });
    });
};

export const editMediaItem = (library, id, item) => dispatch => {
    Library.put(`api/media/${library}/${id}`, item).then(res => {
        dispatch({
            type: EDIT_MEDIA_ITEM,
            payload: res.data
        });
    });
};
