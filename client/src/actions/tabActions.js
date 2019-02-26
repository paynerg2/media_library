import { SELECTED_TAB_CHANGED } from './types';

export const selectedTabChanged = tab => async dispatch => {
    dispatch({
        type: SELECTED_TAB_CHANGED,
        payload: tab
    });
};
