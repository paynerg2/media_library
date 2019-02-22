import React from 'react';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './AppNavbar';
import LibraryTab from './LibraryTab';
import MediaListView from './MediaListView';
import store from '../store';

export default () => {
    return (
        <Provider store={store}>
            <div>
                <AppNavbar />
                <LibraryTab />
                <MediaListView />
            </div>
        </Provider>
    );
};
