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
            console.log(action.payload);
            return {
                ...state,
                mediaItems: [...state.mediaItems, action.payload]
            };
        default:
            return state;
    }
};
