import axios from 'axios';
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

export const getMediaItems = () => dispatch => {
    // TODO - Add actual logic
    dispatch({
        type: GET_MEDIA_ITEMS,
        payload: fakeItemData
    });
};

export const saveMediaItem = item => dispatch => {
    dispatch({
        type: SAVE_MEDIA_ITEM,
        payload: item
    });
};