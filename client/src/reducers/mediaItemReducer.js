import {
    GET_MEDIA_ITEMS,
    SAVE_MEDIA_ITEM,
    DELETE_MEDIA_ITEM,
    EDIT_MEDIA_ITEM
} from '../actions/types';

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
                mediaItems: [...state.mediaItems, action.payload]
            };
        case DELETE_MEDIA_ITEM:
            return {
                ...state,
                mediaItems: state.mediaItems.filter(
                    element => element._id !== action.payload
                )
            };
        case EDIT_MEDIA_ITEM:
            console.log(action.payload);
            return {
                ...state,
                mediaItems: state.mediaItems.map(element =>
                    element._id === action.payload._id
                        ? action.payload
                        : element
                )
            };
        default:
            return state;
    }
};
