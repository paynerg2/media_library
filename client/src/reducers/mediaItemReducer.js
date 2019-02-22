import { GET_MEDIA_ITEMS, SAVE_MEDIA_ITEM } from '../actions/types';

const initialState = {
    mediaItems: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MEDIA_ITEMS:
            return {
                ...state,
                mediaItems: action.payload
            };
        case SAVE_MEDIA_ITEM:
            return {
                ...state,
                mediaItems: [...state, action.payload]
            };
        default:
            return state;
    }
};
