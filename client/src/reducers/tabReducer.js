import { SELECTED_TAB_CHANGED } from '../actions/types';

const initialState = 'book';

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_TAB_CHANGED:
            return action.payload;
        default:
            return state;
    }
};
