import Library from '../apis/Library';
import { GET_MEDIA_ITEMS, SAVE_MEDIA_ITEM } from './types';

const fakeItemData = [
    {
        id: 1,
        name: 'fake item',
        author: 'fake author',
        demographic: 'fake demographic',
        type: 'book',
        ISBN: 123456789,
        language: 'FLN',
        publisher: 'fake publisher, LLC'
    },
    {
        id: 2,
        name: 'fake item',
        author: 'fake author',
        demographic: 'fake demographic',
        type: 'disc',
        ISBN: 123456789,
        language: 'FLN',
        publisher: 'fake publisher, LLC'
    }
];

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
