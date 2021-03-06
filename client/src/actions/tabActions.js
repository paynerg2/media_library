import { SELECTED_TAB_CHANGED, GET_MEDIA_ITEMS } from './types';
import Library from '../apis/Library';

// TODO: implement some form of memoization
// TODO: may be a good idea to just filter what's displayed instead of fetching data again

export const selectedTabChanged = (tab, userId) => async dispatch => {
    await dispatch({
        type: SELECTED_TAB_CHANGED,
        payload: tab
    });

    // Update the items to be shown
    Library.get(`/api/media/${tab}s/${userId}`).then(res => {
        dispatch({
            type: GET_MEDIA_ITEMS,
            payload: res.data
        });
    });
};
