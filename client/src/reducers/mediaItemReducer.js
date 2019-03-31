import {
    GET_MEDIA_ITEMS,
    SAVE_MEDIA_ITEM,
    DELETE_MEDIA_ITEM,
    EDIT_MEDIA_ITEM
} from '../actions/types';

const initialState = {
    mediaItems: []
};

// TODO: sorting new additions to the state so that new items don't show up out of order.
// TODO: would this remove any of the benefits of memoization since it would need to re-render every time regardless?

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
