import mediaItemReducer from '../mediaItemReducer';
import { GET_MEDIA_ITEMS, SAVE_MEDIA_ITEM } from '../../actions/types';

it('handles actions with unknown type', () => {
    const newState = mediaItemReducer([], {});
    expect(newState).toEqual([]);
});

it('handles actions with type SAVE_MEDIA_ITEM', () => {
    const action = {
        type: SAVE_MEDIA_ITEM,
        payload: {
            id: 0,
            name: 'new item',
            author: 'Reed Richards'
        }
    };

    const newState = mediaItemReducer([], action);
    expect(newState.mediaItems).toEqual([
        { id: 0, name: 'new item', author: 'Reed Richards' }
    ]);
});
